## Bài 1: Tính tiền giỏ hàng Neko Shop

Chủ đề: `async/await` + `Promise.all` + xử lý chuỗi + `if/else` + `map` / `filter` + vòng lặp `for...of` + object

Đây là tình huống thật của một trang thương mại điện tử: khách nhập giỏ hàng dưới dạng **chuỗi** (ví dụ `"áo thun x2"`), hệ thống phải tách chuỗi đó ra, rồi lấy giá và tồn kho của **tất cả** sản phẩm. Nếu chỉ một sản phẩm không tồn tại thì coi như dữ liệu giỏ hàng hỏng, phải hủy luôn. Đó chính là lúc `Promise.all` phát huy tác dụng: chỉ cần một Promise `reject` là cả lô bị hủy.

### Bộ dữ liệu test (cho sẵn, KHÔNG SỬA)

```javascript
// ----- KHO HÀNG: nguồn dữ liệu "API" sẽ tra cứu -----
const KHO_HANG = {
  "Áo Thun": { gia: 150000, tonKho: 10 },
  "Quần Jean": { gia: 350000, tonKho: 5 },
  "Giày Sneaker": { gia: 800000, tonKho: 3 },
  "Mũ": { gia: 90000, tonKho: 0 },
};

// ----- ĐƠN HÀNG khách nhập dạng CHUỖI: "tên sản phẩm xSỐLƯỢNG" -----
// Lưu ý: chữ hoa/thường lộn xộn và có khoảng trắng thừa -> phải xử lý chuỗi.
const donHang1 = ["  áo thun x2 ", "Quần Jean x1", "MŨ x1"]; // hợp lệ, "Mũ" hết hàng
const donHang2 = ["Áo thun x1", "Điện thoại x1"]; // có sản phẩm không tồn tại

// ----- Hàm giả lập gọi API lấy giá + tồn kho 1 sản phẩm -----
function layThongTinSanPham(ten) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tt = KHO_HANG[ten];
      if (!tt) {
        reject(`Sản phẩm "${ten}" không tồn tại trong hệ thống!`);
      } else {
        resolve({ ten, ...tt });
      }
    }, 800);
  });
}
```

### Yêu cầu

1. Viết hàm phụ `chuanHoaTen(ten)`: cắt khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ (`"  áo thun "` → `"Áo Thun"`, `"MŨ"` → `"Mũ"`). Đây là phần **xử lý chuỗi**.
2. Viết hàm phụ `phanTichDon(dong)`: tách chuỗi `"tên xSỐLƯỢNG"` thành object `{ ten, soLuong }` (dùng `trim`, `split`, `Number`, và gọi `chuanHoaTen`).
3. Viết hàm `async tinhTienGioHang(donHang)`:
   - **Phân tích chuỗi:** `map` mảng chuỗi đầu vào qua `phanTichDon`.
   - **Song song:** lấy thông tin **tất cả** sản phẩm cùng lúc bằng `Promise.all`. Một sản phẩm không tồn tại → toàn bộ dừng, nhảy vào `catch`.
   - **Xử lý mảng:** `map` ghép số lượng + tính `thanhTien`; `filter` lọc sản phẩm còn đủ hàng (`tonKho >= soLuong`); dùng vòng lặp `for...of` cộng dồn để tính tạm tính.
   - **Rẽ nhánh `if/else` nhiều cấp:** tính ưu đãi theo tạm tính:
     - `>= 1.000.000đ` → giảm 15%
     - `>= 500.000đ` → giảm 10%
     - `>= 200.000đ` → giảm 5%
     - còn lại → không giảm
   - Bọc toàn bộ trong `try...catch...finally` và in báo cáo.

### Kết quả mong đợi

Gọi `tinhTienGioHang(donHang1)`:

```text
Bắt đầu tính tiền giỏ hàng...
Phân tích 3 dòng đơn hàng...
Tải thông tin 3 sản phẩm...
  Bỏ "Mũ" - chỉ còn 0, cần 1
  Áo Thun x2 = 300.000đ
  Quần Jean x1 = 350.000đ
Tạm tính: 650.000đ
Ưu đãi: giảm 10% (đơn từ 500.000đ) -65.000đ
Thành tiền: 585.000đ
Kết thúc tính tiền.
```

## Bài 2: Tổng hợp báo cáo doanh thu nhiều chi nhánh

Chủ đề: `async/await` + `Promise.allSettled` + xử lý chuỗi + `if/else` + `filter` / `map` + vòng lặp `for...of`

Tình huống: trang quản trị cần gom doanh thu từ **3 chi nhánh** cùng lúc. Ràng buộc thực tế: một chi nhánh mất kết nối thì vẫn phải xem được số liệu các chi nhánh còn lại. Vì vậy ta dùng `Promise.allSettled` — combinator **không bao giờ reject**, luôn trả về mảng kết quả gồm cả thành công lẫn thất bại, đúng tinh thần "chấp nhận lỗi từng phần".

### Bộ dữ liệu test (cho sẵn, KHÔNG SỬA)

```javascript
// ----- DANH SÁCH CHI NHÁNH cần lấy báo cáo -----
// thanhCong = false để giả lập chi nhánh mất kết nối.
const CHI_NHANH = [
  { ten: "Hà Nội", doanhThu: 120000000, thoiGian: 1500, thanhCong: true },
  { ten: "Đà Nẵng", doanhThu: 0, thoiGian: 2000, thanhCong: false },
  { ten: "TP.HCM", doanhThu: 250000000, thoiGian: 2500, thanhCong: true },
];

// ----- Hàm giả lập tải doanh thu 1 chi nhánh -----
function taiDoanhThuChiNhanh(ten, doanhThu, thoiGian, thanhCong = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (thanhCong) {
        resolve({ chiNhanh: ten, doanhThu });
      } else {
        reject(`Chi nhánh ${ten} mất kết nối!`);
      }
    }, thoiGian);
  });
}
```

### Yêu cầu

1. Viết hàm phụ `xepLoai(doanhThu)` dùng `if/else` nhiều cấp để trả về chuỗi xếp loại:
   - `>= 200.000.000đ` → `"Xuất sắc"`
   - `>= 100.000.000đ` → `"Đạt chỉ tiêu"`
   - `> 0` → `"Cần cải thiện"`
   - còn lại → `"Không có doanh thu"`
2. Viết hàm `async tongHopBaoCao()`:
   - Dùng `Promise.allSettled` tải **tất cả** chi nhánh cùng lúc (chấp nhận lỗi từng phần).
   - `filter` tách chi nhánh thành công / thất bại; `map` lấy dữ liệu doanh thu (`value`) và lý do lỗi (`reason`).
   - Dùng vòng lặp `for...of` để tính tổng doanh thu và tìm chi nhánh dẫn đầu.
   - **Xử lý chuỗi:** dùng `map` + `join(", ")` để dựng một dòng "Xếp loại" tổng hợp.
   - **Rẽ nhánh `if/else`:** đánh giá tổng thể theo tỉ lệ thành công.
   - Bọc trong `try...catch...finally`.

### Kết quả mong đợi

```text
Đang tổng hợp báo cáo từ các chi nhánh...
  [LỖI] Chi nhánh Đà Nẵng mất kết nối!
  Hà Nội: 120.000.000đ - Đạt chỉ tiêu
  TP.HCM: 250.000.000đ - Xuất sắc
Tổng doanh thu: 370.000.000đ
Chi nhánh dẫn đầu: TP.HCM (250.000.000đ)
Xếp loại: Hà Nội (Đạt chỉ tiêu), TP.HCM (Xuất sắc)
2/3 chi nhánh thành công (1 gặp sự cố).
Hoàn tất tổng hợp báo cáo.
```
