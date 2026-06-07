param(
    [string]$Branch = "main",
    [string]$Remote = "origin",
    [string]$Message = "first commit",
    [switch]$Push,
    [switch]$DeleteRemoteBranches,
    [switch]$Yes
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
    param(
        [string[]]$GitArgs
    )

    Write-Host "> git $($GitArgs -join ' ')" -ForegroundColor Cyan
    & git @GitArgs
    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed: git $($GitArgs -join ' ')"
    }
}

function Test-GitStateFile {
    param([string]$Name)

    return Test-Path -LiteralPath (Join-Path ".git" $Name)
}

$insideRepo = (& git rev-parse --is-inside-work-tree 2>$null)
if ($LASTEXITCODE -ne 0 -or $insideRepo.Trim() -ne "true") {
    throw "This folder is not inside a Git repository."
}

$repoRoot = (& git rev-parse --show-toplevel).Trim()
Set-Location -LiteralPath $repoRoot

if ((Test-GitStateFile "MERGE_HEAD") -or (Test-GitStateFile "REVERT_HEAD") -or (Test-GitStateFile "CHERRY_PICK_HEAD")) {
    throw "Git is in the middle of merge/revert/cherry-pick. Finish or abort it before resetting history."
}

if (-not $Yes) {
    Write-Host ""
    Write-Host "This script will rewrite Git history." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "It will:"
    Write-Host "- keep current files"
    Write-Host "- create one new root commit: $Message"
    Write-Host "- delete all local branches except the new $Branch"
    Write-Host "- optionally force push $Branch if you pass -Push"
    Write-Host "- optionally delete remote branches if you pass -DeleteRemoteBranches"
    Write-Host ""
    Write-Host "Run one of these:"
    Write-Host ".\scripts\reset-git-history.ps1 -Yes"
    Write-Host ".\scripts\reset-git-history.ps1 -Yes -Push"
    Write-Host ".\scripts\reset-git-history.ps1 -Yes -Push -DeleteRemoteBranches"
    Write-Host ""
    exit 0
}

$tempBranch = "__clean_history_$([DateTime]::Now.ToString('yyyyMMddHHmmssfff'))_$(([guid]::NewGuid().ToString('N')).Substring(0, 8))"

Write-Host "Repo: $repoRoot" -ForegroundColor Green
Write-Host "Target branch: $Branch" -ForegroundColor Green
Write-Host "Remote: $Remote" -ForegroundColor Green
Write-Host ""

Invoke-Git @("checkout", "--orphan", $tempBranch)
Invoke-Git @("add", "-A")
Invoke-Git @("commit", "-m", $Message)

$localBranches = (& git branch --format="%(refname:short)") | Where-Object { $_ -and $_ -ne $tempBranch }
foreach ($localBranch in $localBranches) {
    Invoke-Git @("branch", "-D", "--", $localBranch)
}

Invoke-Git @("branch", "-m", $Branch)

if ($Push) {
    Invoke-Git @("push", "-u", $Remote, $Branch, "--force")

    if ($DeleteRemoteBranches) {
        $remoteHeads = (& git ls-remote --heads $Remote)
        foreach ($line in $remoteHeads) {
            if (-not $line) {
                continue
            }

            $parts = $line -split "\s+"
            if ($parts.Count -lt 2) {
                continue
            }

            $remoteBranch = $parts[1] -replace "^refs/heads/", ""
            if ($remoteBranch -and $remoteBranch -ne $Branch) {
                Invoke-Git @("push", $Remote, "--delete", $remoteBranch)
            }
        }
    }

    Invoke-Git @("fetch", "--prune", $Remote)
}

Invoke-Git @("reflog", "expire", "--expire=now", "--all")
Invoke-Git @("gc", "--prune=now")

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Invoke-Git @("status", "--short", "--branch")
Invoke-Git @("log", "--oneline", "--decorate", "--all", "-5")
Write-Host ""
Write-Host "Commit count:"
Invoke-Git @("rev-list", "--all", "--count")
