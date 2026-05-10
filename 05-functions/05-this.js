const user = {
  hoTen: "neko",
  tuoi: 18,
  gioiThieu() {
    //có sử dụng this. this ở đây là object user
    console.log(` Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
  },
};
//khi gọi user.gioiThieu() -> kẻ đừng trước dấu chấm = user -> this = user

user.gioiThieu();

const sanPham3 = {
  ten: "iphone 15",
  gia: 2500000,
  soLuong: 10,
  inThongTin() {
    console.log(this);
    console.log(this.ten);
    console.log(this.gia);
  },

  giamGia(phanTram) {
    this.gia = this.gia * (1 - phanTram / 100);
    console.log(`${this.ten} sau giảm giá: ${this.gia.toLocaleString()}đ`);
  },
};

sanPham3.inThongTin();
sanPham3.giamGia(20);

function inRaThis() {
  console.log(this);
}
inRaThis();

const sanPham2 = {
  ten: "iphone 00",
  inten: () => {
    console.log(`Tên là ${this.ten}`);
  },
  intenDung() {
    console.log(`Sp: ${this.ten}`);
  },
};

sanPham2.inten();
//scope bên ngoài object= global -> this =window
sanPham2.intenDung();

/// nhưng nếu bên trong có call back

const giohang = {
  items: ["chuột", "bàn phím", "màn hình"],
  inDanhSach() {
    console.log(`giỏ Hàng ${this.items.length} sản phẩm`);
    //function thường bên rogn forEach ->

    this.items.forEach(function (item) {
      console.log(`${item} (giỏ ${this.items.length})`);
    });
  },
  inDachSachDung() {
    this.items.forEach((item) => {
      //nếu là arrow function -> thì thằng this nó sẽ tìm theo scope bên ngoài -> this lúc này là
      // this của inDachSachDUng -> gioHang
      console.log(`${item} (giỏ ${this.items.length})`);
    });
  },
};

giohang.inDachSachDung();
// -> gọi qua object -> this = giohang
//this.items.forEach(function())-> bên trong forEach JS alfm gì???
// nó gọi callBack(item) -> gọi KHƠI KHƠI -> không có ai.callback()

//bên trong forEach hoạt động đơn giản là
// for (let i = 0; i < arr.length; i++) {
//   callback[arr[i]]; -> gọi khơi khơi ko có obj phái trước _>
// }

const boDem2 = {
  ten: "Click Counter",
  soLan: 0,
  dem() {
    this.soLan++;
    console.log(`${this.ten}: ${this.soLan} lần`);
  },
};

//gán method vào 1 biến mới
const hamTach = boDem2.dem;
// //lúc này hamTach chứa cái hàm. nhưng đã bị mất liên kết với boDem ->
// //giống như việc photocopy nhưng bản copy ko biết thuộc về ai
// //THISS sẽ bị mất khi truyền callback
// function chayCallBack(callback) {
//   callback();
// }

// chayCallBack(hamTach);

// setTimeout(boDem2.dem, 1000);
//bind
function taoWrapper(obj) {
  return function () {
    obj.dem();
  };
}
function chayCallBack(callback) {
  callback();
}

hamTach2 = taoWrapper(boDem2);
chayCallBack(hamTach2);

//TỔNG KẾT ARROW FUNCTION  -> SẼ GIÚP FIX VIỆC CALLBACK
