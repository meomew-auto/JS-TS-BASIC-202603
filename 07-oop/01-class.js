class HocVien {
  //Bước 1: Khai báo TẤT CẢ THUỘC TÍNH Ở CLASS FIELD
  //2 thằng này sẽ được gán lại trong constructor
  hoTen = "";
  tuoi = 0;
  truongHoc = "Neko playwright";
  trangThai = "Đang học";

  //Bước2 : constructor chỉ gán lại cho thuộc tính cần giá trị động
  //Mọi thuộc tính đều nằm trong constructor
  constructor(ten, tuoi) {
    this.hoTen = ten;
    this.tuoi = tuoi;
  }
  //phương thức (method)
  gioiThieu() {
    console.log(`${this.hoTen}, ${this.tuoi} tuổi, trường ${this.truongHoc}`);
  }
  gioiThieuArrow = () => {
    console.log(`${this.hoTen}, ${this.tuoi} tuổi, trường ${this.truongHoc}`);
  };
}

//cách 1. constructor có tham số (phổ biên)
let hv1 = new HocVien("Neko", 30);
hv1.gioiThieu();
console.log(hv1.hoTen);
console.log(hv1.tuoi);
console.log(hv1.truongHoc);
console.log(hv1.trangThai);
hv1.gioiThieuArrow();
let hv2 = new HocVien("Neko2", 31);
hv2.gioiThieu();

let hamTach = hv1.gioiThieu;

//cách 2> constructor có giá trị mặc định (default parameters)

class TestConfig {
  //B1.
  browser = "Chromium";
  timeout = 5000;
  constructor(browser = "Chromium", timeout = 5000) {
    this.browser = browser;
    this.timeout = timeout;
  }
}

let config1 = new TestConfig();
let config2 = new TestConfig("firefox");

let config3 = new TestConfig("webkit", 10000);

//ccascj 3: Constructor ko tham số - dùng class fields thuần
//kho moi object đều cso chung thuộc tính cốc định, ko cần csonstructor luôn ! chỉ cần
//class fields là đủ

//Từ khóa this trong class
//TH1 this ở trong constructor => Chính là object đang đc tạo

class HocVien3 {
  hoTen = "";

  constructor(ten) {
    //this = Object mới đang đc lệnh new tạo ra
    this.hoTen = ten;
    console.log(this);
  }
}

let hv3 = new HocVien3("Neko2");
console.log(hv3);

///TH2: this ở trong method ->  object đnag gọi method đó

class LoginPage2 {
  url = "/login";

  moTrang() {
    //this = Object đang đứng trước dấu chấm
    console.log(`Mở trang ${this.url}`);
  }
}

let trang2 = new LoginPage2();

trang2.moTrang();

//TH3; This bị mất khi nso nằm trong callback (hàm thường)
class DashBoard {
  tieuDe = "trangChu";

  taiDuLieu() {
    setTimeout(function () {
      //this không còn là dashboard nữa
      //
      console.log(this.tieuDe);
    }, 1000);
  }
}

let dash = new DashBoard();
dash.taiDuLieu();

class GioHangDemo {
  tenCuaHang = "neko shop";
  sanPham = ["Tra sua", "Ca phe"];

  inHoaDon() {
    this.sanPham.forEach((sp) => {
      console.log(`${this.tenCuaHang}: ${sp}`);
    });
  }
}

let gioHang1 = new GioHangDemo();
gioHang1.inHoaDon();

//this ở arrow function -> nó mượn this ở bên ngoài (lexical this)
//tách method

class CheckoutPage {
  url = "/checkout";

  //hàm thường
  moBangHamThuong() {
    console.log(`Mở ${this.url}`);
  }

  //Hàm arrow
  moBangArrow = () => {
    console.log(`Mở ${this.url}`);
  };
}

let checkout = new CheckoutPage();
checkout.moBangHamThuong();
checkout.moBangArrow();

//Tách method ra khỏi instance ()
let hamThuongBiTach = checkout.moBangHamThuong;
let hamArrowBiTach = checkout.moBangArrow;

function truyenVaoCallBack(callback) {
  callback();
}

truyenVaoCallBack(hamArrowBiTach);
// truyenVaoCallBack(hamThuongBiTach);

//BT
// Tạo 1 class tên là ProductPage cho trang sản phẩm
// với thuộc tính:
// txtTenSP = '#productName'
// txtGia = '#price'
// btnGioHang = '#btnCart'
// modalThongBao = '.notification'
// Method themSanPham(ten,gia) -> in ra gõ tên, gõ giá, click thêm giỏa hàng

// Method kiemTraThongBao(): in ra modal thông báo

// flowMethod thucHienThemVaKiemTra(ten, Gia): goi 2 hàm bên trên
// class ProductPage extends BasePage {

//   constructor() {
// super()
//     this.txtTenSP = "#productName";
//     this.txtGia = "#price";
//     this.btnGioHang = "#btnCart";
//     this.modalThongBao = ".notification";
//   }
//   themSanPham(ten, gia) {
//     console.log(`Gõ tên sản phẩm vào ${this.txtTenSP}: ${ten}`);
//     console.log(`Gõ giá vào ${this.txtGia}: ${gia}`);
//     console.log(`Click nút thêm giỏ hàng: ${this.btnGioHang}`);
//   }
//   kiemTraThongBao() {
//     console.log(`Hiển thị modal thông báo: ${this.modalThongBao}`);
//   }
//   thucHienThemVaKiemTra(ten, gia) {
//     this.themSanPham(ten, gia);
//     this.kiemTraThongBao();
//   }
// }
// class ProductPage {
//   txtTenSP = "#productName";
//   txtGia = "#price";
//   btnGioHang = "#btnCart";
//   modalThongBao = ".notification";
//   // method thêm sản phẩm
//   themSanPham(ten, gia) {
//     console.log(`Gõ tên sản phẩm ${this.txtTenSP} : ${ten}`);
//     console.log(`Gõ giá sản phẩm ${this.txtGia} : ${gia}`);
//     console.log(`Click button thêm giỏ hàng : ${this.btnGioHang}`);
//   }
//   // method kiểm tra thông báo
//   kiemTraThongBao() {
//     console.log(`Kiểm tra hiển thị thông báo tại : ${this.modalThongBao}`);
//   }
//   thucHienThemVaKiemTra(ten, gia) {
//     this.themSanPham(ten, gia);
//     this.kiemTraThongBao();
//   }
// }
// let product1 = new ProductPage();
// product1.themSanPham("Tra sua", 50000);
// product1.kiemTraThongBao();
// console.log("=================");
// product1.thucHienThemVaKiemTra("Cà phê", 45000);
