// Vòng lặp for cơ bản: chạy từ 1 đến 5
for (let i = 1; i <= 5; i++) {
  // In ra số thứ tự của lần lặp hiện tại
  console.log(`Đang chạy vòng thứ ${i}`);
}

// Khai báo số lượng tài khoản cần tạo
let soLuongAccount = 3;

// Dùng vòng lặp để tạo email mẫu theo số thứ tự
for (let i = 1; i <= soLuongAccount; i++) {
  // Tạo email dựa trên giá trị i
  let emailTest = `nguoiDung_${i}@gmail.com`;
  // In ra tài khoản vừa được tạo
  console.log(`Đã tạo tài khoản ${emailTest}`);
}

// Duyệt mảng bằng index
let sanPham2 = ["Quần đùi", "Áo cộc", "váy"];

// Bắt đầu từ phần tử đầu tiên và lặp đến hết mảng
for (let i = 0; i < sanPham2.length; i++) {
  // i là vị trí phần tử trong mảng, còn i + 1 là số thứ tự để hiển thị cho dễ đọc
  console.log(`Sản phẩm #${i + 1} : ${sanPham2[i]}`);
}

// Duyệt object
let config2 = {
  browser: "Firefox",
  timeout: 2000,
  headless: true,
};

// Object không dùng được for kiểu duyệt theo index trực tiếp như mảng
// Vì vậy, cần lấy danh sách tên thuộc tính ra trước
let keys = Object.keys(config2);
// Kết quả sẽ là: ["browser", "timeout", "headless"]

// Duyệt qua từng key trong mảng keys
for (let i = 0; i < keys.length; i++) {
  // Lấy ra tên thuộc tính tại vị trí i
  let key = keys[i];
  // Dùng key để lấy giá trị tương ứng trong object
  let value = config2[key];
  // In ra tên thuộc tính và giá trị của nó
  console.log(`${key}: ${value}`);
}

// Trace thực thi:
// 1. Tạo object config2 với 3 thuộc tính:
//    - browser = "Firefox"
//    - timeout = 2000
//    - headless = true

// 2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:
//    keys = ["browser", "timeout", "headless"]

// 3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).
//    - Lần 1: i = 0
//      key = "browser"
//      value = config2["browser"] = "Firefox"
//      In ra: browser: Firefox

//    - Lần 2: i = 1
//      key = "timeout"
//      value = config2["timeout"] = 2000
//      In ra: timeout: 2000

//    - Lần 3: i = 2
//      key = "headless"
//      value = config2["headless"] = true
//      In ra: headless: true

// 4. Sau lần lặp cuối, i tăng thành 3.
//    Điều kiện 3 < 3 là sai nên vòng lặp dừng.

// Những lỗi kinh điển hay gặp
let arr = ["A", "B", "C"];
console.log(`Độ dài của mảng ${arr.length}`);
console.log(`Tại vị trí 3 ${arr[3]}`);

//in ra console log. 3 phần tử trong mảng
for (let i = 0; i <= 3; i++) {
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//vòng lặp chay
//đầu tiên  i =0 -> i<= 3 (0<=3) -> arr[0]
//lần 2 i =1 => i <=3 (1<=3) => arr[1]
//lần thứ i =3 => 3 < 3 -> arr[3]

//biến i chỉ tồn tại trong dấu ngoặc nhọn -> khi ra ngoài ko tồn tại

//Mình muốn tạo nhanh 5 mã đơn hàn để test màn hình quản lý đơn hàng
//dữ liệu đầu vào
let soLuongDon = 5;

// Yêu cầu
//1. Dùng for cổ điển lặp từ 1 > 5
// mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2....
// in từng mã đơn hàng ra màn hình
// Mai H??ng 2:14 PM
// for (let i = 1; i <= soLuongDon; i++) {
//   let maDonHang = `ORDER-${i}`;
//   console.log(maDonHang);
// }

// // Thuỷ Bạch 2:14 PM
// for (let i = 1; i <= soLuongDon; i++) {
//   console.log(`ORDER-${i}`);
// }

// // Diem Le 2:15 PM
// for (let i = 1; i <= soLuongDon; i++) {
//   let maDonHang = `ORDER-${i}`;
//   console.log(maDonHang);
// }

// for (let i = 1; i <= soLuongDon; i++) {
//   let maDonHang = `ORDER-${i}`;
//   console.log(maDonHang);
// }
// console.log(maDonHang);

// maDonHang ... là vừa gán biến vừa console.
//scope
//closure

let fruits = ["Táo", "Cam", "ổi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//viết theo cách mới
for (let fruit of fruits) {
  console.log(fruit);
}

//Các cách dùng thường gặp
//duyệt array đơn giản
//Duyệt string
let matKhau = "Neko@123";

for (let kyTu of matKhau) {
  console.log(`Ký tự: ${kyTu}`);
}
//Duyệ array of object

let danhSachUsers = [
  { ten: "Neko", role: "admin" },
  { ten: "Neko2", role: "guest" },
  { ten: "Neko3", role: "user" },
];

for (let user of danhSachUsers) {
  console.log(`${user.ten} - Quyền ${user.role}`);
}

let config = { browser: "Chrome", timeout: 5000 };
console.log(Object.entries(config));
// [ [ 'browser', 'Chrome' ], [ 'timeout', 5000 ] ]

for (let cap of Object.entries(config)) {
  // cap = [ 'browser', 'Chrome' ]
  //cap = [ 'timeout', 5000 ]
  console.log(`${cap[0]} - ${cap[1]}`);
}

for (let key of Object.keys(config)) {
  console.log(`${key}: ${config[key]}`);
}

//
let danhSachUrl = ["/login", "/dashboard", "/profile"];

// dùng for...of... mỗi vòng kpawj lấy ra 1 url và in ra câu Đang kiểm tra: url

// Thu Nga 2:44 PM
for (let url of danhSachUrl) {
  console.log(`Dang kiem tra ${url}`);
}

// Thuỷ Bạch 2:44 PM
for (let url of danhSachUrl) {
  console.log(`Đang kiểm tra: ${url}`);
}

// Nguyen Hoang Anh 2:45 PM

for (let url of danhSachUrl) {
  console.log(`Dang kiem tra ${url}`);
}

// Le Lan Huong 2:45 PM
for (let url of danhSachUrl) {
  console.log(`Dang kiem tra ${url}`);
}

// Diem Le 2:45 PM
for (let url of danhSachUrl) {
  console.log(`Đang kiểm tra: url ${url}`);
}

// tr?nh ph??ng 2:45 PM
let danhSachUr1s = ["/login", "/dashboard", "/profile"];
for (let danhSachUr1 of danhSachUr1s) {
  console.log(` đang kiem tra: ${danhSachUr1} `);
}

for (let key in config) {
  console.log(`${key} - ${config[key]}`);
}

//Dùng vòng lặp nào cho array và object
// while: không biết trước số lần lặp -> lặp đến khi điều kiện sai
// for cổ điển: biết chính xấc số lần lặp, -> kiểm soát tuyệt đối biến đếm
//có array, chỉ cần giá trị -> for...of
//có array, cần cả index.. for cổ điển
//duyệt object... -> dùng for of + biến hình hoặc for in

// Ví dụ
let products = [
  { ten: "iphone", gia: 200000 },
  { ten: "airpods", gia: 300000 },
  { ten: "macbook", gia: 10000 },
];

//Yêu cầu: sử dụng for of + for in để in ra tên và giá của products
// mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm ở đầu ra
//

// ten: iphone
// gia: 200000
// ---
// ten: airpods
// gia:30000
// ---
// Trần Kim Hoàng (18478617) 3:01 PM
for (let product of products) {
  for (let key in product) {
    console.log(`${key}: ${product[key]}`);
  }
  console.log("---");
}

// Thuỷ Bạch 3:02 PM
for (let product of products) {
  for (let key in product) {
    console.log(`${key} : ${product[key]}`);
  }
  console.log("---");
}

//break
// từ 1 -> 100 mình muốn tìm số chia hết cho 7 đầu tiên

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`Tìm thấy ${i}`);
    break;
  }
}

let sanPhams = [
  { ten: "iphone", conHang: true },
  { ten: "airpods", conHang: false },
  { ten: "macbook", conHang: true },
];

// tìm sản phẩm hết hàng đầu tiên.
// bỏ qua sản phẩm hết hàng
//in ra snr phẩm còn hàng
// Trần Kim Hoàng (18478617) 3:21 PM
for (let product of sanPhams) {
  if (product.conHang === false) {
    console.log(`Sản phẩm hết hàng đầu tiên là: ${product.ten}`);
    break;
  }
}

// Huyen Trang 3:21 PM
for (let sanPham of sanPhams) {
  if (sanPham.conHang === false) {
    console.log(`Sản phẩm hết hàng đầu tiên: ${sanPham.ten}`);
    break;
  }
}

// Mai H??ng 3:23 PM
for (let sanPham of sanPhams) {
  if (!sanPham.conHang) {
    console.log(`Sản phẩm hết hàng: ${sanPham.ten}`);
    break; // dừng vòng lặp ngay khi tìm thấy sản phẩm hết hàng đầu tiên
  }
}

//continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Số lẻ ${i}`);
}

let userInfo = {
  ten: "neko",
  email: "neko@gmail.com",
  password: "abc123",
  role: "admin",
};

let fieldAnDi = ["password"];

// dùng includes, và continue trong array -> bỏ qua field nhạy cảm  dựa trên array fieldAndi -> in ra key và value hợp lệ
// bỏ qua sp hết hàng
for (let sanPham of sanPhams) {
  if (!sanPham.conHang) {
    continue;
  }
  console.log(sanPham.ten);
}

for (let sanPham of sanPhams) {
  if (sanPham.conHang) {
    console.log(`Sản phẩm còn hàng: ${sanPham.ten}`);
  }
}
// Mai H??ng 3:33 PM
for (let key in userInfo) {
  if (fieldAnDi.includes(key)) {
    continue; // bỏ qua trường nhạy cảm và tiếp tục vòng lặp để in ra những trường hợp lệ còn lại
  }
  console.log(`${key}: ${userInfo[key]}`);
}

//Ví dụ
// Mình đang test trang TIKI, lấy đc danh sách giá 6 sản phẩm. Yêu cầu
// lọc ra những sản phẩm có giá lớn 100K và đếm xem có bao nhiêu sản phẩm là sp vip

// let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];

//Yêu cầu
// tạo 1 array rỗng danhSachVip
/// Nếu giá > 100000 thì ta cho sản phẩm vào dnah sách vip
// và làm tiếp yêu cầu đề bài, là in ra danh sách vip và số

// Phuong Do 3:45 PM
let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000];
// // tạo mảng VIP
// let danhSachVip = [];
// // duyệt từng giá
// for (let gia of danhSachGia) {
//   if (gia > 100000) {
//     danhSachVip.push(gia);
//   }
// }
// // in danh sách VIP
// console.log("Danh sách VIP:", danhSachVip);
// // in số lượng VIP
// console.log("Số sản phẩm VIP:", danhSachVip.length);

// Trần Kim Hoàng (18478617) 3:46 PM
// let danhSachVip = [];

// for (let gia of danhSachGia) {
//   if (gia < 100000) {
//     continue;
//   }
//   danhSachVip.push(gia);
// }

// console.log(`Danh sách sản phẩm vip: ${danhSachVip}`);
// console.log(`Số lượng sản phẩm vip: ${danhSachVip.length}`);
