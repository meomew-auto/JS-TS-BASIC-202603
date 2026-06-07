#!/usr/bin/env bash
set -euo pipefail

branch="main"
remote="origin"
message="first commit"
push=false
delete_remote_branches=false
yes=false

print_usage() {
  cat <<'EOF'
Usage:
  ./scripts/reset-git-history.sh --yes
  ./scripts/reset-git-history.sh --yes --push
  ./scripts/reset-git-history.sh --yes --push --delete-remote-branches

Options:
  --branch <name>                 Target branch name. Default: main
  --remote <name>                 Remote name. Default: origin
  --message <message>             New root commit message. Default: first commit
  --push                          Force push target branch to remote
  --delete-remote-branches        Delete other branches on remote after push
  --yes                           Actually run the reset
  -h, --help                      Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)
      branch="${2:?Missing value for --branch}"
      shift 2
      ;;
    --remote)
      remote="${2:?Missing value for --remote}"
      shift 2
      ;;
    --message)
      message="${2:?Missing value for --message}"
      shift 2
      ;;
    --push)
      push=true
      shift
      ;;
    --delete-remote-branches)
      delete_remote_branches=true
      shift
      ;;
    --yes)
      yes=true
      shift
      ;;
    -h|--help)
      print_usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      print_usage
      exit 1
      ;;
  esac
done

run_git() {
  printf '> git'
  printf ' %q' "$@"
  printf '\n'
  git "$@"
}

test_git_state_file() {
  [[ -f ".git/$1" ]]
}

if ! inside_repo="$(git rev-parse --is-inside-work-tree 2>/dev/null)"; then
  echo "This folder is not inside a Git repository." >&2
  exit 1
fi

if [[ "$inside_repo" != "true" ]]; then
  echo "This folder is not inside a Git repository." >&2
  exit 1
fi

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

if test_git_state_file "MERGE_HEAD" || test_git_state_file "REVERT_HEAD" || test_git_state_file "CHERRY_PICK_HEAD"; then
  echo "Git is in the middle of merge/revert/cherry-pick. Finish or abort it before resetting history." >&2
  exit 1
fi

if [[ "$yes" != true ]]; then
  cat <<EOF

This script will rewrite Git history.

It will:
- keep current files
- create one new root commit: $message
- delete all local branches except the new $branch
- optionally force push $branch if you pass --push
- optionally delete remote branches if you pass --delete-remote-branches

Run one of these:
./scripts/reset-git-history.sh --yes
./scripts/reset-git-history.sh --yes --push
./scripts/reset-git-history.sh --yes --push --delete-remote-branches

EOF
  exit 0
fi

if command -v uuidgen >/dev/null 2>&1; then
  suffix="$(uuidgen | tr '[:upper:]' '[:lower:]' | tr -d '-' | cut -c1-8)"
else
  suffix="$$"
fi

temp_branch="__clean_history_$(date +%Y%m%d%H%M%S)_${suffix}"

printf 'Repo: %s\n' "$repo_root"
printf 'Target branch: %s\n' "$branch"
printf 'Remote: %s\n\n' "$remote"

run_git checkout --orphan "$temp_branch"
run_git add -A
run_git commit -m "$message"

while IFS= read -r local_branch; do
  if [[ -n "$local_branch" && "$local_branch" != "$temp_branch" ]]; then
    run_git branch -D -- "$local_branch"
  fi
done < <(git branch --format='%(refname:short)')

run_git branch -m "$branch"

if [[ "$push" == true ]]; then
  run_git push -u "$remote" "$branch" --force

  if [[ "$delete_remote_branches" == true ]]; then
    while IFS=$'\t ' read -r _sha ref_name; do
      remote_branch="${ref_name#refs/heads/}"
      if [[ -n "$remote_branch" && "$remote_branch" != "$branch" ]]; then
        run_git push "$remote" --delete "$remote_branch"
      fi
    done < <(git ls-remote --heads "$remote")
  fi

  run_git fetch --prune "$remote"
fi

run_git reflog expire --expire=now --all
run_git gc --prune=now

printf '\nDone.\n'
run_git status --short --branch
run_git log --oneline --decorate --all -5
printf '\nCommit count:\n'
run_git rev-list --all --count
