// Ví dụ 1: Dùng while để lặp lại hành động theo số lần
// Yếu tố 1: biến đếm, dùng để theo dõi đang lặp đến lần thứ mấy
let soLanClick = 1;

// Yếu tố 2: điều kiện lặp
// Khi soLanClick còn nhỏ hơn hoặc bằng 3 thì vòng lặp vẫn tiếp tục chạy
while (soLanClick <= 3) {
  // Thực hiện hành động ở mỗi lần lặp
  console.log(`Đang click lần thứ ${soLanClick}`);

  // Yếu tố 3: cập nhật biến đếm để tiến tới lúc thoát vòng lặp
  soLanClick++;
}

// Sau khi vòng lặp kết thúc, in ra thông báo hoàn thành
console.log("Đã click xong 3 lần, thoát vòng lặp");

// Ví dụ 2: Lặp cho đến khi ăn hết số miếng thịt
let miengThit = 5;

// Khi còn miếng thịt thì tiếp tục ăn
while (miengThit > 0) {
  // Hiển thị số miếng còn lại trước khi giảm đi
  console.log(`Đang ăn... Còn lại ${miengThit} miếng`);

  // Mỗi lần lặp ăn hết 1 miếng
  miengThit--;
}

// Khi không còn miếng nào nữa thì kết thúc
console.log("Đã ăn hết, no bụng");

// Trong automation test sẽ có cơ chế retry:
// thử lại tối đa N lần nếu chưa tìm thấy phần tử
// Bài toán: tìm nút thanh toán, cứ 1 giây tìm 1 lần,
// tìm tối đa 5 lần, nếu thấy thì dừng, nếu quá 5 lần thì báo lỗi

// Khai báo biến phục vụ cho cơ chế retry
let maxRetry = 5; // Số lần thử tối đa
let currentRetry = 1; // Lần thử hiện tại
let isFound = false; // Trạng thái đã tìm thấy nút hay chưa

// Tiếp tục lặp khi chưa tìm thấy và vẫn còn lượt thử
while (isFound === false && currentRetry <= maxRetry) {
  // Thông báo đang tìm nút trên màn hình
  console.log(`Đang tìm nút thanh toán trên màn hình ...`);

  // Giả lập quá trình tìm kiếm bằng số ngẫu nhiên
  let toolGiaLap = Math.random();
  let searchResult = toolGiaLap > 0.3;

  // In ra giá trị ngẫu nhiên để quan sát kết quả giả lập
  console.log(`Search result : ${toolGiaLap}`);

  // Nếu tìm thấy nút
  if (searchResult === true) {
    // Đổi trạng thái để thoát vòng lặp
    isFound = true;
    console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
  } else {
    // Nếu chưa thấy thì thông báo và tăng lượt thử
    console.log("Không thấy, chuẩn bị thử lại");
    currentRetry++; // Tăng số lần thử lên 1
  }
}

// Xử lý kết quả sau khi thoát vòng lặp
if (isFound === false) {
  console.log(`TEST FAIL, đã thử 5 lần nhưng mạng lag quá, không thấy nút đâu`);
}

// Bài tập nhỏ:
// Có 1 hệ thống đăng nhập.
// Rule là: hệ thống cho phép nhập sai mật khẩu tối đa 3 lần.
// Nếu nhập đúng trước khi hết lượt -> hiển thị "Đăng nhập thành công".
// Nếu vẫn sai sau 3 lần -> khóa tài khoản.

let matKhauDung = "1234";
let maxLanThu = 3;

// Yêu cầu:
// 1. Dùng while để mô phỏng quá trình nhập mật khẩu tối đa 3 lần.
// 2. Ở mỗi lần thử, giả lập người dùng nhập mật khẩu bằng cách
//    gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999"
//    (dùng if else if).
// Nếu nhập đúng, in ra "Đăng nhập thành công".
// Nếu nhập sai, in ra "Sai mật khẩu".
// Kiểm tra sau khi thoát vòng lặp: nếu đã dùng hết 3 lần mà vẫn sai
// thì in ra "Tài khoản bị khóa".

// Ví dụ gợi ý ý tưởng:
// if (lanThu === 1) {
//   matKhauNhap = "0000";
// } else if (lanThu === 2) {
//   matKhauNhap = "9999";
// } else if (lanThu === 3) {
//   matKhauNhap = "1234";
// }

// Phác sơ đồ tư duy cũng được nếu chưa quen tay khi code
// Infinite scroll
// Ctrl + Alt + Delete
