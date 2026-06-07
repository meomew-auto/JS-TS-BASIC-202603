// Variable declarations
let loiChao = "xin chao buoi sang"; // Gán một chuỗi lời chào vào biến
let loiChao2 = "xin chao buoi sang"; // Tạo thêm một biến khác chứa cùng nội dung
let myName = "I'm Hoang"; // Lưu tên của bạn dưới dạng chuỗi

// Constant declaration
const tenHocVien = "Hoàng"; // Khai báo hằng số để lưu tên học viên

// Template literal
// Dùng dấu backtick (`) để chèn biến vào giữa câu hoặc một chuỗi khác
const loiGioiThieu = `Tên tôi là ${tenHocVien}`; // Tạo câu giới thiệu có chèn giá trị của biến

// Output
console.log(loiGioiThieu); // In câu giới thiệu ra màn hình console

// Constants
const productName = "iphone 15 promax"; // Store the product name in a constant variable

// Template literal
const productSelector = `h2:has-text("${productName}")`; // Build a selector string using the product name

// Output
// Expected result: h2:has-text("iphone 15 promax")
console.log(productSelector); // Print the selector to the console

// Kiểu dữ liệu number

// Khai báo biến tuổi và gán giá trị số nguyên.
let tuoi = 30;

// Khai báo hằng số PI với giá trị gần đúng.
const PI = 3.14;

// Tính kết quả dựa trên biến tuoi.
let ketQua = (tuoi - 5) * 2;

// In kết quả ra console.
console.log(ketQua);

// Kiểu dữ liệu boolean (đúng/sai)
// Boolean values
let denDangBat = true; // Đèn đang bật.
let daTotNghiep = false; // Chưa tốt nghiệp.

// String length
let matKhau = "123456"; // Chuỗi mật khẩu mẫu.
console.log(matKhau.length); // In ra số ký tự của chuỗi.

// trim()
let emailWeb = "   user01   "; // Chuỗi có khoảng trắng ở đầu và cuối.

let emailChuan = emailWeb.trim(); // Xóa khoảng trắng ở đầu và cuối chuỗi.
console.log(emailChuan); // In ra chuỗi sau khi đã trim.
console.log(emailChuan.length); // In ra độ dài của chuỗi sau khi trim.

// toUpperCase() - toLowerCase()

// Ví dụ: "IPHoNE 15" nhưng dữ liệu test lại là "iphone 15".
// Giải pháp: chuyển cả hai về cùng một kiểu chữ
// (thường là chữ thường) rồi mới so sánh.

let tenSanPham = "iPhOne 15"; // Tên sản phẩm với chữ hoa/thường lẫn lộn.

console.log(tenSanPham.toLowerCase()); // Chuyển toàn bộ chuỗi thành chữ thường.

// includes()
let thongBao = "Đăng nhập thất bại. Sai mật khẩu"; // Nội dung thông báo lỗi.

console.log(thongBao.includes("Thành công")); // Kiểm tra xem chuỗi có chứa "Thành công" không.
console.log(thongBao.includes("mật khẩu")); // Kiểm tra xem chuỗi có chứa "mật khẩu" không.

let msg = "login Error: invalid password"; // Chuỗi thông báo tiếng Anh.

console.log(msg.includes("Error")); // Kiểm tra có chứa "Error" hay không.
console.log(msg.includes("error")); // Kiểm tra có chứa "error" hay không (phân biệt hoa/thường).
// So sánh chuỗi không phân biệt chữ hoa, chữ thường trong JavaScript
// let a = "Hello";

// let b = "hello";

// Chuyển cả 2 chuỗi về chữ thường rồi so sánh
// console.log(a.toLocaleLowerCase() === b.toLocaleLowerCase());

// includes() có kiểm tra cả khoảng trắng
// let s = "xin chao ban";

// Kiểm tra chuỗi có chứa "chao" hay không
// console.log(s.includes("chao"));

// Có khoảng trắng phía trước nên kết quả sẽ khác
// console.log(s.includes(" chao"));

// Có khoảng trắng phía sau nên kết quả sẽ khác
// console.log(s.includes("chao "));

// Nhiều khoảng trắng phía sau cũng được tính là khác
// console.log(s.includes("chao   "));

// replace()
// Khai báo chuỗi giá tiền có ký hiệu $
let giaTien = "100$";

// Xóa ký hiệu $ ra khỏi chuỗi
let giaTienSo = giaTien.replace("$", "");

// In ra giá trị sau khi đã xóa ký hiệu $
console.log(giaTienSo);

// Chuỗi tiền có dấu chấm phân tách
let tien = "1.000.000";

// replace() chỉ thay thế dấu chấm đầu tiên
console.log(tien.replace(".", ""));

// replaceAll() thay thế tất cả dấu chấm
console.log(tien.replaceAll(".", ""));

// Xóa tất cả khoảng trắng trong họ tên
let tenUI = "Nguyen Van A";
console.log(tenUI.replaceAll(" ", ""));

// Chuỗi URL mẫu
let urlUI = "https://shopee.vn/product/12345";

// Tìm vị trí xuất hiện của từ "product" trong URL
console.log(urlUI.indexOf("product"));

// Kết hợp với substring() để cắt lấy 1 phần chuỗi từ vị trí tìm được
//slice so am
// Kết hợp với substring() để cắt lấy một phần chuỗi từ vị trí tìm được
// Dùng slice() với số âm để lấy ký tự từ cuối chuỗi
let fileName = "report_2026.pdf";

console.log(fileName.slice(-4));

let errorMsg = "Error 404: Page not found";

// Tìm vị trí của dấu ":"
let pos = errorMsg.indexOf(":");

console.log(errorMsg.substring(errorMsg.indexOf(":")));
console.log(errorMsg.substring(errorMsg.indexOf(":") + 1));
console.log(errorMsg.substring(errorMsg.indexOf(":") + 2));

let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
// Yêu cầu: lấy ra được chuỗi "ORD-2026-123"
// Dùng indexOf + length + slice để lấy ra phần mã đơn hàng

// Bài của Nga đang thừa 1 ký tự
// let start = rawText.indexOf(":"); // Tìm vị trí dấu ":"
// let end = rawText.indexOf("|"); // Tìm vị trí dấu "|"
// let result = rawText.slice(start + 2, end); // Cắt chuỗi từ sau ": " đến trước "|"
// console.log(result.length); // Kiểm tra độ dài kết quả

// Bài của Phương Đỗ đang thừa nhiều ký tự
// let start = rawText.indexOf("Oder ID:") + 9; // Tìm vị trí sau "Oder ID:"
// let end = rawText.indexOf("/"); // Tìm vị trí dấu "/"
// let ketQuaCuaPhuongDo = rawText.slice(start, end).trim(); // Cắt chuỗi rồi xóa khoảng trắng thừa
// console.log(ketQuaCuaPhuongDo.length); // Kiểm tra độ dài kết quả

// Bài của Trần Kim Hoàng: GOOD JOB
// let textClean = rawText.trim(); // Xóa khoảng trắng ở đầu và cuối chuỗi
// let textStart = textClean.indexOf(":"); // Tìm vị trí dấu ":"
// let textEnd = textClean.indexOf("|"); // Tìm vị trí dấu "|"

// let result = textClean.slice(textStart + 2, textEnd - 1); // Cắt đúng phần mã đơn hàng

// Yêu cầu: lấy ra được "ORD-2026-123" => GOOD JOB
let start = rawText.indexOf(":"); // Tìm vị trí dấu ":" trong chuỗi
let end = rawText.indexOf("|"); // Tìm vị trí dấu "|" trong chuỗi
let result = rawText.slice(start + 2, end).trim(); // Cắt chuỗi từ sau ": " đến trước "|" rồi xóa khoảng trắng thừa
console.log(result.length); // In ra độ dài chuỗi đã lấy được

console.log("ORD-2026-123".length); // In ra độ dài chuỗi mẫu để đối chiếu

// Chuyển chuỗi sang số với Number() và parseInt()/parseFloat()

let s1 = "100"; // Chuỗi chỉ chứa số
console.log(Number(s1)); // Chuyển thành kiểu number

let s2 = "100px"; // Chuỗi có cả số và chữ
console.log(Number(s2)); // Number() không chuyển được nên trả về NaN
console.log(parseInt(s2)); // parseInt() lấy phần số nguyên ở đầu chuỗi
console.log(parseInt("10.999")); // parseInt() chỉ lấy phần nguyên trước dấu chấm
console.log(parseFloat("10.5Kg")); // parseFloat() lấy được số thực ở đầu chuỗi

// Trường hợp Number("") sẽ chuyển thành 0
// console.log(Number(""));
// => Nếu chuỗi chỉ có khoảng trắng, nên kiểm tra trước:
// if (str.trim() === "") { '// xử lý logic' }

console.log((19.956).toFixed(2)); // Làm tròn và giữ lại 2 chữ số thập phân
console.log((19.952).toFixed(2)); // Kết quả trả về là chuỗi
console.log((19.9).toFixed(2)); // Số 0 sẽ được thêm vào nếu thiếu

let diem = 4.2; // Khai báo điểm là số thực

console.log(Math.ceil(diem)); // Làm tròn lên thành số nguyên gần nhất
console.log(Math.floor(diem)); // Làm tròn xuống thành số nguyên gần nhất

// Sinh số nguyên ngẫu nhiên trong khoảng từ min đến max
let min = 50; // Giá trị nhỏ nhất
let max = 55; // Giá trị lớn nhất
let soLuong = Math.floor(Math.random() * (max - min + 1)) + min; // Tạo số nguyên ngẫu nhiên trong đoạn [50, 55]
console.log(soLuong); // In ra kết quả ngẫu nhiên
// toFixed(2) làm tròn số thành 2 chữ số thập phân và trả về kiểu chuỗi
const checkType = (19.956).toFixed(2);
// typeof dùng để kiểm tra kiểu dữ liệu của biến
console.log(typeof checkType);

// Tìm giá trị lớn nhất và nhỏ nhất
// Math.max(...) trả về số lớn nhất trong danh sách
console.log(Math.max(10, 5, 6, 20));
// Math.min(...) trả về số nhỏ nhất trong danh sách
console.log(Math.min(10, 5, 3, 20));

// Lấy giá trị tuyệt đối
// Math.abs(...) biến số âm thành số dương
console.log(Math.abs(-15));

// Khai báo biến ngày dưới dạng số
let ngay = 5;

// Ép kiểu
// Chuyển số thành chuỗi để có thể dùng các hàm xử lý chuỗi
let chuoiNgay = String(ngay);

// padStart(2, "0") thêm số 0 vào đầu để đủ 2 ký tự
let ngayDep = chuoiNgay.padStart(2, "0");

// In ra ngày đã được định dạng đẹp
console.log(ngayDep);

// Khai báo số thứ tự đơn hàng
let orderNumber = 5;

// Chuyển số đơn hàng thành chuỗi
let orderNumberStr = String(orderNumber);
// Thêm số 0 vào đầu để mã có đủ 5 ký tự
let orderId = orderNumberStr.padStart(5, "0");
// Ghép tiền tố "SP-" với mã đơn hàng
console.log(`SP-${orderId}`);
// Khai báo tên sản phẩm và giá
let sanPham = "iphone 18";

let gia = "1000$";

// padEnd(20, ".") thêm dấu chấm vào cuối để canh khoảng cách trước giá
console.log(sanPham.padEnd(20, ".") + gia);
// Khai báo biến lưu tên người dùng
let userName = "neko";

// Khai báo biến lưu tuổi
let age = 18;

// In ra thông tin bằng cách nối chuỗi với toán tử +
console.log("Tên: " + userName + " - Tuổi: " + age);

// In ra thông tin bằng cách truyền nhiều giá trị vào console.log()
console.log("Tên:", userName, "Tuổi:", age);

// In ra thông tin bằng template string và tăng tuổi thêm 1
console.log(`Tên: ${userName} - Tuổi: ${age + 1}`);

let amount = 9.5;
let display = amount.toFixed(2).padStart(6, "0");
console.log(display);

// console.log(amount.toFixed(2)).padStart(6, 0);
//-> "009.50"
let price = 54000000;
console.log(price.toLocaleString("vi-VN"));
console.log(price.toLocaleString("en-US"));

let moneyText = price.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
console.log(moneyText);
// 54.000.000 ₫

// 54M -> 54.000.000 dùng slice
const finalPrice = "54000000";
const resultFinalPrice =
  String(finalPrice).slice(0, 2) +
  "." +
  String(finalPrice).slice(2, 5) +
  "." +
  String(finalPrice).slice(-3);

console.log(resultFinalPrice);

let formated = `${finalPrice.slice(0, -6)}.${finalPrice.slice(-6, -3)}.${finalPrice.slice(-3)}`;
console.log(formated);

let maGiamGia = "DISCOUNT CODE: 10% OFF";
console.log(maGiamGia.indexOf(":"));

console.log(maGiamGia.indexOf("%"));
console.log(maGiamGia.indexOf("1"));

console.log(maGiamGia.slice(15, 17));

//ddeer lấy
let phanTramGiamGia = Number(
  maGiamGia.slice(maGiamGia.indexOf(":") + 2, maGiamGia.indexOf("%")),
);
console.log(phanTramGiamGia);
let phanTramGiamGia2 = Number(
  maGiamGia.replace("DISCOUNT CODE:", "").replace("% OFF", ""),
);

console.log(phanTramGiamGia2);
