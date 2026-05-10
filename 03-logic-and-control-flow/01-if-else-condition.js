// Kiểm tra độ dài của mật khẩu
let password = "1234";

// Nếu mật khẩu có từ 6 ký tự trở lên thì hợp lệ
if (password.length >= 6) {
  console.log("Hợp lệ");
} else {
  // Ngược lại thì mật khẩu không hợp lệ
  console.log("Không hợp lệ");
}

// Ví dụ viết điều kiện trực tiếp trong if
// let age = 20;
// let hasTicket = true;

// if (age > 18 && hasTicket) {
//   console.log("Được vào");
// }

// Viết điều kiện tách ra thành 1 biến để dễ đọc hơn
let age = 20;
let hasTicket = true;
// Biến này sẽ là true nếu đủ 18 tuổi trở lên và có vé
let canEnterCinema = age >= 18 && hasTicket;

// Nếu canEnterCinema là true thì được vào rạp
if (canEnterCinema) {
  console.log("Được vào");
}

// Kiểm tra riêng điều kiện đủ tuổi
if (age >= 18) {
  console.log("Đủ tuổi");
}

// Ứng dụng ví dụ trong Automation Test
// Dữ liệu lấy từ UI sau khi đăng nhập
let successMessage = "Đăng nhập thành công";

// So sánh thông báo thực tế với thông báo mong đợi
if (successMessage === "Đăng nhập thành công!") {
  console.log("TEST PASS: Người dùng đc và trang chủ");
} else {
  // Nếu khác nội dung mong đợi thì test fail
  console.log("TEST FAIL: Hiển thị sai thông báo hoặc đăng nhập thất bại");
}

// Ví dụ về if - else if
let score = 95;

// Lưu ý: điều kiện này được kiểm tra trước
if (score >= 50) {
  console.log("Đậu");
} else if (score >= 90) {
  // Khối này sẽ chỉ chạy khi điều kiện trên sai
  console.log("XS");
}

// Ứng dụng trong Automation Test với mã trạng thái API
let statusCode = 404;

// Kiểm tra từng mã trạng thái để xác định kết quả trả về
if (statusCode === 200) {
  console.log("API hoạt động ok");
} else if (statusCode === 400) {
  console.log("Lỗi dữ liệu gửi lên (Bad Request)");
} else if (statusCode === 404) {
  console.log("Không tìm thấy dường dẫn, Not found");
} else {
  // Dành cho tất cả các trường hợp còn lại (ví dụ: 502, 503)
  console.log("Server đang gặp lỗi");
}
//BT nhỏlet loginStatus = "locked";

// Bài tập if/else với trạng thái đăng nhập
// 1. Nếu loginStatus === "sucess" -> in "Test pass: login thành công"
// 2. Nếu loginStatus === "locked" -> in "Tài khoản bị khóa"
// 3. Các trường hợp còn lại -> in "Test fail: login thất bại"

// Bài Dương Nhi -> OK
// Kiểm tra lần lượt từng trạng thái của loginStatus
// if (loginStatus === "success") {
//   // Nếu đăng nhập thành công thì in thông báo PASS
//   console.log("Test pass: login thành công");
// } else if (loginStatus === "locked") {
//   // Nếu tài khoản bị khóa thì in thông báo tương ứng
//   console.log("Tài khoản bị khóa");
// } else {
//   // Nếu không rơi vào 2 trường hợp trên thì xem như đăng nhập thất bại
//   console.log("Test fail: login thất bại");
// }

// Bài Diễm Lê -> OK
// Ví dụ khác với điều kiện kiểm tra tương tự
// if (loginStatus === "sucess") {
//   // Nếu trạng thái là "sucess" thì in thông báo đăng nhập thành công
//   console.log("Test pass: Login thành công");
// } else if (loginStatus === "locked") {
//   // Nếu tài khoản bị khóa thì in thông báo bị khóa
//   console.log("Tài khoản bị khóa");
// } else {
//   // Các trường hợp còn lại là đăng nhập thất bại
//   console.log("Test fail: Login thất bại");
// }

// Mình sẽ trả kết quả result dựa trên score2
let score2 = 95;
// Khai báo biến result để lát nữa gán giá trị theo điều kiện
let result;

// Kiểm tra điểm để xếp loại kết quả
if (score >= 90) {
  // Nếu điểm từ 90 trở lên thì xếp loại xuất sắc
  result = "XS";
} else if (score >= 50) {
  // Nếu điểm từ 50 đến dưới 90 thì đậu
  result = "ĐẬu";
} else {
  // Nếu nhỏ hơn 50 thì rớt
  result = "Tèo";
}

// Cách viết ngắn gọn bằng toán tử 3 ngôi
// let result = score2 >= 90 ? "XS" : score2 >= 50 ? "Đậu" : "Tèo";

// In kết quả ra màn hình
console.log(result);

// Khai báo điểm của học viên
let diem = 8;
// let trangThai;

// Cách viết đầy đủ với if/else
// if (diem >= 5) {
//   // Nếu điểm từ 5 trở lên thì PASS
//   trangThai = "PASS";
// } else {
//   // Nếu dưới 5 thì FAIL
//   trangThai = "FAIL";
// }

// Viết tắt bằng toán tử 3 ngôi
// Nếu diem >= 5 thì gán "PASS", ngược lại gán "FAIL"
let trangThai = diem >= 5 ? "PASS" : "FAIL";

// In trạng thái ra màn hình
console.log(trangThai);

// Gán text cho nút bấm
let isSaving = true;

// Nếu đang lưu thì hiện "Đang lưu", ngược lại hiện "Lưu"
let buttonText = isSaving ? "Đang lưu" : "Lưu";

// Chọn config
let isCI = false;

// Nếu chạy ở môi trường CI thì dùng "html", ngược lại dùng "list"
let reportMode = isCI ? "html" : "list";

// Hiển thị nhãn trạng thái bug
let hasBug = true;

// Nếu có bug thì hiện "Có bug", ngược lại hiện "Ổn"
let statusLabel = hasBug ? "Có bug" : "Ổn";

// Ví dụ dùng if/else khi cần ưu tiên nhiều hành động
// if (isLoginSuccess) {
//   // Nếu đăng nhập thành công thì in PASS
//   console.log("PASS");

//   // Sau đó chụp màn hình và chuyển sang dashboard
//   takeScreenShot();
//   goToDashBoard();
// } else {
//   // Nếu đăng nhập thất bại thì in FAIL
//   console.log("FAIL");
//   takseScreenshot();
// }
// Khai báo số lượng test bị fail
let failedTests = 2;

// Dùng toán tử 3 ngôi để gán trạng thái cho test suite
let suiteStatus =
  failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";

// Yêu cầu: viết lại đoạn code trên bằng if / else if / else

// Thủy Bạch
// Nếu không có test nào fail thì in ra PASS
// if (failedTests === 0) {
//   console.log("PASS");
// } else if (failedTests <= 2) {
//   // Nếu số test fail nhỏ hơn hoặc bằng 2 thì in ra WARNING
//   console.log("WARNING");
// } else {
//   // Ngược lại thì in ra FAIL
//   console.log("FAIL");
// }

// Phương Lê
// if (failedTests === 0) {
//   console.log("PASS");
// } else if (failedTests <= 2) {
//   console.log("WARNING");
// } else {
//   console.log("FAIL");
// }

// Lê Lan Hương
// Gán giá trị vào biến suiteStatus thay vì in trực tiếp ra màn hình
// if (failedTests === 0) {
//   suiteStatus = "PASS";
// } else if (failedTests <= 2) {
//   suiteStatus = "WARNING";
// } else {
//   suiteStatus = "FAIL";
// }
// console.log(suiteStatus);

// Phương Lê
// Khai báo một biến khác tên failedTest
// let failedTest = 2;
// if (failedTest === 0) {
//   console.log("PASS");
// } else if (failedTest <= 2) {
//   console.log("WARNING");
// } else {
//   console.log("FAIL");
// }

// Thu Nga
// if (failedTests === 0) {
//   suiteStatus = "PASS";
// } else if (failedTests <= 2) {
//   suiteStatus = "WARNING";
// } else {
//   suiteStatus = "FAIL";
// }

// Diễm Lê
// if (failedTests === 0) {
//   suiteStatus = "PASS";
// } else if (failedTests <= 2) {
//   suiteStatus = "WARNING";
// } else {
//   suiteStatus = "FAIL";
// }
// console.log(suiteStatus);

// Huyền Trang
// Khai báo suiteStatus trước, sau đó gán trong từng nhánh điều kiện
// let suiteStatus;
// if (failedTests === 0) {
//   suiteStatus = "PASS";
// } else if (failedTests <= 2) {
//   suiteStatus = "WARNING";
// } else {
//   suiteStatus = "FAIL";
// }

// console.log(suiteStatus);

// Ví dụ về truthy / falsy
let age3 = 18;

// age3 = 18 là giá trị truthy nên khối lệnh này sẽ chạy
if (age3) {
  console.log("Điều kiện đúng");
}

// Kiểm tra kiểu dữ liệu của age3
console.log(typeof age3);

// Chuỗi "0" là truthy nên câu lệnh này sẽ chạy
if ("0") {
  console.log("Có chạy vào đây hay không với string 0");
}

// Số 0 là falsy nên câu lệnh này sẽ không chạy
if (0) {
  console.log("Có chạy vào đây hay không");
}

// let soLuong = "0";

// Chuỗi "0" là truthy nên nếu viết như này có thể gây hiểu nhầm
// if (soLuong) {
//   console.log("Có sản phẩm");
// }

// Cách xử lý: ép kiểu sang Number trước khi kiểm tra
// if (Number(soLuong)) {
//   ...
// } else {
//   ...
// }

// Chuỗi chỉ chứa khoảng trắng
let userName = "    ";

// Chuỗi có ký tự khoảng trắng vẫn là truthy nên điều kiện này đúng
if (userName) {
  console.log("Đã nhập username");
}

// trim() loại bỏ khoảng trắng ở đầu và cuối chuỗi
// Nếu sau khi trim mà còn nội dung thì mới được xem là đã nhập thật
if (userName.trim()) {
  console.log("Đã nhập");
} else {
  console.log("username rỗng");
}

// Ví dụ thực tế
//
// Dữ liệu lấy từ web ("", hoặc "https://github.com...")
let githubLink = "";

// Cách viết dài dành cho người mới học
// if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
//   console.log("User đã upload github link");
// } else {
//   console.log("Chưa upload");
// }

// Cách viết ngắn gọn: nếu githubLink có giá trị truthy thì xem như đã nhập
if (githubLink) {
  console.log("User đã upload github link");
} else {
  console.log("Chưa upload");
}

// Ví dụ kiểm tra username hợp lệ
let rawUserName = "    ";

// Mình cần check xem rawUserName có hợp lệ hay không
// Nếu rỗng thì không hợp lệ, ngược lại là hợp lệ
// Viết câu điều kiện để kiểm tra

// Thủy Bạch
if (rawUserName.trim()) {
  console.log("Hợp lệ");
} else {
  console.log("Không hợp lệ");
}

// Thu Nga
if (rawUserName.trim()) {
  console.log("Chuỗi không rỗng");
} else {
  console.log("Chuỗi rỗng");
}

// Diễm Lệ
if (rawUserName.trim()) {
  console.log("Hợp lệ");
} else {
  console.log("Không hợp lệ");
}

// Ví dụ với switch case
let role = "admin";

// So sánh chính xác giá trị của role
switch (role) {
  case "admin":
    console.log("Cấp quyền truy cập vào toàn bộ hệ thống");
    break;
  case "editor":
    console.log("Cấp quyền chỉnh sửa");
    break;

  default:
    console.log("Lỗi role không hợp lệ");
}

// Ví dụ về đèn giao thông
let denGiaoThong = "Đỏ";

// Lưu ý: thiếu break sẽ gây hiện tượng chạy xuyên xuống case bên dưới
switch (denGiaoThong) {
  case "Đỏ":
    console.log("Dừng lại");
  case "Vàng":
    console.log("Đi chậm lại");
  case "Xanh":
    console.log("Đi thôi");
    break;
}

// Không thể dùng switch khi cần kiểm tra theo khoảng giá trị
// Vì switch chỉ so sánh chính xác bằng ===
// Còn if / else if có thể kiểm tra theo khoảng
// let score5 = 75

// if (score5 >= 90) {
//   console.log();
// } else if (score5 >= 70) {
// }

// Ví dụ với mã trạng thái HTTP
let httpStatus = 404;

// Kiểm tra từng mã trạng thái cụ thể
switch (httpStatus) {
  case 200:
    console.log("OK");
    break;
  case 301:
    console.log("Redirect");
    break;
  default:
    console.log("Unknown status");
}

// Switch cũng có thể dùng với kiểu boolean
let isVip = true;

switch (isVip) {
  case true:
    console.log("VIP");
    break;
  case false:
    console.log("BT");
    break;
}

// Gom nhiều case có cùng cách xử lý
let browserName = "firefox";
switch (browserName) {
  case "chrome":
  case "edge":
    // Gom nhóm nhiều trình duyệt vào cùng một nhánh
    console.log("Khởi động driver ");
    break;
}
