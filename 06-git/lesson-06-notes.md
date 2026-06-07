- **Git** giúp lưu lại nhiều phiên bản của project theo thời gian.
  - Ví dụ:
    - `login.js`: 2 dòng
    - `login-final.js`: 5 dòng
    - `login-final-new.js`

- Git lưu lịch sử của project theo cách sạch sẽ và dễ theo dõi hơn.
  - Commit 1: tạo form login
  - Commit 2: validate email

- **Ưu điểm của Git:**
  - Không sợ hỏng code vì luôn có lịch sử để quay lại.
  - Giúp rèn cách chia nhỏ công việc thành từng bước.
  - Có thể đưa code lên GitHub để lưu trữ và chia sẻ.
  - Làm quen với flow của team: branch, pull request, review, merge.

- **Mỗi lần commit, Git sẽ lưu lại:**
  - File nào thay đổi
  - Nội dung thay đổi là gì
  - Ai là người commit
  - Thời điểm commit
  - Commit message (lý do commit)
  - Commit trước đó là commit nào

- **Luồng lịch sử commit:**
  - A -> B -> C -> D
  - A: tạo project
  - B: thêm login
  - C: sửa validation

- **Các khu vực quan trọng cần lưu ý:**
  - **Working directory**: thư mục project trên máy
  - **Staging area**: vùng chuẩn bị commit, nơi bạn chọn file nào sẽ được commit tiếp theo
  - **Local repository**: thư mục `.git` trên máy, nơi lưu lịch sử commit local
  - **Remote repository**: GitHub, GitLab, Bitbucket, nơi lưu bản online

## Các bước đẩy code lên remote repository

### B1: Khởi tạo Git trong folder hiện tại

```bash
git init
```

Ý nghĩa:

- Chỉ cần làm lần đầu tiên và duy nhất trong project.
- Sau lệnh này, Git sẽ tạo ra một folder ẩn tên là `.git`.
- Folder `.git` là nơi lưu lịch sử thay đổi của project.
- Bình thường không cần mở hoặc sửa trực tiếp folder này.

Một số thông báo thường gặp:

- `Initialized`: đã khởi tạo xong.
- `empty Git repository`: lịch sử đang rỗng vì chưa có commit nào.

### B2: Kiểm tra trạng thái file

```bash
git status
```

Nói đơn giản: Git đã được bật trong folder, nhưng chưa tạo mốc lưu đầu tiên.

### B3: Thêm file vào staging area

```bash
git add tên-file
git add tên-folder
git add .
```

Trong đó:

- `git add tên-file`: chọn một file cụ thể.
- `git add tên-folder`: chọn một folder cụ thể.
- `git add .`: chọn tất cả các file đang thay đổi trong project.

### B4: Tạo commit đầu tiên

```bash
git commit -m "nội dung mô tả commit"
```

### B5: Đặt tên nhánh chính là `main`

```bash
git branch -M main
```

Lý do: GitHub thường đặt tên nhánh chính là `main`.

### B6: Gắn folder local với remote repository

Mục đích: nối Git ở local với remote repository để chia sẻ code.

```bash
git remote add origin đường-link-remote-repository
```

Ví dụ:

```bash
git remote add origin https://github.com/meomew-auto/JS-TS-BASIC-202603.git
```

Ý nghĩa:

- `origin` là tên ngắn của repository trên GitHub.
- Sau này khi push code, Git sẽ biết cần đẩy code lên đâu.

### B7: Push code lên remote repository

Lần đầu tiên push code, cần thiết lập upstream cho branch local hiện tại với remote:

```bash
git push -u origin main
```

Trong đó:

- `-u`: viết tắt của upstream.
- `origin`: tên ngắn của repository GitHub đã gắn vào.
- `main`: tên branch cần push.

## Các môi trường làm việc

Ví dụ có nhiều môi trường:

- `dev`: dùng branch `main`.
  - Đây là nhánh chính, chạy ổn định.
  - Khi làm việc, thường tạo một nhánh khác để không ảnh hưởng đến nhánh chính.
  - Sau khi code ổn định ở nhánh phụ, mới merge code vào nhánh chính để bổ sung tính năng.
- `uat`: dùng branch `main1`.

## Cách đặt tên commit

Khi project có nhiều commit, cần nhìn lịch sử để biết:

- Hôm đó sửa gì.
- Ai sửa.
- Đã thêm tính năng gì.

Công thức đơn giản nhất:

```text
động từ + nội dung thay đổi
```

Ví dụ:

```text
add login test
fix login validation
update git lesson
remove unused locator
```

Cách chuyên nghiệp hơn khi đã quen:

```text
type: nội dung thay đổi
```

Một số `type` phổ biến:

- `docs`: thay đổi tài liệu.
- `feat`: thêm chức năng mới.
- `test`: thêm hoặc sửa test.
- `fix`: sửa lỗi.

Ví dụ:

```text
docs: update git lesson
feat: add product search flow
test: add login test
fix: correct login selector
```

Xem lịch sử commit ngắn gọn:

```bash
git log --oneline
```

Ví dụ:

```text
0f58b09 (HEAD -> main, origin/main, origin/HEAD) docs: add git lesson
f2541b4 2nd commit
544d02d first commit
```

Trong đó:

- `HEAD -> main`: vị trí hiện tại mình đang đứng là branch `main`.

## Lấy code mới nhất

Muốn lấy thông tin/code mới nhất từ remote về local:

```bash
git pull
```

## Luồng làm việc nhiều người

Ví dụ ngày A:

- Branch `main` có 10 dòng code.
- Từ `main`, tạo nhánh mới.
- Sửa code.
- Commit.
- Push nhánh.
- Merge vào `main`.
- Push `main`.

Ví dụ khi nhiều người cùng làm:

- Bạn A:
  - Kéo code về.
  - Tạo nhánh mới.
  - Code xong và merge vào `main`.
  - Lúc này `main` có 20 dòng code.
- Bạn B:
  - Kéo code khi `main` mới có 10 dòng.
  - Sau đó `main` đã có 20 dòng.
  - Bạn B merge sau vẫn hoàn toàn OK.

Chỉ xảy ra conflict khi:

- Bạn B sửa cùng một file với bạn A.
- Phần code bị sửa bị trùng hoặc liên quan đến nhau.

Khi đó cần resolve conflict.

Nếu không có conflict:

- Merge bình thường.
- Pull `main` về để có cả code mới của bạn B.
- Sau đó tạo nhánh mới để tiếp tục code.

## Branch

Cách đặt tên branch:

- Ngắn gọn.
- Không dấu.
- Không có khoảng trắng.

Ví dụ nên đặt:

```text
docs/git-lesson
feat/product-search
fix/login-validation
tests/login-flow
```

Không nên đặt:

```text
nhánh mới
test
abc
```

## Trước khi tạo nhánh mới

Nên quay về `main` trước khi tạo nhánh mới.

Lý do:

- Nhánh mới sẽ được tạo ra từ nhánh hiện tại.
- Nếu đang đứng ở `main`, nhánh mới sẽ lấy code từ `main`.

Flow chuẩn:

- Quay về `main`.
- Pull code mới nhất.
- Tạo nhánh mới từ `main`.

```bash
git checkout main
git pull
git checkout -b tên-nhánh-mới
```

Trong đó:

- `git checkout main`: chuyển sang branch `main`.
- `git checkout`: dùng để chuyển sang một branch khác.

## Merge branch

Sau khi code xong ở nhánh mới:

- Checkout về `main`.
- Merge nhánh muốn đưa code vào `main`.

```bash
git checkout main
git merge tên-nhánh-muốn-merge
```

Ví dụ:

```text
tôi đã code xong ở nhánh mới
tôi đã code xong ở nhánh 2
```

## Xóa branch

Xóa branch remote trên GitHub:

```bash
git push origin --delete tên-nhánh-muốn-xóa
```

Xóa branch local:

```bash
git branch -d tên-nhánh
git branch -D tên-nhánh
```

Trong đó:

- `git branch -d`: xóa branch local đã merge.
- `git branch -D`: ép xóa branch local, kể cả chưa merge.

## Tài liệu tham khảo

Tài liệu chi tiết cho case nhiều người cùng làm, `main` có code mới trong khi branch của mình cũng có code:

```text
06-git/lesson-07-team-main-update-workflow.md
```

.gitignore

xảy ra 2 trường hợp với gitignore
1 file chưa từng commit -> thêm vào .gitignore là đủ
2 file đã commit/push -> thêm vào .gitignore là chưa đủ. phải dùng git rm --cached hoặc git rm -r --cached
