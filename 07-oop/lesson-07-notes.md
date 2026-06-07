## OOP và Class

### Object

Ví dụ: học sinh A

```js
{
  ten: "...",
  tuoi: ...
}
```

Ví dụ: học sinh B

```js
{
  ten: "...",
  tuoi: ...
}
```

### Class

Class có thể hiểu như một bản vẽ thiết kế hoặc nhà máy đúc khuôn.

Ví dụ:

- `class` là bản vẽ thiết kế ngôi nhà.
- Trên bản vẽ có thông tin:
  - Nhà có mấy cửa sổ.
  - Màu sơn là gì.
  - Cấu trúc ngôi nhà như thế nào.
- `object` là ngôi nhà thực tế được xây từ bản vẽ đó.
- Từ một bản thiết kế, có thể thuê thợ xây ra 100 ngôi nhà thật.

Mỗi ngôi nhà được gọi là một `object`, hay còn gọi là `instance` / thực thể.

Ví dụ:

- Nhà số 1 sơn màu xanh.
- Nhà số 2 sơn màu đỏ.
- Cả hai nhà có thể khác màu sơn, nhưng cấu trúc vẫn giống nhau.

### Cú pháp cốt lõi

Một `class` thường có 2 thành phần chính:

- Thuộc tính (`property`)
- Phương thức (`method`)

Tên `class` bắt buộc nên viết hoa chữ cái đầu theo kiểu `PascalCase` để phân biệt với biến thông thường.

Ví dụ:

```js
class HocVien {}
class LoginPage {}
class ShoppingCart {}
```

### Thuộc tính trong class

Có 2 cách khai báo thuộc tính trong `class`.

#### Cách 1: Gán trong `constructor()`

Cú pháp:

```js
this.ten = giaTri;
```

Vị trí:

- Nằm trong hàm `constructor()`.

Khi nào dùng:

- Khi giá trị phụ thuộc vào tham số truyền vào từ bên ngoài.

#### Cách 2: Class field

Cú pháp:

```js
ten = giaTri;
```

Lưu ý:

- Khai báo bên ngoài `constructor()`.
- Không cần dùng `this`.
- Thường đặt ở đầu `class`, trước `constructor()`.

Khi nào dùng:

- Khi giá trị cố định.
- Khi giá trị không thay đổi theo từng object.

### Nguyên tắc vàng

- Mọi thuộc tính nên được khai báo ở `class field` trước.
- `constructor()` chỉ dùng để gán lại giá trị cho những thuộc tính cần nhận tham số từ bên ngoài.
- Nếu `class` không cần:
  - Nhận tham số.
  - Gán lại giá trị.
  - Chạy logic khởi tạo.

=> Có thể bỏ `constructor()`.

### Luồng tạo một object từ class

Ví dụ:

```js
let hv = new HocVien("a", 10);
```

Các bước xảy ra:

1. Lệnh `new` tạo ra một object rỗng `{}` và gán `this` cho object đó.
2. `class fields` chạy trước, gán các giá trị cố định vào object.
3. `constructor()` chạy sau, gán lại các giá trị động từ tham số truyền vào.

### `constructor()` - Trái tim của class

`constructor()` là một hàm đặc biệt trong `class`.

Đặc điểm:

1. Tự động chạy:
   - JavaScript gọi `constructor()` ngay lập tức mỗi khi dùng từ khóa `new` để tạo object mới.
   - Không bao giờ cần gọi `constructor()` bằng tay.
2. Chỉ có duy nhất một:
   - Mỗi `class` chỉ được phép có một hàm `constructor()`.

Nhiệm vụ chính:

- Gán lại giá trị ban đầu cho các thuộc tính (`this.xxx`) của object đang được tạo ra.
- Có thể hiểu là bước lắp ráp linh kiện cho ngôi nhà.

### Phương thức (`method`)

Phương thức là hành động của object.

Object có thể có các hàm để mô tả hành động mà object thực hiện sau khi được tạo ra từ `class`.

Trong `method`, `this` chính là object hiện tại, tức là object đang gọi hàm.

### Hai cách viết method

```js
class ViDu {
  // Method thường - shorthand (khuyến nghị dùng)
  chaoHoi() {}

  // Arrow function gán vào class field
  tamBiet = () => {};
}
```

#### Method thường

- `this` phụ thuộc vào object gọi method.
- Bộ nhớ: dùng chung một bản cho mọi object, tiết kiệm hơn.
- Kế thừa: class con có thể override.

#### Arrow function

- `this` luôn bị khóa cứng vào object, không bị lạc `this`.
- Bộ nhớ: mỗi object tạo ra một bản riêng, tốn bộ nhớ hơn.
- Kế thừa: class con không thể override theo cách thông thường.

### Quy tắc đơn giản

- Mặc định luôn dùng method thường.
- Chỉ dùng arrow function khi chắc chắn method đó sẽ bị tách ra khỏi object để truyền vào hàm khác, ví dụ callback.

### Từ khóa `this` trong class

- `this` trong object là người gọi hàm.
- Trong class, nguyên tắc hoạt động của `this` cũng tương tự.

- Arrow function có giải quyết được tất cả vấn đề của chúng ta không?
- Có nên dùng arrow function cho tất cả method của class không?
  - Câu trả lời là: không nên.

Điểm mấu chốt:

- Arrow function trong class field: khóa `this` theo object được tạo ra bởi `new`.
- Method thường: nằm trên prototype, tức là nằm trong “kho method chung” của class.

## 4 trụ cột của OOP (Lập trình hướng đối tượng)

- `class` giống như bản thiết kế hoặc người thợ xây.
- Để lên trình độ “kiến trúc sư”, tức là thiết kế được những framework mượt mà, dễ bảo trì, cần hiểu rõ 4 tính chất quan trọng của OOP.

### 4.1 Kế thừa - Cha truyền con nối

- JavaScript cho phép một class mới, gọi là **class con**, nhận lại toàn bộ thuộc tính và phương thức của một class đã có, gọi là **class cha**.
- Kế thừa được thực hiện bằng từ khóa `extends` và `super()`.
- Tính kế thừa giúp loại bỏ code trùng lặp, đúng với nguyên tắc **DRY**.

#### Ứng dụng trong Automation Test

- Có thể tạo một class nền là `BasePage`.
- Mọi trang web thường có các thao tác chung như:
  - `moTrang()`
  - `click()`
  - `cuonChuot()`
- Ta gom các thao tác chung này vào class cha.
- Khi đó, các class con kế thừa từ `BasePage` sẽ không cần khai báo lại các thao tác này.

### `super()` - Truyền tham số cho class cha

- Nếu constructor của class cha nhận tham số, class con sẽ rơi vào một vài tình huống rất hay gặp.
- Khi đó, class con cần gọi `super()` để truyền tham số lên class cha.

### Override và Extend - Ghi đè và mở rộng

Class con có thể viết lại hoặc mở rộng hàm của class cha. Hai cách này khác nhau hoàn toàn.

#### Override - Ghi đè

- Class con toàn quyền kiểm soát logic của chính nó.
- Không bị ràng buộc bởi logic của class cha.
- Nên dùng khi hành vi của class cha không còn phù hợp với class con.
- Ví dụ: `MobilePage` cần cách chụp màn hình khác với `BasePage`.

**Cẩn thận:**

- Dễ làm mất logic chung như:
  - log
  - validate
  - chờ trang load
- Đặc biệt nếu các logic đó đang nằm ở class cha.

#### Extend - Mở rộng

- Tái sử dụng logic chuẩn của class cha.
- Tránh viết lặp code.
- Vẫn thêm được logic riêng của class con.
- Nên dùng khi hành vi của class cha vẫn đúng, class con chỉ cần thêm bước sau đó.
- Ví dụ: Vẫn chụp màn hình như `BasePage`, nhưng sau khi chụp xong thì upload lên cloud.

**Cẩn thận:**

- Nhớ gọi `super.tenHam()`.
- Cần quyết định gọi `super` trước hay sau logic riêng.

### Quy tắc nhanh cho người mới

- Nếu muốn thay hẳn cách làm -> **Override**.
- Nếu muốn giữ quy trình chuẩn và thêm bước riêng -> **Extend**.

style function hoặc procedural style

4.2 Đóng gói () - Viên nhộng
Định nghĩa: đóng gói là việc giấu kiến đữ liệu nhạy cảm sâu bên trong class
Bên ngoài chỉ dc thao tác qua hàm đc cũng cấp sẵn

private fields - thuộc tíh bảo mât
dùng dấu # trước tên thuộc tính -> biến nó thành private. bên ngoài class ko thể đụng vào

Cách dùng tryt cập private field từ bên ngoài
Nếu cần đọc hoạc sửa private fields có kiểm soát, sẽ có các cách
C1: getter/setter (từ khóa get và set)

C2: viết hàm thường

4.3 Đa hình -Cùng 1 lệnh nhưng có nhiều cách làm

Định nghĩa: Đa hình cho phép calss con ghi đè (override) hoặc thay đổi cách thức hoạt động của 1 phương thưics mà nó nhận từ cha

Kế thừa
Trọng tâm: Con nhận lại tài sản của cha
Câu hỏi: Con lấy gì từ cha
Đa hình
Trọng Tâm: cùng 1 lệnh, có nhiều cách chạy
Câu hỏi: Gọi cùng hàm, ai chạy kiểu nnaof?
=> Đa hình bạn ko cần biết đang cầm loại object nào -> cứ gọi hàm là nó tự chạy đúng

4.4 Trừu tượng (abstraction)
Định nghĩa: Trừu tượng hóa là việc che giấu đi sự phức tạp của hệ thống, chỉ phơi ra
những giao diện (hàm, tính năng) đơn giản nhất, dễ hiểu nháta cho user
JS thuần ko có từ khóa abstract > tính trừu tượng của JS chủ yếu là 1 tư duy thiết kết hợp với tính đóng gói

class PaymentGate{
//Hàng tá logic phức tạp
doiTheNganHang()
nnhapOTP()

//Tính trưugf tượng của calsss
-> phơi bày duy nhất 1 nút bấm hay tính năng cho user dùng
thanhToanNhanh(soThe, OTP){
this.doiTheNGangHang()
this.nhapOTP()
}
}
Trừu tượng # đóng gói ->

đóng gói = giấu dữ liệu (private, ) -> cấm đụng vào dữ liệu kín

trường tượng = giấu logic phức tạp -> bạn ko cần biết bên trong làm gì -> cứ bấm nút chạy

đóng gói là giáu biến. Còn trừu tượng là giấu cáhc hoạt động

Composition (kết hợp) và Inheritance (kế thừa) -> đợi TS học lại

pattern: hw-07-oop
