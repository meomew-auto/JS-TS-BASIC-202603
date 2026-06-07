// Khai báo một object chứa thông tin người dùng
let userTest = {
  hoTen: "Neko Nguyen", // Họ tên
  tuoi: 30, // Tuổi
  isVip: true, // Trạng thái VIP
  quyenHan: ["read", "write"], // Danh sách quyền hạn
};

// In ra toàn bộ object
console.log(userTest);
// Truy cập và in ra giá trị của key hoTen bằng dấu chấm
console.log(userTest.hoTen);

// Object có các key đặc biệt chứa dấu gạch nối hoặc khoảng trắng
let apiData = {
  "firt-name": "neko",
  "content-type": "text/html",
  "so dien thoai": "01234567",
};
// Với key đặc biệt, phải dùng dấu ngoặc vuông để truy cập
console.log(apiData["firt-name"]);

// Trường hợp rất hay dùng trong AT: khi key được lưu trong một biến khác
// (dynamic key)

// Tạo object người dùng thứ hai
let userTest2 = {
  hoTen: "Neko Nguyen",
  email: "neko@gmail.com",
};

// Biến này đang giữ tên key cần lấy
let thongTinCanLay = "email";

// Cách này sẽ tìm key có tên đúng là "thongTinCanLay", nên không lấy được email
console.log(userTest2.thongTinCanLay);

// Cách đúng với dynamic key: dùng ngoặc vuông và truyền biến vào
console.log(userTest2[thongTinCanLay]);

// Object cấu hình ban đầu
let config = { browser: "Chrome", timeout: 5000 };
// Không in ra đẹp được bên trong template string, object sẽ bị ép kiểu thành chuỗi
console.log(`Ban đầu ${config}`);

// Cách in object dễ đọc hơn
console.log("Ban đầu", config);

// Cập nhật lại giá trị của key timeout
config.timeout = 10000;
console.log("Sau khi sửa timeout", config);

// Thêm dữ liệu: gọi tên key chưa tồn tại rồi gán giá trị
config.isHeadless = true;
console.log("Sau khi thêm isHeadless", config);

// Xóa dữ liệu bằng từ khóa delete
delete config.browser;

console.log("Sau khi xóa browser", config);

// const chỉ cấm gán lại cả object, nhưng vẫn cho phép sửa bên trong object
const user3 = { ten: "neko" };

// Thay đổi giá trị của key ten
user3.ten = "meo";
console.log(user3);

// Gán lại cả object sẽ bị lỗi vì user3 được khai báo bằng const
// user3 = { ten: "meo" };
// console.log(user3);

// Object sản phẩm
let spTiki = { id: "SP01", ten: "Bàn phím", gia: 50000 };

// Lấy danh sách tất cả key của object
let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);

// Kiểm tra xem trong danh sách key có "gia" hay không
console.log(danhSachKey.includes("gia"));

// Lấy danh sách tất cả value của object
let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
// Kiểm tra xem trong danh sách value có "Bàn phím" hay không
console.log(danhSachValue.includes("Bàn phím"));

// Lấy danh sách từng cặp key-value
let danhSachCap = Object.entries(spTiki);
console.log(danhSachCap);
// [ [ 'id', 'SP01' ], [ 'ten', 'Bàn phím' ], [ 'gia', 50000 ] ]

// Lấy phần tử đầu tiên trong mảng entries
console.log(danhSachCap[0]);
// [ 'id', 'SP01' ]

// Lấy value của cặp đầu tiên
console.log(danhSachCap[0][1]);
// 'SP01'

// Kiểm tra object có key "id2" hay không
console.log(Object.hasOwn(spTiki, "id2"));

// Bài tập

// Giả lập dữ liệu trả về từ API
let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes",
};

// Dùng Object.keys để đếm xem API trả về bao nhiêu trường
// Dùng Object.hasOwn() để kiểm tra 3 trường bắt buộc: "userId", "email", "role"
// Kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof). Nếu sai kiểu, in ra cảnh báo
// Dùng Object.values + includes để kiểm tra xem có giá trị nào là "admin" không

// Đếm số lượng key mà API trả về
let soTruong = Object.keys(apiResponse).length;

console.log(`Số trường API trả về ${soTruong}`);

// Kiểm tra từng key bắt buộc có tồn tại hay không
console.log(`Có userId, ${Object.hasOwn(apiResponse, "userId")}`);
console.log(`Có email, ${Object.hasOwn(apiResponse, "email")}`);
console.log(`Có role, ${Object.hasOwn(apiResponse, "role")}`);

// Lấy giá trị và kiểu dữ liệu của isActive
const isActiveValue = apiResponse.isActive;
const isActiveValueType = typeof isActiveValue;

// In ra giá trị và kiểu dữ liệu thực tế
console.log(isActiveValue);
console.log(typeof isActiveValue);

// Nếu isActive không phải boolean thì in cảnh báo
if (typeof apiResponse.isActive !== "boolean") {
  console.log("isActive không đún gkieeur boolean");
}

// Kiểm tra xem object có chứa value "admin" hay không
let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`Có chứa admin hay ko ${hasAdmin}`);

// Mảng object chứa danh sách user
let danhSachUser = [
  { id: 2, ten: "teo", role: "user" },
  { id: 3, ten: "teo2", role: "user2" },
];
