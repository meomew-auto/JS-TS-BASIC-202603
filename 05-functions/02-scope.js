let tenMoiTruong = "STAGING";
let baseUrl = "https://staging.neko.vn";

function chayTest() {
  //hàm này bên trong nhưng vẫn nhìn thấy biến GLOBAL ở bên ngoài
  console.log(`Đang chạy test trên ${tenMoiTruong}`);
  console.log(`URL: ${baseUrl}`);
}

function chayTestKhac() {
  console.log(`Hàm khác cũng thấy${tenMoiTruong}`);
}

chayTest();
chayTestKhac();

//NGUY HIỂM CỦA GLOBAL" 2neeus cả 2 đều sửa global -> dẫm chân lên nhau

let soLanClick = 0;

function testDangNhap() {
  soLanClick = 5;
}

function testDangKy() {
  soLanClick = 10;
}

testDangNhap();
testDangKy();
console.log(soLanClick);

function taoTaiKhoan() {
  let matKhauBaoMat = "Secret123";
  let token = "abc-xyz";

  console.log(`Mật khẩu là ${matKhauBaoMat}`);
  console.log(`Token: ${token}`);
}

taoTaiKhoan();

//Mỗi lần gọi hàm = tạo scope hàm hoàn toàn mới
function demSoLan() {
  let count = 0;
  count++;
  console.log(count);
}
//count mới đc tạo -> tăng lên 1 ròi tèo
demSoLan();

//count moi dc tao lai -> tang len 1 roi teo
demSoLan();

if (true) {
  let theNhieuTen = "Visa platinum";
  const soTien = 999999999999999;
  console.log(theNhieuTen);
}

for (let i = 0; i < 3; i++) {
  let tenSanPham = `SP - ${i}`;
  console.log(tenSanPham);
}

// //var
// if (true) {
//   var biMat = "Tôi lọt ra ngoài";
// }

// console.log(biMat);

///Scope =vung song cua bien
if (true) {
  let secret = 123;
}

const user222 = {
  //property - thuộc tính bên trong object
  //JS ko tự biến ten thành biến riêng trong scope hiện tại
  ten: "neko",
};

console.log(user222.ten);
//TRONG SCOPE hiện tại; JS chỉ biết chắc chắn là có biến user222

const { ten } = user222;

let mau = "Đỏ"; //global

function ngoai() {
  //function scope của ngoai() - hàm chà
  let size = "Lớn";

  function trong() {
    //fc scope của hàm con

    //trong() tìm biến theo scope chain
    let gia = 1000;
    //tìm thấy ngay tại chỗ vì gia là của fc trong()
    console.log(gia);
    //ko có ở đây -> leo ra ngoài tìm -> lớn
    console.log(size);
    //ko có ở đây -> lèo ra ngoài() -> global()
    console.log(mau);
  }
  trong();
  //lỗi vì sao thằng cha ko nhìn đ thằng con
}
ngoai();
