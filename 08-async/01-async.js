// console.log("Khách A: Cho 1 ly matcha siêu phức tạp");

// console.log("Nhân viên: OK anh ei, vui lòng đứng đợi TẠI QUẦY");

// //tác vụ nặng cahyj đồng bộ *đóng bang hệ thống

// let thoiGianBatDau = Date.now();

// while (Date.now() - thoiGianBatDau < 3000) {
//   //BLOCKING - CPU BỊ NHỐT TRONG VÒNG LẶP NÀY
//   //TRONG SUỐT 3 giây
//   //1.JS sẽ bị mù và điếc vs thé giới bên ngoài
//   //2. KO 1 dòng code nào khác đc chạy
// }

// //phải chờ 3s sau, khi vòng lặp kết thúc, các dòng lệnh bên dướ mới đc chạy

// console.log("NHÂN VIÊN: Matcha xong rồi a ei");

// console.log("KHÁCH B. PHù.... Giờ mới tới lượt mình");

// //vì vongf lặp while -> 1 lệnh đồng bộ  Main Thread(nhân viên) bị nhốt vào trong vòng lặp và phải vắt
// // kiệt sức lực của CPU để kiểm tra điều kiện liên tục trong 3s

// function taoBienLai(thanhCong) {
//   return new Promise((resolve, reject) => {
//     if (thanhCong) {
//       resolve("Đã pha matcha xong");
//     } else {
//       reject(new Error(" hết matcha"));
//     }
//   });
// }

// taoBienLai(true).then((ketQua) => {
//   console.log(".Then nhan ", ketQua);
// });

// taoBienLai(false).catch((loi) => {
//   console.log(".catch nhan", loi);
// });

// function datHangOnline(maDon, conHang) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (conHang) {
//         resolve({
//           maDon: maDon,
//           sanPham: "Matcha",
//           tongTien: 40000,
//         });
//       } else {
//         reject(new Error(`Đơn ${maDon}: sản phẩm đã hết hàng`));
//       }
//     }, 5000);
//   });
// }

// console.log("1. Gửi Yêu cầu đặt hàng");

// datHangOnline("SP001", true)
//   .then((donHang) => {
//     console.log("3. then() Nhận đơn hàng", donHang);
//     return donHang.maDon;
//   })
//   .then((maDon) => {
//     console.log("4. Chuyển sang bước thanh toán cho mã đơn", maDon);
//   })
//   .catch((loi) => {
//     console.log("Không chạy vào đây vì SP001 thành công", loi.message);
//   });

// console.log("2. Code dưới này vẫn chạy ngon, không chờ Promise song");

// datHangOnline("SP002", false)
//   .then((donHang) => {
//     console.log("Không chạy vào đây vfi SP002 thất bại", donHang);
//   })
//   .catch((loi) => {
//     console.log("5. Catch bắt lỗi", loi.message);
//   });
// console.log("3. Đợi SP002");

// function traVeDuLieu(kieu) {
//   return new Promise((resolve, reject) => {
//     if (kieu === "string") {
//       resolve("Đăng nhập thành công");
//     } else if (kieu === "number") {
//       resolve(200);
//     } else if (kieu === "boolean") {
//       return true;
//     } else if (kieu === "object") {
//       resolve({
//         maDon: "123",
//         sanPham: "Matcha",
//         tongTien: 40000,
//       });
//     } else if (kieu === "array") {
//       resolve(["san pham A"]);
//     } else if (kieu === "function") {
//       resolve(() => {
//         return "Toi la function dc resolve";
//       });
//     } else {
//       reject(new Error("Không hỗ trợ kiểu dữ liệu " + kieu));
//     }
//   });
// }

// traVeDuLieu("string").then((msg) => console.log("string", msg));
// traVeDuLieu("object").then((data) => console.log("object", data));
// traVeDuLieu("unknown").catch((loi) => console.log("reject", loi.message));

// function moTrangWeb(url) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Trang + " + url + "Đã tải xong");
//     }, 1000);
//   });
// }

// moTrangWeb("neko.com")
//   .then((trang) => {
//     console.log(trang);
//     return "TOKEN_BC_123";
//   })
//   .then((token) => {
//     console.log("Lay token ", token);
//     return { sp: "ao thun", soluong: 3 };
//   })
//   .then((gioHang) => {
//     console.log("Gio hang", gioHang);
//   })
//   .catch((loi) => {
//     console.log(loi);
//   });

// function moTrangWeb(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "nhapsai.com") {
//         reject("loi 404 ko tim thay trang");
//       } else {
//         resolve("Trang + " + url + "Đã tải xong");
//       }
//     }, 1000);
//   });
// }
// //c1
// moTrangWeb("nhapsai.com")
//   .then((trang) => {
//     console.log(trang);
//     return "TOKEN_BC_123";
//   })
//   .then((token) => {
//     console.log("Lay token ", token);
//     return { sp: "ao thun", soluong: 3 };
//   })
//   .then((gioHang) => {
//     console.log("Gio hang", gioHang);
//   })
//   .catch((loi) => {
//     //vi url sai -> reject -> nhảyu thằng vao đây, bỏ qua 2 bước then()
//     console.log(loi);
//   });
//c2
// moTrangWeb("nhapsai.com").then(
//   (data) => {
//     console.log("Thanh cong", data);
//   },
//   (loi) => {
//     console.log("that bai", loi);
//   },
// // );

// moTrangWeb("nekosensei.com")
//   .then(
//     (data) => {
//       throw new Error("Lỗi bất ngờ bên trong");
//     },
//     (loi) => {
//       console.log("ham 2 ko thấy lỗi này");
//     },
//   )
//   .catch((loi) => {
//     console.log("catch ở đây mới bắt đươc", loi.message);
//   });

// let idHenGio = setTimeout(() => {
//   console.log("Bùm ! bom nổ");
// }, 5000);

// console.log("ID hẹn giờ", idHenGio);

// clearTimeout(idHenGio);

// console.log("Đã hủy bom");

//thực tế gặp promise trong JS
//wrap (nghĩa là dưới cái lớp vỏ của hàm người ta đã sử dụng promise bên dưới) -> đưunsg vai trò người dùng ta sẽ dùng then() và catch() để lấy
// dữ liệu

//fetch() gọi api - promise có sẵn dùng rât nhiều

// fetch() là 1 vi sduj hàm gọi xong là nhận đc primise -> ta cko cần định nghĩa new promise(_)
// fetch("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("data", data);

//     console.log("message", data.message);
//     console.log("message", data.timestamp);
//   })
//   .catch((loi) => console.log(loi));

// function goiEchoApi() {
//   return fetch(
//     "https://api-neko-coffee.autoneko.com/public/test/echo?any_param=",
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP ERROR" + response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (!data.message || !data.timestamp) {
//         throw new Error("Api tra ve sai rule thieu truogn");
//       }
//       return data;
//     });
// }

// goiEchoApi()
//   .then((data) => console.log("echo api tra ve", data.message))
//   .catch((loi) => console.log(loi));

//Bt
// viết 1 hàm kiemTraMatKhau(matKhau) trả về 1 promise
// giả lập server kiểm tra mât 1.5sec (setTimeout)
// neu matKhau là Neko@123 -> resolve với message: Đăng nhập thằng công, chào admin
// nếu matKhau sai -> reject với message "sai mâht khẩu"\
// gọi hàm với mj đúng và sai để kiểm tra logic

// function kiemTraMatKhau(matKhau) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (matKhau === "Neko@123") {
//         resolve("Đăng nhập thằng công, chào admin");
//       } else {
//         reject("sai mâht khẩu");
//       }
//     }, 1500);
//   });
// }
// kiemTraMatKhau("Neko@123").then((data) => {
//   console.log(data);
// });
// kiemTraMatKhau("Neko").catch((data) => {
//   console.log(data);
// });

// function kiemTraMatKhau(matKhau) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (matKhau === "Neko@123") {
//         resolve("Đăng nhập thành công, chào admin");
//       } else {
//         reject("Sai mật khẩu");
//       }
//     }, 1500);
//   });
// }
// // Thực hiện
// kiemTraMatKhau("Neko@123")
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// function kiemTraMatKhau(matKhau) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (matKhau === "Neko@123") {
//         resolve("Đăng nhập thành công, chào admin");
//       } else {
//         reject("Sai mật khẩu");
//       }
//     }, 1500);
//   });
// }
// // case đúng
// kiemTraMatKhau("Neko@123").then(console.log).catch(console.log);
// // case sai
// kiemTraMatKhau("Neko").then(console.log).catch(console.log);

// function kiemTraMatKhau(matKhau) {
//   return new Promise((resolve, reject) => {
//     // giả lập server delay 1.5 giây
//     setTimeout(() => {
//       if (matKhau === "Neko@123") {
//         resolve("Đăng nhập thành công, chào admin");
//       } else {
//         reject("Sai mật khẩu");
//       }
//     }, 1500);
//   });
// }
// // Test mật khẩu đúng
// kiemTraMatKhau("Neko@123")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // Test mật khẩu sai
// kiemTraMatKhau("abc123")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//callback hell

// console.log("Bắt đầu");

// new Promise((resolve) => {
//   resolve("OK");
// })
//   .then(() => {
//     console.log("Then 1");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Lỗi promise bên trong");
//       }, 1000);
//     });
//   })
//   .then(() => {
//     console.log("then 2");
//   })
//   .catch((err) => {
//     console.log("catch bên ngoài", err);
//   });

// console.log("kết thúc");

// MỞ trang web (mất 1s)
// function moTrangWeb(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "nhapsai.com") {
//         reject("loi 404: ko tim thay trang");
//       } else {
//         resolve("Trang + " + url + "Đã tải xong");
//       }
//     }, 1000);
//   });
// }

// // Đăgg nhập:  cần kết quả từ b1 (mât 1s)
// function dangNhap(trangWeb, user, pass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pass === "saimatkhau") {
//         reject("Sai mat khau");
//       } else {
//         resolve(" Token " + user.toUpperCase() + "_" + Date.now());
//       }
//     }, 1000);
//   });
// }

// //function themVao Gio Han

// function themVaoGioHang(token, sanPham) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ token: token, sanPham: sanPham, soLuong: 2 });
//     }, 1000);
//   });
// }

// function thanhToan(gioHang) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hóa đơn " + gioHang.sanPham + gioHang.soLuong);
//     }, 1000);
//   });
// }

// async function muaSanPham() {
//   console.log("Băt đầu đặt hàng");
//   let moTrang = await moTrangWeb("neko.com");
//   console.log(moTrang);
//   let token = await dangNhap(moTrang, "admin", "Neko@123");
//   console.log(token);
//   let gioHang = await themVaoGioHang(token, "khoa hoc playwright");
//   console.log(gioHang);
//   let hoaDon = await thanhToan(gioHang);
//   console.log(hoaDon);
// }
// muaSanPham();

// async function chayKichBanTest() {
//   const trangWeb = await
// }

// console.log("bắt đầu kịch bản test");

// moTrangWeb("neko.com")
//   .then((trangweb) => {
//     console.log("1", trangweb);
//     dangNhap(trangWeb, "admin", "Neko@123")
//       .then((token) => {
//         console.log("2", token);
//         themVaoGioHang(token, "khoa hoc playwright")
//           .then((gioHang) => {
//             console.log("3", giohang);
//             thanhToan(gioHang)
//               .then((hoadon) => {
//                 console.log("4", hoadon);
//                 console.log("TEST PASS");
//               })
//               .catch((e) => console.log("lỗi thanh toán"));
//           })
//           .catch((e) => console.log("Lỗi giỏ hàng"));
//       })
//       .catch((e) => console.log("Lỗi đăng nhập"));
//   })
//   .catch((e) => console.log("lỗi mở web"));

// async function layDuLieuUser() {
//   //tu dong boc thanh Primise.resolve("Du lieu user")
//   return "Du lieu user";
// }

// const layDonHang = async function () {
//   return "danh sach doj hang";
// };

// const laySanPham = async () => {
//   return "danhs ach san pham";
// };

// function hamThuong() {
//   return "xin chao";
// }

// console.log(hamThuong());

// async function hamAsync() {
//   return "xin chao";
// }
// console.log(hamAsync());

// hamAsync().then((ketqua) => {
//   console.log("nhan duoc", ketqua);
// });

// function goiApi(url) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ status: 200, data: "Kết quả từ " + url });
//     }, 2000);
//   });
// }
// // goiApi("aaa").then *
// //async -wait (phải nhớ AWAIT chỉ đc khai báo trong hàm async)
// async function layDuLieu() {
//   console.log("ĐAng gọi api");

//   //awwait
//   // tam dừng hàm layDuLieu taiuj dòng này
//   //chờ 2s để goiAPi resolve
//   //lấy giá trị gán vào biên
//   let ketQua = await goiApi("neko.com");
//   console.log("đã nhận", ketQua);
// }

// layDuLieu();

// function chonNhaHang(ten) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(ten), 1000);
//   });
// }

// function xemMenu(nhaHang) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         nhaHang: nhaHang,
//         monAn: ["pho", "caphe"],
//       });
//     }, 1000);
//   });
// }

// async function datDoAnOnline() {
//   console.log("Bawts ddau dat do an");

//   let nhaHang = await chonNhaHang("quan neko");
//   console.log(nhaHang);

//   let menu = await xemMenu(nhaHang);
//   console.log(menu);
// }

// datDoAnOnline();

// async function layTen() {
//   return "neko";
// }

// async function chaoHoi() {
//   const ten = await layTen();
//   return "xin chao" + ten;
// }

// async function chayXinChao() {
//   const loichao = await chaoHoi();
//   console.log(loichao);
// }
// chayXinChao();

//BẢN CHÂT: AWAIT CÓ CHỜ ĐỢI, NHƯNG NÓ CHỈ ĐÓNG BĂNG TRONG PHẠM VI CÁI HÀM ĐÓ> còn thế giới bên ngoài vẫn tiếp tục quay
//Chờ đợi (pausing) nội bộ khác hoàn toàn với việc ĐÓNG BĂNG HÊK THỐNG

//
// const lamBitTet = () =>
//   new Promise((res) =>
//     setTimeout(() => {
//       res("Bit te");
//     }, 3000),
//   );

// const vatNuocCam = () =>
//   new Promise((res) =>
//     setTimeout(() => {
//       res("Nuoc Cam");
//     }, 1000),
//   );

// async function phucVuTuanTu() {
//   console.log("KHÁCH A : Băts đầu order tuần tưh");
//   let start = Date.now();

//   //Dòng này bắt code của Khách A tạm dừng 3 sec
//   //Lưu ý luồng chính của msy tính ko đơ, nó đi phục vụ khach khác
//   let mon1 = await lamBitTet();
//   console.log(`Đã xong ${mon1} sau 3s. Tiêp tục vatgs nc căm`);

//   //doi 1s
//   let mon2 = await vatNuocCam();

//   let thoiGian = (Date.now() - start) / 1000;
//   console.log(`Khách A Nhận đủ đồ. Tổng thoiagf gian ${thoiGian}`);
// }

// phucVuTuanTu();

// console.log("KHACH B: CHO MUON MENU");

//for each -> là method của array ko cos breaj va continue

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach((item) => {
//   console.log(item);
// });

// function goiAPI(url) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Dữ liệu từ ${url}`), 1000);
//   });
// }

// let danhSachUrls = ["users", "products", "orders"];

// // danhSachUrls.forEach(async (url) => {
// //   let data = await goiAPI(url);
// //   console.log(data);
// // });

// async function goiTuanTu() {
//   for (let url of danhSachUrls) {
//     let data = await goiAPI(url);
//     console.log(data);
//   }
//   console.log("GOI XONG HET");
// }

// goiTuanTu();

function taiAnhAvatar() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Avatar da tai xong"), 3000);
  });
}

function layDanhSachSanPham() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Lay danh sach san pham xong"), 2000);
  });
}

function docFileCauHinh() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Doc xong file cau hinh"), 1000);
  });
}

// async function chuanBiTuanTu() {
//   let start = Date.now();

//   let avatar = await taiAnhAvatar();
//   console.log("DONE", avatar);

//   let sanPham = await layDanhSachSanPham();
//   console.log("DONE", sanPham);

//   let config = await docFileCauHinh();
//   console.log("DONE", config);

//   let tongThoiGian = (Date.now() - start) / 1000;

//   console.log(`Tổng thời gian ${tongThoiGian}`);
// }

// async function chuanBiSongSong() {
//   let start = Date.now();

//   let [avatar, sanPham, config] = await Promise.all([
//     taiAnhAvatar(),
//     layDanhSachSanPham(),
//     docFileCauHinh(),
//   ]);
//   console.log("DONE", avatar);
//   console.log("DONE", sanPham);
//   console.log("DONE", config);
//   let tongThoiGian = (Date.now() - start) / 1000;

//   console.log(`Tổng thời gian ${tongThoiGian}`);
// }

// chuanBiSongSong();

// function thanhCong() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("XONG"), 1000);
//   });
// }

// function thatBai() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("server bi loi"), 500);
//   });
// }

// async function testFailFast(params) {
//   try {
//     let ketQua = await Promise.all([thanhCong(), thatBai(), thanhCong()]);
//     console.log("Không bh chạy vào đây");
//   } catch (loi) {
//     console.log("Promise all that bai", loi);
//   }
// }
// testFailFast();

// await page.click()
// await page.waitForResponse('*/api/thanhtoan')

//await Promise.all( [
//1. Giuong 1 cai bay doi API thanh toan tra ve (bat dau lang nghe ngam)
// page.waitForResponse('*/api/thanhtoan')
//2 dong thoi thuc hien hanh dong click
// page.click('abc')

// ])
// console.log('thanh toan thanh cong');
// function xoaTestAccount(tenAccount, thoiGian, xoaDuoc) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (xoaDuoc) {
//         resolve(`Đã xóa ${tenAccount}`);
//       } else {
//         reject(`Không xóa được tên account ${tenAccount}`);
//       }
//     }, thoiGian);
//   });
// }

// async function donDepTaiKhoan() {
//   let ketQua = await Promise.allSettled([
//     xoaTestAccount("user_01", 1200, true),
//     xoaTestAccount("user_02", 900, false),
//     xoaTestAccount("user_03", 1500, true),
//   ]);
//   // [
//   //   { status: "fulfilled", value: "Đã xóa user_01" },
//   //   { status: "rejected", reason: "Không xóa được tên account user_02" },
//   //   { status: "fulfilled", value: "Đã xóa user_03" },
//   // ];
//   // console.log(ketQua);

//   let baoCao = ketQua.map((item, index) => {
//     let ten = ["user_01", "user_02", "user_03"][index];
//     // const userName = item.status === "fulfilled" ? item.value : item.reason;
//     return `${ten} : ${item.status === "fulfilled" ? "PASS" : "FAIL"}`;
//   });
//   console.log(baoCao);
// }
// //nhận được 1 cái mảng có format là ['user_01: PASS', 'user_02: FAIL',]

// donDepTaiKhoan();

function goiApi(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let thanhCong = Math.random() > 0.1;
      console.log(thanhCong);
      if (thanhCong) {
        resolve({ status: 200, data: "Kết quả từ " + url });
      } else {
        reject("Lỗi 500 server " + url);
      }
    }, 2000);
  });
}

async function layDuLieuAnToan() {
  try {
    let user = await goiApi("api.neko.com.vn/user");
    console.log(user.data);

    let orders = await goiApi("api.neko.com.vn/orders");
    console.log(orders.data);
  } catch (loi) {
    console.log("Da xay ra loi", loi);
  } finally {
    console.log("DON DEP TAI NGUYN");
  }
}

layDuLieuAnToan();
