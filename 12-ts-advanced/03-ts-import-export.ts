import { taoEmailNgauNhien } from "./helper";
import { MAX_RETRY } from "./helper";
import { taoEmailNgauNhien as taoEmail } from "./helper";
//import tat ca named export tu file vao 1 object
import * as Helpers from "./helper";

import TrangDangNhap from "./helper";
import LoginPage, { BASE_URL } from "./helper";

//có thể export cái gì
//export hàm, class, biến, hằng số, object, mảng
//có 2 kiểu export
//Named export (xuất nhỏ lẻ - theo tên)
//Da nhf cho file chứa nhiều thứ muốn chia sẻ. khi nhập khẩu (import) bạn BẮT BUỘC phỉa dùng dấu ngoặc {} và gọi ĐÚNG TÊN

const email = taoEmailNgauNhien();
console.log(email);
console.log(BASE_URL);
const email2 = taoEmail();
console.log(email2);

console.log(MAX_RETRY);

console.log(Helpers.MAX_RETRY);

//Defaul export (1 file cho co 1 default export)
//Danh cho file chỉ chứa 1 thứ quan trọng . MỖI FILE CHỈ CÓ 1 export default. khi nhập khẩu
//KHI NHẬP KHẨU KO CẦN DẤU {} và có thể tự do đổi tên
const loginPage = new LoginPage();

const trangDangNhap = new TrangDangNhap();
