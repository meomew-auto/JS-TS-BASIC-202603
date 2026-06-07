// null và undefined

//undefined - . chưa được định nghĩa trạng thái mặc định mà do chính JS gán cho biến của bạn khi bạn bỏ quên nó
//null (trống rỗng / vô giá trị) -> trạng thái do CON NGƯỜI CHỦ ĐỘNG gán vào

// tình huống như nào gặp undefined
// khai báo biến nhưng quên chưa gán trá trị
let hoTen;
console.log(hoTen);

//2 truy cập thuộc tính ko tồn tại của object
const user = { name: "Neko" };
console.log(user.name);

//3 hàm ko return gì cả
function chaoHoi() {
  console.log("xin chào");
}
const ketQua = chaoHoi();
console.log(ketQua);

//Tham số hàm ko đc truyền vào

function tinhTong(a, b) {
  console.log("a = ", a);
  console.log("b = ", b);
  return a + b;
}

tinhTong(3);

//truy cập phần tử mảng vượt quá chỉ số
const danhSach = ["mèo", "chó", "gà"];

console.log(danhSach[1]);
console.log(danhSach[3]);

//QUY TẮC VÀNG;nếu thấy undefined xuất hiện. 99% là do mình quên điều gì đó: quên gán biến, qên return, quên truyền tham số
//gõ sai tên thuộc tinh

//Trường hợp null
//ngược lại với undeffined,. null luon là hành độn có ý thức của lập trình viên

//có thể hiểu là, khỏi tạo 1 biến sẽ chứa object sau này, nhưng chưa có dữ liệu
//tôi biết là biến nà sẽ chứa objet, nhưng hiện tại là chưa đăng nhập
let nguoiDungHienTai = null;

//sau khi đăng nhpaaj thành công
nguoiDungHienTai = { name: "neko" };

console.log(nguoiDungHienTai);

let nguoiDungHienTai2 = undefined;

//code vẫn chạy nhưng thực tế -> người ta ít chủ động gán undefined vì ý nghĩa đọc code
//ko rõ bằng null

let userA;
let userB = undefined;
let userC = null;

//Nói ngắn gọi undefined thường mang ý nghĩa chưa đc gán. bị thiếu có thể quên.
//null là đã kiểm sỏa rồi n hưgn cố tình ko có giá tị

//khi sử dụng typeof

console.log(typeof undefined);
console.log(typeof null);

//if (typeof nguoiDung === 'object') -> co the la null
// if(nguoiDung === null) {clg -> chua dang nhao}
// if(nguoiDung === undefined ) {clg-> bien chua dc khai bao}

function tinhTong(a, b) {
  return a + b;
}

console.log(tinhTong(3, 5));
console.log(tinhTong("5", 3));
//Bug chir phát hiện khi chạy code -> nguy hiểm
