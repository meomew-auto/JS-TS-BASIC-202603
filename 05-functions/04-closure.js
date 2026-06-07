//Hình thái 1: return ra 1 hàm khác - cổ điển

function taoMayChao(ten) {
  function loiChao() {
    console.log(`Xin chao, ${ten}`);
  }
  return loiChao;
}

const chaoNeko = taoMayChao("Neko");

chaoNeko();

//taoMayChao("Neko")
// + tao bien Neko
// + tao Ham loi chao
// + return loiChao ra ngoai

// chaoNeko()
// loiChao van nho ten = Neko

// Hình thái 2: CallBack chạy trễ sau đó - ko cần return
// kiểu này hay gặp trong setTimeout, setInterval

function demoHenGio() {
  let message = "Tôi vẫn còn sống";

  setTimeout(function () {
    console.log(message);
  }, 100);
}

demoHenGio();

//Hình thái 3: Dùng object có sẵn scope bên ngoài

const testContext = {
  env: "staging",
  retry: 0,
};

function taoLoggerKetQua() {
  return function (testName) {
    console.log(
      `${testName} - ${testContext.env} - retry ${testContext.retry}`,
    );
  };
}

//Hình thái 4: Trả về object có method dùng chung biến ngoài
// function taoBoDem() {
//   let count = 0;
//   return {
//     tang() {
//       count++;
//       console.log(`Count = ${count}`);
//     },
//     reset() {
//       count = 0;
//       console.log("reset Xong");
//     },
//   };
// }

// const boDem = taoBoDem();
// boDem.tang();
// boDem.tang();
// boDem.reset();
// boDem.tang();

const logResult = taoLoggerKetQua();

logResult("Login");

testContext.retry = 2;

logResult("login");

//Vf sao đây vẫn là closure??/
// hafm đc return nằm trong hàm cha
// dùng biến testContext từ bên ngoàoi
// khi chạy nó vẫn truy cập đc testContext
//-> điểm lưu ý: closure ko sao chép nguyên object -> nó giữ quyền truy cập tới bién/ tham chiếu đang
// trỏ tới object

//Closure giải quyết vấn đề gì
//Global scope = ai cũng truy cập đc
let soThuTu = 0;

function taoIdTest() {
  soThuTu++;
  return `USERT_TEST_${soThuTu}`;
}

console.log(taoIdTest());
console.log(taoIdTest());

soThuTu = 999;

console.log(taoIdTest());

function mayTaoId() {
  ///khai bao bien dem
  let soThuTu = 0;
  function tangId() {
    soThuTu++;
    return `USER_TEST_${soThuTu}`;
  }
  return tangId;
}

const layIdMoi = mayTaoId();
console.log(layIdMoi());
console.log(layIdMoi());

// khi mayTaoid chạy xong -> theo qy tắc scope , biến soThuTu sẽ chết.
// NHƯNG!!! vì chúng ta đã tạo ra return tangId, và hàm tangId đang closure (bao đóng)
// biếnd soThuTu vào balo kí ức. Do đó biến soThuTu bất tử và tiếp tục tăng lên mỗi lần
// gọi layIdMoi()

//Ứng dnjg data factory -nhà máy sản xuất hàm
function taoNhaMaySinhEmail(domain) {
  let dem = 0;

  return function () {
    dem++;
    return `Tester_${dem}@${domain}`;
  };
}

const sinhEmailStaging = taoNhaMaySinhEmail("staging.neko.vn");
const sinhEmailProd = taoNhaMaySinhEmail("neko.com");

console.log(sinhEmailStaging());
console.log(sinhEmailStaging());
console.log(sinhEmailProd());
console.log(sinhEmailProd());

//bài tập
//viét 1 hàm taoBoDem(tenNut) trả về 1 object với 2 method
// - click() - tắng số lần click lên 1 và in ra "tên nút số click clicks"
// - reset () - đặt lại click  - 0 và in a "tên nút reset"

// ví dụ kết quả mong muốn
// const nutLogin = taoBoDem("Login Button");
// nutLogin.click() -> login button: 1 clicks
// nutLogin.click() -> login button: 2 clicks
//nutLogin.reset()
// nutLogin.click() -> login button: 1 clicks
// function taoBoDem(tenNut) {
//   let soLanClick = 0;
//   return {
//     click() {
//       soLanClick++;
//       console.log(`${soLanClick} clicks`);
//     },
//     reset() {
//       soLanClick = 0;
//       console.log("reset Xong");
//     },
//   };
// }
// const nutLogin = taoBoDem("Login Button");
// nutLogin.click();
// nutLogin.click();
// nutLogin.reset();
// nutLogin.click();

// function taoBoDem(tenNut) {
//   let count = 0;
//   return {
//     click() {
//       count++;
//       console.log(`${tenNut}: ${count} clicks`);
//     },
//     reset() {
//       count = 0;
//       console.log(`${tenNut} reset`);
//     },
//   };
// }
// const nutLogin = taoBoDem("Login Button");
// nutLogin.click();
// nutLogin.click();
// nutLogin.reset();
// nutLogin.click();
// function taoBoDem(tenNut) {
//   let dem = 0;
//   return {
//     click() {
//       dem++;
//       console.log(`login button: ${dem} clicks`);
//     },
//     reset() {
//       dem = 0;
//       console.log("reset Xong");
//     },
//   };
// }
// const tenNut = taoBoDem();
// tenNut.click();
// tenNut.click();
// tenNut.reset();
// tenNut.click();
// tenNut.click();

// function taoBoDem(tenNut) {
//   let soClick = 0;

//   return {
//     click() {
//       soClick++;
//       console.log(`${tenNut}: ${soClick} clicks`);
//     },

//     reset() {
//       soClick = 0;
//       console.log(`${tenNut} reset`);
//     },
//   };
// }
//
