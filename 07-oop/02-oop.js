// //Class cha
// class BasePage {
//   header = "#thanhMenuTrenCung";

//   bamNutTrangChu() {
//     console.log(`Đã click nút Home trên thanh ${this.header}`);
//   }

//   chupManHinh(tenFile) {
//     console.log(`Đã cjupj màn hình và lưu thành ${tenFile}.png`);
//   }
// }

// //class con
// class LoginPage extends BasePage {
//   nutDangNhap = "#loginButton";

//   dienMatKhau() {
//     console.log(`Đã điền mật khẩu vào nút ${this.nutDangNhap}`);
//     this.chupManHinh("sau khi dien pass");
//   }
// }

// let trangDangNhap = new LoginPage();

// trangDangNhap.bamNutTrangChu();
// trangDangNhap.dienMatKhau();

// // super
// //TH1: Không cần truyền gì, cũng ko cần viết constructor ở con
// //Khi cha ko cần dữ liệu bên ngoài, hoặc cha có constructor() nhưng ko nhận tham số
// // con thường ko cần viết gì nữa

// //TH2: Con truyền giá trị cố định lên cho cha
// // class BasePage2 {
// //   url = "";
// //   constructor(url) {
// //     this.url = url;
// //   }
// //   moTrang() {
// //     console.log(`Mở trang ${this.url}`);
// //   }
// // }

// // //class con
// // class LoginPage2 extends BasePage2 {
// //   nutDangNhap = "#loginButton";
// //   constructor() {
// //     super("/login");
// //   }
// // }
// // let login2 = new LoginPage2();
// // login2.moTrang();

// //TH3: Ci nhận 1 tham số -> rồi truyền tham số lên cho cha
// // class BasePage3 {
// //   url = "";
// //   constructor(url) {
// //     this.url = url;
// //   }
// //   moTrang() {
// //     console.log(`Mở trang ${this.url}`);
// //   }
// // }
// // //class con
// // class LoginPage3 extends BasePage3 {
// //   nutDangNhap = "#loginButton";
// //   constructor(url) {
// //     super(url);
// //   }
// // }

// // let login3 = new LoginPage3("/login");
// // login3.moTrang();

// //khi mà khởi tạo thằng con kế thừa cha
// // -> vào construct

// class BasePage4 {
//   chupManHinh(url) {
//     console.log(`Chụp mành hình ${url}`);
//   }
// }
// //class con
// class MobilePage extends BasePage4 {
//   //ghi đè hoàn toàn hàm cha (Override)

//   chupManHinh(tenFile) {
//     console.log(`Chụp nguyên trang mobile ${tenFile}`);
//   }
// }
// let mobile = new MobilePage();
// mobile.chupManHinh("123");

// //extend  - Giữ nguyên hàm cha _ thêm logic, -> gọi super.tenHam()

// class SreenPage extends BasePage4 {
//   chupManHinh(tenFile) {
//     //Gọi hàm gốc của cha trước
//     //Thêm logic riêng của con
//     console.log(`Chụp nguyên trang Screen ${tenFile}`);
//     super.chupManHinh(tenFile);
//   }
// }

// let screenTest = new SreenPage();
// screenTest.chupManHinh("lỗi đăng nhập");

//BT: Gom báo cáo tét bằng kế thừa
//Tạo class BaseSuite nhận tenSuite làm tham số
//BaseSuite có method inTieuDe() in ra tên suite
//BaseSuite óc method inKetQua(danhsachCase) dùng for ... of và destructoring để in từng tcs
//Tạo LoginSuite extends BaseSuite,
/// loginsuite extends inTieuDe() rồi in thêm "Trang kiểm thử /login"
//Data test
// let loginCases = [
//   { ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian: 12000 },
//   { ten: "Sai mật khẩu", trangThai: "failed", thoiGian: 5000 },
//   { ten: "Email rỗng", trangThai: "passed", thoiGian: 8000 },
// ];

// class BaseSuite {
//   tenSuite = "";
//   constructor(tenSuite) {
//     this.tenSuite = tenSuite;
//   }
//   inTieuDe() {
//     console.log(`=== Suite: ${this.tenSuite} ===`);
//   }
//   inKetQua(danhSachCase) {
//     for (const testcase of danhSachCase) {
//       const { ten, trangThai, thoiGian } = testcase;
//       console.log(`Test: ${ten} | Status: ${trangThai} | Time: ${thoiGian}ms`);
//     }
//   }
// }
// class LoginSuite extends BaseSuite {
//   constructor(tenSuite) {
//     super(tenSuite);
//   }
//   inTieuDe() {
//     super.inTieuDe();
//     console.log("Trang kiểm thử: /login");
//   }
// }
// let loginSuite = new LoginSuite("Login Test Suite");
// loginSuite.inTieuDe();
// loginSuite.inKetQua(loginCases);
//Noted xem lại extends ko khai báo constructor
// class BaseSuite {
//   tenSuite;
//   constructor(tenSuite) {
//     this.tenSuite = tenSuite;
//   }
//   inTieuDe() {
//     console.log(`=== ${this.tenSuite} ===`);
//   }
//   inKetQua(danhSachCase) {
//     for (const { ten, trangThai, thoiGian } of danhSachCase) {
//       console.log(`TC: ${ten} | Status: ${trangThai} | Time: ${thoiGian}ms`);
//     }
//   }
// }
// class LoginSuite extends BaseSuite {
//   trangKiemThu = "/login";
//   inTieuDe() {
//     console.log(`Trang kiểm thử ${this.trangKiemThu}`);
//   }
// }
// let loginCases = [
//   { ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian: 12000 },
//   { ten: "Sai mật khẩu", trangThai: "failed", thoiGian: 5000 },
//   { ten: "Email rỗng", trangThai: "passed", thoiGian: 8000 },
// ];
// const loginSuite = new LoginSuite("Login Test Suite");
// loginSuite.inTieuDe();

class ApiClient {
  //private field
  #screctToken = "abc_123_tuyetmat";
  #baseUrl = "abc";
  publicField = "123";

  goiApi(endpoint) {
    console.log(
      `Gọi ${this.#baseUrl} ${endpoint} với token ${this.#screctToken}`,
    );
  }
}

let api = new ApiClient();

api.goiApi("/user");

// console.log(api.#screctToken);
// console.log(api.screctToken);
console.log(api.publicField);
api.publicField = "123-hack";
console.log(api.publicField);

// api.#screctToken = "hack";
// console.log(api.#screctToken);

class TestConfig {
  #timeout = 5000;
  #browser = "chromium";

  //getter - đoc giá trị (dùng như thuộc tính)
  get timeout() {
    return this.#timeout;
  }
  getTimeOut() {
    return this.#timeout;
  }
  //setter - ghi giá trị
  set timeout(giaTriMoi) {
    if (typeof giaTriMoi !== "number" || giaTriMoi < 0) {
      console.log("Timeout phải là số dương");
      return;
    }
    this.#timeout = giaTriMoi;
    console.log(`Timeout -> ${giaTriMoi}`);
  }

  get browser() {
    return this.#browser;
  }
  set browser(ten) {
    let hopLe = ["chromium", "firefox", "webkit"];
    if (!hopLe.includes(ten)) {
      console.log(`Browser phải là ${hopLe.join(", ")}`);
      return;
    }
    this.#browser = ten;
    console.log(`browser -> ${ten}`);
  }
}
let config = new TestConfig();

console.log(config.timeout);
config.timeout = 10000;
console.log(config.timeout);
config.timeout = "123";
console.log(config.timeout);

config.browser = "edge";
console.log(config.browser);
config.browser = "firefox";
console.log(config.browser);

console.log(config.getTimeOut());

const mangGoc = [3, 4, 5];

const mangSaoChep = [...mangGoc];

const configMacDinh = {
  baseUrl: "abc",
  timeOut: 30000,
};

const configProd = {
  ...configMacDinh,
  baseUrl: "prod.com",
};

//khi sử dụng dấu 3 chấm trong tham số hàm
//Rest operator: Thu gom nhiều thứ -> 1 mảng
function hienThiDanhSachGia(...danhSachGia) {
  console.log(danhSachGia);
}

const gia = [100, 200, 300];

//giống hệt Spread operator -> chúng ta rải 1 mảng -> thành nhiều phần tử
hienThiDanhSachGia(...gia);

//REST = GOM VÀO

// 100 200 300 -> ...danhSachGia -> [100, 200,300]

// SPREAD = bung ra
// [100, 200, 300] => ...gia => 100 200 300

//rESST ở trong array
// [10, 20, 30, 40] -> 10, [20, 30, 40]

const [dauTien, ...conLai] = [10, 20, 30, 40];

console.log(dauTien);

console.log(conLai);

const user = {
  id: 1,
  name: "neko",
  role: "admin",
};

const { id, ...thongTinConLai } = user;

console.log(id);

console.log(thongTinConLai);
// class BaseSuite {
//   tenSuite;
//   constructor(tenSuite) {
//     this.tenSuite = tenSuite;
//   }
//   inTieuDe() {
//     console.log(`=== ${this.tenSuite} ===`);
//   }
//   inKetQua(danhSachCase) {
//     for (const { ten, trangThai, thoiGian } of danhSachCase) {
//       console.log(`TC: ${ten} | Status: ${trangThai} | Time: ${thoiGian}ms`);
//     }
//   }
// }
// class LoginSuite extends BaseSuite {
//   trangKiemThu = "/login";

//   //   constructor(ten) {
//   //     super(ten);
//   //   }
//   inTieuDe() {
//     super.inTieuDe();
//     console.log(`Trang kiểm thử ${this.trangKiemThu}`);
//   }
// }
// let loginCases = [
//   { ten: "Đăng nhập đúng tài khoản", trangThai: "passed", thoiGian: 12000 },
//   { ten: "Sai mật khẩu", trangThai: "failed", thoiGian: 5000 },
//   { ten: "Email rỗng", trangThai: "passed", thoiGian: 8000 },
// ];
// const loginSuite = new LoginSuite("/loginTest");
// loginSuite.inTieuDe();

// Luồng như này
// tự đồng ngầm tạo 1 cái constructor có format là

// constructor(...args){
//     super(...args)
// }
// ->   //   constructor(ten) {
//     super(ten);
//   }

// class BasePage {
//   constructor() {
//     console.log("Trong Constructor Cha");
//   }
// }

// class BasePageCon extends BasePage {
//   btnLogin = "#btnLogin";

//   constructor() {
//     super();
//     console.log("BasePage con chay rieng", this.btnLogin);
//   }
// }

// const basePageCon = new BasePageCon();
// basePageCon.btnLogin;

class BasePage {
  cuonTrang() {
    console.log("Dùng con lăn chuột để cuộn trang 500px");
  }
}

class MobilePage extends BasePage {
  //Ghi đè lên hàm cha (override)
  //cùng tên hàm, nhưng logic bên trong thay đổi
  cuonTrang() {
    console.log("Dùng 1 ngón tay để vuốt màn hình");
  }
}

class TabletPage extends BasePage {
  cuonTrang() {
    console.log("Vuốt 2 ngón tay");
  }
}

// let trangWeb = new BasePage();
// let trangMobile = new MobilePage();

// trangWeb.cuonTrang();

// trangMobile.cuonTrang();

//Sức mạnh của đa hình; Gọi cùng 1 hàm trên nhiều object khác nhau

let danhSachTrang = [new BasePage(), new MobilePage(), new TabletPage()];

//cùng 1 lệnh . cuonTrang() => nhưng object khác nhau thì hành xử khác nhau
danhSachTrang.forEach((trang) => {
  trang.cuonTrang();
});

//ví dụ viết 1 hàm nhận bất kì class nào đều hoạt động với class đó
//ví dụ tôi có 1 cái hàm chỉ biết đầu vào nhận là 1 tham số tên là trang

function chayKiemThu(trang) {
  console.log("Bắt đầu test");
  trang.cuonTrang();
  console.log("Keets thuc test");
}

chayKiemThu(new BasePage());

chayKiemThu(new MobilePage());

chayKiemThu(new TabletPage());
