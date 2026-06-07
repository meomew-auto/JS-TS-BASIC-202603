// Phép cộng giữa hai số
console.log(10 + 5);

// Chuyển chuỗi "10" thành số rồi cộng với 5
console.log(Number("10") + 5);

// Chuỗi số "10" được JavaScript tự chuyển thành số khi trừ
console.log("10" - 5);

// Chuỗi "Mười" không thể chuyển thành số, nên kết quả là NaN
console.log("Mười" - 5);

// Chuỗi số "10" được JavaScript tự chuyển thành số khi chia
console.log("10" / 2);

// Biến giỏ hàng
// Lúc đầu giỏ hàng rỗng nên tổng tiền bằng 0
let tongTien = 0;

// Giá áo
const giaAo = 25000;
// tongTien = 0 + 25000
tongTien += giaAo;

// Giá quần
const giaQuan = 30000;
// tongTien = 25000 + 30000
tongTien += giaQuan;

// In ra tổng hóa đơn sau khi cộng tất cả sản phẩm
console.log(`Tổng hóa đơn: ${tongTien}`);

// Kiểm tra độ dài mật khẩu
let passwordLength = 5;

// Kiểm tra mật khẩu có đủ từ 8 ký tự trở lên hay không
let isPasswordValidEx1 = passwordLength >= 8;
console.log(isPasswordValidEx1);

// So sánh lỏng: có tự động ép kiểu dữ liệu
console.log(10 == "10");
console.log(0 == false);

// So sánh nghiêm ngặt: phải giống cả giá trị lẫn kiểu dữ liệu
console.log(10 === "10");
console.log(0 === false);

// So sánh dữ liệu từ giao diện với dữ liệu mong đợi
let giaUI = "50000";
let giaMongDoi = 50000;

// So sánh lỏng và so sánh nghiêm ngặt
console.log(giaUI == giaMongDoi);
console.log(giaUI === giaMongDoi);

// Kiểm tra điều kiện đăng nhập
let isEmailCorrect = true;
let isPasswordCorrect = false;

// Chỉ đăng nhập được khi cả email và mật khẩu đều đúng
let canLogin = isEmailCorrect && isPasswordCorrect;
console.log(canLogin);

// Nhập sai tên
let searchByName = false;

// Nhập đúng mã sản phẩm
let searchBySKU = true;

// Chỉ cần tìm thấy theo tên hoặc theo mã sản phẩm là được
let isProductFound = searchByName || searchBySKU;

console.log(`Tìm thấy sản phẩm ${isProductFound}`);

// Bài toán kiểm tra nút Đăng ký
// Nút đăng ký chỉ sáng lên (enable) khi thỏa mãn đồng thời 3 điều kiện:
// 1. Tuổi người dùng phải từ 18 trở lên
// 2. Mật khẩu phải có đúng 8 ký tự
// 3. Checkbox đồng ý điều khoản phải được tích

let userAge = 20;
let passwordInput = "Neko1234";
let isTermAccepted = true;
///

// 1. Tạo biến isAgeValid để kiểm tra tuổi có >= 18 hay không
// 2. Tạo biến isPasswordValid để kiểm tra mật khẩu có đúng 8 ký tự

// Kết hợp toàn bộ điều kiện để tạo biến isSubmitButtonEnabled

// In ra console.log

//1 kiểm tra tuổi
//Thủy Bạch
// let isAgeValid = userAge >= 18;
// let isPasswordValid = passwordInput.length === 8;
// let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;
// console.log(isSubmitButtonEnabled);
// Diễm Lê
// let isAgeValid = userAge >= 18;
// let isPasswordValid = passwordInput.length === 8;
// let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;
// console.log(`Button Submit is enabled: ${isSubmitButtonEnabled}`);
//Biển Phạm

// let isAgeVaild = userAge >= 18;
// let isPasswordValid = passwordInput.length === 8;
// let isRegister = isAgeVaild && passwordInput && isTermAccepted;

//Mai Hương
//true
// let isAgeValid = userAge >= 18;
// //true
// let isPasswordValid = passwordInput.length === 8;
// let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;
// console.log(`Nút đăng kí ${isSubmitButtonEnabled}`);

//Huyền Trang
let isAgeValid = userAge >= 18;

let isPassWordValid = passwordInput.length === 8;

let isSubmitButtonEnabled = isAgeValid && isPassWordValid && isTermAccepted;
console.log(isSubmitButtonEnabled);

//postfix

let a = 5;
let ketQua1 = a++;

//biểu thức a++ trả ra 5
// sau khi dùng xong, a mới tăng lên
console.log(ketQua1);
console.log(a);

//prefix
let b = 5;
let ketQua2 = ++b;

console.log(ketQua2);
console.log(b);

// //giari thich
// b tang len 6 truoc
// bieu thuc ++b  tra ra 6

let x1 = 5;
console.log(x1++);

let count = 0;
// count++;
++count;
//++count, count += 1, count = count + 1
console.log(count);

// let i = 3;
// //vừa làm 2 việc 1 lúc
// // tính toán và cập nhật biến
// // -> lí do khó đọc. vì nhìn nhanh ko biết
// // nhân 3 hay 4
// //sau dòng này i còn giá trị nào
// //khó debug
// //6
// let resultPostFix = i++ * 2;

// console.log(resultPostFix);
// console.log(i);

let i = 3;
let resultPostFix = i * 2;
++i;

///
//ví dụ mình đang test logic retry của nút submit.
// 1 bạn mới trong team viết đoạn code sau để vừa log vừa giảm/tăng số lần thử

let retries = 2;

// let firstLog = retries++;

// let secondLog = ++retries;

// let canRetry = retries-- > 3;

// console.log(firstLog);

// console.log(secondLog);

// console.log(canRetry);

// console.log(retries);

//đoán output 4 dòng
//viết lại theo cách rõ ràng
console.log("Kết quả");

let firstLog = retries;
retries++;

++retries;

let secondLog = retries;

let canRetry = retries > 3;

console.log(firstLog);

console.log(secondLog);

console.log(canRetry);

console.log(retries);
// Bài tập
// Mình có 1 chương trình khuyến mãi:
// Nếu khách hàng > 18 tuổi và là thành viên VIP thì được giảm 30% giá vé.
// Ngược lại, giá vé được giữ nguyên.

let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

// Kiểm tra nhanh chuỗi có rỗng hay không bằng Boolean()
let isVip = Boolean(rawisVIP);
console.log(isVip); // Chuỗi "true" không rỗng nên kết quả là true
console.log(Boolean("")); // Chuỗi rỗng nên kết quả là false
console.log(Boolean("hello")); // Chuỗi không rỗng nên kết quả là true

// Yêu cầu:
// 1. Làm sạch dữ liệu và ép kiểu
// 2. Kiểm tra điều kiện: nếu đủ điều kiện thì tính giá sau khi giảm 30%, nếu không thì giữ nguyên
// 3. In kết quả

// Làm sạch và ép kiểu tuổi từ chuỗi sang số
let age = Number(rawAge.trim().replace("tuổi", "").trim());

// Làm sạch và ép kiểu trạng thái VIP từ chuỗi sang boolean thực sự
let isMemberVIP = rawisVIP.trim().toLowerCase() === "true";

// Làm sạch và ép kiểu giá vé từ chuỗi sang số
let ticketPrice = Number(
  rawTicketPrice.trim().replaceAll(".", "").replace("đ", "").trim(),
);

// Kiểm tra khách hàng có đủ điều kiện giảm giá hay không
let isEligible = age > 18 && isMemberVIP;

// Nếu đủ điều kiện thì giảm 30%, ngược lại giữ nguyên giá gốc
let finalPrice = isEligible ? ticketPrice * 0.7 : ticketPrice;

console.log(finalPrice);

// In kết quả ra màn hình
console.log("Tuổi:", age);
console.log("Là thành viên VIP:", isMemberVIP);
console.log("Giá vé gốc:", ticketPrice);
console.log("Đủ điều kiện giảm giá:", isEligible);
console.log("Giá vé sau cùng:", finalPrice);

// Trace thực thi:
// 1. rawAge = " 25 tuổi", rawisVIP = "true", rawTicketPrice = "  500.000 đ ".
// 2. Boolean(rawisVIP) trả về true vì đây là chuỗi không rỗng, nên isVip = true.
// 3. Chương trình in ra lần lượt:
//    - true
//    - false
//    - true
// 4. rawAge được làm sạch:
//    - trim() => "25 tuổi"
//    - replace("tuổi", "") => "25 "
//    - trim() => "25"
//    - Number("25") => age = 25
// 5. rawisVIP được làm sạch:
//    - trim() => "true"
//    - toLowerCase() => "true"
//    - so sánh === "true" => isMemberVIP = true
// 6. rawTicketPrice được làm sạch:
//    - trim() => "500.000 đ"
//    - replaceAll(".", "") => "500000 đ"
//    - replace("đ", "") => "500000 "
//    - trim() => "500000"
//    - Number("500000") => ticketPrice = 500000
// 7. Kiểm tra điều kiện giảm giá:
//    - age > 18 => true
//    - isMemberVIP => true
//    - true && true => isEligible = true
// 8. Tính giá cuối cùng:
//    - vì isEligible là true nên finalPrice = 500000 * 0.7 = 350000
// 9. Kết quả in ra cuối cùng:
//    - Tuổi: 25
//    - Là thành viên VIP: true
//    - Giá vé gốc: 500000
//    - Đủ điều kiện giảm giá: true
//    - Giá vé sau cùng: 350000
