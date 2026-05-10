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
  -B2: kiểm tra trạng thái file
  git status
  nói đơn giản: git đã đc bật tỏng folder -> nhưng chưa tạo mốc lưu đầu tiên
  B3: git add tên filder hoặc tên folder
  git add . -> chọn tât cả các file đang thay đổi trong project
  B4: tạo commit đầu tiên
  git commit -m "nội dung mô tả commit"
  B5: đặt tên nhánh chính là main (vì github đặt tên nhánh chính là main)
  git branch -M main
  B6: gắn folder này với remote repossiory trên git
  nối git ở local với remote repo để chia sẻ code
  git remote add origin ....đường link remote repositry
  git remote add origin https://github.com/meomew-auto/JS-TS-BASIC-202603.git
  -> sau này push (đẩy code) thì đẩy code lên đâu
  B7: push đẩy code
  lần đầu tiên chưa đẩy code -> ta thiết lập upstream cho branch local hiện tại với remote
  git push -u origin main
  -u: upstream
  origin là tên ngắn của repo github mà mình đã gắn vào

có nhiều môi trường
dev: main -> nhánh này là nhánh chính chạy ổn định -> khi làm việc người ta sẽ tạo ra 1 nhánh khác để làm việc để ko ảnh hưởng tới nhánh chính đang sử dụng -> sau khi code ổn định ở nhánh phụ -> chúng ta mới merge code -> vào nhánh chính -> để bổ sung thêm tính năng
uat: main1

Cách đặt tên commit

- khi project có nhiều cmmit -> mình cần nhìn lịch sử để biết

* hôm đó sửa gì
* ai sửa
* sẳ thêm tính năng gì

- Công thức đơn giản nhất đặt tên

* động từ + nội dung thay đổi

ví dụ
add login test
fix login validation
update git lesson
remove unused locator
cách chuyên nghiệp L khi quen hơn ta có thể dùng
type: nội dung thay đổi
feature(chức năng mới)

docs: update git lesson
feat: add product search flow
test: add login test
fix: correct login selector
git log --oneline
0f58b09 (HEAD -> main, origin/main, origin/HEAD) docs: add git lesson
f2541b4 2nd commit
544d02d first commit

HEAD -> Main: là vị trí mọi người đang đứng

Muốn lấy thông tin về code mới nhất ta dùng git pull

sửa lần 2
sửa lần 3

ví dụ ngày A
main có 10 dòng code

main -> tạo nhánh mới -> sửa code -> commit -> push nhánh -> merge vào main -> push main

bạn A: -> kéo code về -> tạo nhánh mới -> đẩy merge main -> lúc này main có 20 dòng
bạn B: -> kéo code (1o dòng) -> bạn B ngày n sau khi main có 20 dòng mới merge -> HOÀN TOÀN OK
-> trường hợp code bạn B sửa cùng 1 file với bạn A (sau khi update 20 dòng) => nó mới xảy ra conflict => resolve
-> ko confict thì merege ok -> pull main về để có cả code của B -> và bắt đầu taoh nhánh mới code tiếp

branch
cách đặt tên ngắn gọn, ko dáu. ko có khoẳng trắn

docs/git-lesson
feat/product-search
fix/
tests/

ko nên đặt
nhánh mới
test
abc

Trước khi tạo nhánh mớim nên quay về main
lý do: nhánh mới sẽ tạo ra trên nhánh hiện tại
Nếu đang đứng ở main -> nhánh mới sẽ lấy từ main
FLOW: quay về main -> pull code mới nhất -> tạo nhánh từ main

git checkout main
git checkout: chuyển sang 1 nhánh khác
