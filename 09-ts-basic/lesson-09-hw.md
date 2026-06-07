## Bài 1: Quản lý kho sản phẩm Neko Shop

Viết các hàm xử lý một kho sản phẩm: tìm sản phẩm theo tên, phân loại theo giá, kiểm tra tồn kho và tính tổng giá trị kho.

### Bộ dữ liệu test (cho sẵn, KHÔNG SỬA)

```typescript
// Union type: sản phẩm chỉ thuộc 1 trong 3 loại
type LoaiSanPham = "ao" | "quan" | "phukien";

// interface mô tả hình dạng 1 sản phẩm
interface SanPham {
  ten: string;
  gia: number; // đơn vị: đồng
  tonKho: number; // số lượng còn trong kho
  loai: LoaiSanPham;
}

const khoSanPham: SanPham[] = [
  { ten: "Áo thun Neko", gia: 150000, tonKho: 12, loai: "ao" },
  { ten: "Quần Jean", gia: 350000, tonKho: 0, loai: "quan" },
  { ten: "Mũ lưỡi trai", gia: 80000, tonKho: 5, loai: "phukien" },
  { ten: "Áo khoác dù", gia: 500000, tonKho: 3, loai: "ao" },
];
```

### Yêu cầu

1. `timSanPham(ten: string): SanPham | undefined`
   - Tìm sản phẩm theo tên. So khớp không phân biệt hoa thường và bỏ khoảng trắng thừa (xử lý chuỗi: `trim`, `toLowerCase`).
   - Không thấy thì trả về `undefined`.

2. `phanLoaiGia(gia: number): string`
   - Dùng `if/else`: `gia < 100000` là "Rẻ"; `100000 <= gia < 400000` là "Trung bình"; còn lại là "Đắt".

3. `tinhTrangKho(sp: SanPham): string`
   - Trả về chuỗi mô tả. Nếu `tonKho === 0` thì "HẾT HÀNG", ngược lại "Còn {tonKho} sản phẩm".

4. `tongGiaTriKho(): number`
   - Tính tổng `gia * tonKho` của tất cả sản phẩm bằng vòng lặp `for...of` (cộng dồn).

5. `inDanhSach(): void`
   - In từng sản phẩm theo định dạng ở phần Kết quả mong đợi, gộp tên loại đầy đủ và mức giá.

### Kết quả mong đợi

```typescript
console.log(timSanPham("  áo THUN neko ")?.ten); // Áo thun Neko
console.log(timSanPham("không có")); // undefined

console.log(phanLoaiGia(80000)); // Rẻ
console.log(phanLoaiGia(150000)); // Trung bình
console.log(phanLoaiGia(500000)); // Đắt

inDanhSach();
// Áo thun Neko [Áo] - 150000d - Trung bình - Còn 12 sản phẩm
// Quần Jean [Quần] - 350000d - Trung bình - HẾT HÀNG
// Mũ lưỡi trai [Phụ kiện] - 80000d - Rẻ - Còn 5 sản phẩm
// Áo khoác dù [Áo] - 500000d - Đắt - Còn 3 sản phẩm

console.log("Tổng giá trị kho:", tongGiaTriKho()); // Tổng giá trị kho: 3340000
```

## Bài 2: Sổ điểm học viên Neko Academy

Viết các hàm xử lý danh sách học viên: chuẩn hóa họ tên, tính điểm trung bình, xếp loại và in bảng điểm.

### Bộ dữ liệu test (cho sẵn, KHÔNG SỬA)

```typescript
// Union type: học viên chỉ thuộc 1 trong 4 mức xếp loại
type XepLoai = "Gioi" | "Kha" | "TrungBinh" | "Yeu";

// interface mô tả 1 học viên
interface HocVien {
  readonly id: number; // không cho phép sửa sau khi tạo
  hoTen: string;
  diem: number[]; // điểm các môn
  email?: string; // optional: có thể không có
}

const danhSach: HocVien[] = [
  { id: 1, hoTen: "  nguyễn văn an ", diem: [8, 9, 7], email: "an@neko.vn" },
  { id: 2, hoTen: "Trần thị Bình", diem: [5, 6, 6] },
  { id: 3, hoTen: "LÊ VĂN CƯỜNG", diem: [3, 4, 5], email: "cuong@neko.vn" },
  { id: 4, hoTen: "Phạm Thị Dung", diem: [10, 9, 10] },
];
```

### Yêu cầu

1. `chuanHoaTen(ten: string): string`
   - Xử lý chuỗi: bỏ khoảng trắng thừa hai đầu và giữa các từ, viết hoa chữ cái đầu mỗi từ, các chữ còn lại viết thường.
   - Ví dụ: `"  nguyễn văn an "` thành `"Nguyễn Văn An"`, `"LÊ VĂN CƯỜNG"` thành `"Lê Văn Cường"`.

2. `diemTrungBinh(hv: HocVien): number`
   - Cộng dồn mảng `diem` bằng vòng lặp `for...of` rồi chia số môn (không dùng `reduce`).
   - Làm tròn 1 chữ số thập phân.

3. `xepLoai(diemTB: number): XepLoai`
   - Dùng `if/else`: `>= 8.5` là `"Gioi"`; `>= 6.5` là `"Kha"`; `>= 5` là `"TrungBinh"`; còn lại `"Yeu"`.

4. `timTheoEmail(email: string): HocVien | undefined`
   - Tìm học viên theo email, so khớp không phân biệt hoa thường và bỏ khoảng trắng.
   - Bỏ qua học viên không có email (optional). Không thấy thì trả về `undefined`.

5. `inBangDiem(): void`
   - In từng học viên: tên đã chuẩn hóa, điểm trung bình, tên xếp loại hiển thị đầy đủ.

### Kết quả mong đợi

```typescript
console.log(chuanHoaTen("  nguyễn văn an ")); // Nguyễn Văn An
console.log(chuanHoaTen("LÊ VĂN CƯỜNG")); // Lê Văn Cường

console.log(diemTrungBinh(danhSach[1])); // 5.7

console.log(xepLoai(8)); // Kha
console.log(xepLoai(4)); // Yeu

console.log(timTheoEmail("  AN@neko.vn ")?.id); // 1
console.log(timTheoEmail("khong@co.vn")); // undefined

inBangDiem();
// Nguyễn Văn An - TB: 8 - Khá
// Trần Thị Bình - TB: 5.7 - Trung bình
// Lê Văn Cường - TB: 4 - Yếu
// Phạm Thị Dung - TB: 9.7 - Giỏi
```
