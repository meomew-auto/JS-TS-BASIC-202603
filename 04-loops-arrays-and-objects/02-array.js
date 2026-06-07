// Khai báo một mảng chứa tên các sản phẩm
let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];

// In ra phần tử ở vị trí thứ 2 của mảng (chỉ số 1)
console.log(sanPham[1]);
// In ra phần tử ở vị trí thứ 3 của mảng (chỉ số 2)
console.log(sanPham[2]);
// In ra phần tử ở vị trí đầu tiên của mảng (chỉ số 0)
console.log(sanPham[0]);

// Truy cập phần tử không tồn tại, kết quả sẽ là undefined
console.log(sanPham[10]);

// Mảng kết quả tìm kiếm có 2 phần tử
let ketQuaTimKiem = ["iphone 13", "iphone 20"];

// In ra số lượng phần tử trong mảng
console.log(ketQuaTimKiem.length);

// Tạo mảng rỗng để lưu danh sách lỗi
let danhSachLoi = [];

// Chạy test và phát hiện ra lỗi
// Thêm lỗi mới vào cuối mảng
danhSachLoi.push("Nút đăng nhập ko bấm đc");
// Thêm tiếp một lỗi khác vào cuối mảng
danhSachLoi.push("sAi mầu chữ ở footer");

// In ra toàn bộ danh sách lỗi
console.log(danhSachLoi);

// Mảng chứa các trạng thái được phép
let cacTrangThaiChoChoPhep = ["PENDING", "APPROVED", "SHIPPED"];

// Trạng thái thực tế cần kiểm tra
let trangThaiThucTe = "APPROVED";

// Kiểm tra xem trạng thái thực tế có nằm trong danh sách cho phép hay không
if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
  // Nếu có, in ra kết quả pass
  console.log("TEST PASS: TRANG THAI HIEN THI DUNG LOGIC");
} else {
  // Nếu không, in ra kết quả fail
  console.log("TEST FAIL");
}

// Mảng lưu lịch sử duyệt web
let lichSuDuyetWeb = ["Trang chủ", "sản phẩm", "Giỏ hàng"];

// Lấy và xóa phần tử cuối cùng của mảng
let trangVuaThoat = lichSuDuyetWeb.pop();

// In ra mảng sau khi đã xóa phần tử cuối
console.log(lichSuDuyetWeb);

// In ra trang vừa được lấy ra khỏi mảng
console.log(trangVuaThoat);

// Hàng chờ hỗ trợ khách hàng
let hangChoHoTro = ["Khách A", "Khách B", "Khách C"];

// Lấy và xóa khách hàng đầu tiên trong hàng chờ
let khachHangDuocXuLy = hangChoHoTro.shift();

// In ra hàng chờ còn lại sau khi xử lý 1 khách
console.log(hangChoHoTro);
// In ra khách hàng vừa được xử lý
console.log(khachHangDuocXuLy);

// Danh sách các lỗi ưu tiên
let danhSachUuTien = ["Bug Thuong", "Bug Giao dien"];

// Thêm một phần tử vào đầu mảng
danhSachUuTien.unshift("BUG SIEU TO KHONG LO");
// In ra mảng sau khi thêm
console.log(danhSachUuTien);

// Mảng chứa các thẻ tag
let tags = ["automation", "playwright", "javascript"];

// Nối các phần tử trong mảng thành một chuỗi, ngăn cách bởi dấu phẩy
let tagString = tags.join(", ");

// In ra chuỗi sau khi nối
console.log(tagString);

// Mảng danh sách menu
let danhSachMenu = ["Home", "About", "Services"];

// Tìm vị trí của phần tử "About" trong mảng
console.log(danhSachMenu.indexOf("About"));

// Mảng giỏ hàng chứa các sản phẩm
let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];

// 1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
// 3. In ra tên sản phẩm cuối cùng
// 4. Thêm 1 cái lót chuột vào cuối giỏ hàng
