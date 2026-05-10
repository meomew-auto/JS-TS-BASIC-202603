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

- Các bước để đẩy code lên remote repository
  B1: Khởi tạo git trong folder hiện
  git init
  Ý nghĩa: làm lần đầu tiên và duy nhất -> sau lệnh này git sẽ tạo rra 1 folder ẩn tên là .git
  -> là nơi lưu lịch sử thay đổi của project. bình thường mình ko cần mở hoặc sửa trực tiếp folder này
  Initianilzed -> khởi tạo xong
  empty Git repository -> lịch sử đang rỗng vì chúng ta chưa commirt lân fnaof
  -B2:
