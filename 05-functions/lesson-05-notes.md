### Function: Tư duy nó như một cái máy xay sinh tố

Có thể tưởng tượng function như một chiếc máy xay với 3 thành phần cốt lõi:

- **Đầu vào (input/parameter):** Bạn cho trái cây, đường, sữa... vào máy.
- **Quy trình xử lý (body):** Lưỡi dao quay và trộn mọi thứ lại với nhau.
- **Đầu ra (output/return):** Máy trả ra cho chúng ta một ly sinh tố.

Ví dụ nếu không dùng function, ta sẽ phải lặp lại cùng một đoạn code nhiều lần:

**TC1**

```js
console.log("Nhập userName: abc");
console.log("Nhập matKhau: abc");
```

**TC2**

```js
console.log("Nhập userName: abc2");
console.log("Nhập matKhau: abc3");
```

**TC3**

```js
console.log("Nhập userName: abc3");
console.log("Nhập matKhau: aab4");
```

### Điểm mấu chốt mà function giải quyết

- Phần giống nhau được gom vào một nơi.
- Mỗi lần cần dùng chỉ việc gọi lại.
- Nó gắn liền với tư duy **DRY**: đừng lặp lại cùng một đoạn code ở nhiều nơi.

### Các loại function trong JavaScript

Trong JavaScript có 3 loại function. Cú pháp cơ bản đầu tiên chúng ta dùng là **function declaration** (hàm tự định nghĩa).

### Cú pháp

```js
function tenHam(dauVao) {
  // body
  // đầu ra
}
```

### Đầu vào (parameter)

- **Tham số (parameter):** là chỗ trống được khai báo sẵn khi ta tạo function.
- **Đối số (argument):** là giá trị thật được truyền vào khi function chạy.

### Body

- Là nơi chứa logic xử lý của code.

### `return` - Đầu ra

- `return` dùng để trả kết quả từ bên trong function ra bên ngoài.
- Giá trị trả về có thể là:
  - `number`
  - `string`
  - `boolean`
  - `object`
  - `array`
  - ...

- Nơi gọi hàm sẽ nhận lại giá trị đó.
- Khi function gặp `return`, nó sẽ dừng ngay tại đó.

## Hoisting

```js
// Gọi hàm trước khi khai báo
xinChao();

// Khai báo hàm sau
function xinChao() {
  console.log("Hoisting");
}
```

### Ứng dụng

- Có thể viết các kịch bản test ở phía trên trước.
- Các hàm hỗ trợ như `helper`, `clean data`,... có thể đưa xuống cuối file để phần chính gọn hơn.
- Hoisting không áp dụng cho mọi loại hàm, mà phụ thuộc vào cách mình khai báo hàm.

## Các kiểu viết hàm trong JavaScript

### 1. Function declaration (hàm khai báo)

- Đây là cách viết truyền thống.
- Bắt buộc bắt đầu bằng từ khóa `function` và phải có tên hàm.
- **Hỗ trợ hoisting 100%**.

**Ưu điểm**

- Được hoisting nên có thể gọi trước khi khai báo.
- Tên hàm rõ ràng, dễ đọc code.
- Dễ debug vì lỗi thường hiển thị tên hàm trong stack trace.

**Nhược điểm**

- Cú pháp dài hơn so với arrow function.
- Có `this` riêng, có thể gây ảnh hưởng khi dùng callback.

### 2. Function expression

Cú pháp:

```js
const tenHam = function () {
  // thân hàm
};
```

- **Không được hỗ trợ hoisting**.
- Hàm được lưu trong biến nên linh hoạt hơn function declaration.

**Ưu điểm**

- Dùng `const` nên an toàn hơn, tránh khai báo lại hàm trùng tên.
- Có thể gán vào biến và truyền vào hàm khác.
- Có thể chọn hàm theo điều kiện.

**Nhược điểm**

- Không có hoisting.
- Cú pháp vẫn khá dài vì vẫn phải viết từ khóa `function`.

### 3. Arrow function (hàm mũi tên)

- Là phiên bản rút gọn của function expression.

Cú pháp:

```js
// Dạng đầy đủ
const tenHam = (thamSo1, thamSo2) => {
  // thân hàm
};

// Dạng rút gọn
const tenHam = (thamSo1) => console.log("abc");
```

- Không có từ khóa `function`, thay bằng dấu `=>`.
- **Không hỗ trợ hoisting**.

**Ưu điểm**

- Cú pháp rất ngắn gọn.
- Rất hay dùng khi viết callback như `.map()`, `.filter()`, `.forEach()`.
- Không có `this` riêng, nên an toàn hơn trong các tình huống như `setTimeout()`.

**Nhược điểm**

- Không có hoisting.
- Không có `this` riêng, cần lưu ý khi dùng trong object.
- Khi debug, stack trace thường không rõ tên hàm bằng function declaration.

  ## Kỹ thuật xử lý tham số nâng cao

- Cách viết hàm từ cơ bản đến nâng cao hơn một chút, vì trong thực tế mọi thứ không đơn giản.

- **Function overloading** - một hàm có nhiều cách gọi
  - Ở một số ngôn ngữ như Java, C#, bạn có thể tạo nhiều hàm cùng tên nhưng khác nhau về số lượng hoặc kiểu tham số.
  - Tuy nhiên, **JavaScript không hỗ trợ overloading theo kiểu đó**.
  - Cách xử lý trong JavaScript là dùng **một hàm duy nhất**, sau đó tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp.

- **Default parameter** - giá trị mặc định
  - Khi người gọi không truyền đủ tham số, JavaScript có thể tự động gán giá trị mặc định.
  - **Lưu ý:**
    - Hoạt động tốt nhất khi tham số mặc định nằm ở cuối.
    - Nếu tham số ở giữa bị thiếu, bạn thường phải truyền `undefined` để giữ chỗ.
  - **Quy tắc:** luôn đặt tham số default ở cuối.
  - Nếu hàm có nhiều hơn 3 tham số, có thể cân nhắc dùng **options object**.

- **Rest parameter (`...args`)**
  - Dùng khi muốn nhận bao nhiêu tham số cũng được.
  - Dấu `...` sẽ gom tất cả tham số còn lại vào một mảng.

- **Options object**
  - Nếu một hàm có nhiều hơn 3 tham số, thay vì truyền từng tham số riêng lẻ rất dễ nhầm thứ tự, hãy gói tất cả vào một object.
  - Đây là một pattern nâng cao được dùng rất phổ biến.

Destructuring và spread operator

- `const { page } = await browser.newContext()`
- `{ ...defaultConfig, timeout: 4000 }`

- **Destructuring** (phân rã)
  - Cú pháp cho phép bóc tách giá trị từ `array` hoặc `object` thành các biến riêng lẻ chỉ trong một dòng code.

- **Array destructuring**
  - Bóc tách giá trị từ mảng.
- **Spread operator**
  - Dùng dấu `...` đặt trước tên biến của một `array` hoặc `object` để trải toàn bộ nội dung của nó ra.
  - Nếu có thuộc tính trùng tên, giá trị ở bên phải sẽ ghi đè giá trị ở bên trái.
  - Spread không làm thay đổi `object` cũ mà tạo ra một `object` mới.

## Hàm callback (gọi lại)

- Ví dụ thực tế:
  - Bạn đến một nhà hàng đang đông khách.
  - Nhân viên order nói: “Anh để lại số điện thoại, khi nào có bàn tôi sẽ gọi lại.”
  - Bạn đưa số điện thoại.
  - Nhân viên tiếp tục làm việc khác.
  - Khi có bàn, nhân viên lấy số điện thoại của bạn ra và thực hiện hành động gọi.

- Từ ví dụ trên:
  - Callback là một hàm `A` được truyền vào làm tham số cho một hàm khác `B`.
  - Khi hàm `B` làm xong việc, nó sẽ gọi hàm `A` để chạy.

## Bản chất của hàm trong JavaScript

- Hàm trong JavaScript là **first-class citizen**.
- Nghĩa là hàm có quyền “bình đẳng” như số, chuỗi, mảng...
- Ta có thể:
  - gán hàm vào biến,
  - truyền hàm vào hàm khác,
  - trả về hàm từ một hàm khác.

## Có `()` và không có `()`

- Có `()`:
  - Thực thi ngay lập tức.
  - Giống như bấm nút để máy xay sinh tố chạy ngay.

- Không có `()`:
  - Là truyền chính hàm đó đi, chưa chạy ngay.
  - Giống như đưa cái máy xay cho người khác, để lúc nào họ muốn thì tự cắm điện và chạy.

- Một hàm không có `return` thì sau khi chạy xong, JavaScript sẽ tự trả về giá trị mặc định là `undefined`.

## Quy tắc cần nhớ

- Khi truyền callback, luôn viết **tên hàm trần**, **không có `()`**.

## Array callback methods

### `map()`

- Dùng để biến đổi mảng cũ thành một mảng mới.
- Callback thường nhận 3 tham số, nhưng thực tế hay chỉ dùng tham số đầu tiên.

```js
const mangMoi = mangCu.map((phanTu, index, mangGoc) => {
  // phanTu: phần tử hiện tại
  // index: vị trí của phần tử
  // mangGoc: mảng ban đầu

  return giaTriMoi; // bắt buộc phải return
});
```

### `filter()`

- Dùng để lọc ra các phần tử thỏa mãn điều kiện.

```js
const mangLoc = mangGoc.filter((phanTu, index, mangGoc) => {
  return dieuKien;
});
```

- Nếu callback trả về `true` thì giữ lại phần tử.
- Nếu trả về `false` thì loại bỏ phần tử.

### `find()`

- Dùng để tìm **phần tử đầu tiên** thỏa mãn điều kiện.

```js
const phanTu = mang.find((phanTu) => dieuKien);
```

- Trả về **phần tử đầu tiên** thỏa mãn.
- **Không** trả về mảng.

Scope

- Là phạm vi quy định một biến được phép tồn tại và được nhìn thấy ở đâu trong đoạn code.

- **A. Global scope** (phạm vi toàn cục)
  - **Đặc điểm:** Biến được khai báo lộ thiên, không nằm trong bất kỳ cặp ngoặc `{}` hay `function` nào.
  - **Quyền lực:** Là “vua” — gần như mọi nơi trong file code đều có thể nhìn thấy và sử dụng nó.

- **B. Function scope** (phạm vi hàm)
  - **Đặc điểm:** Biến được khai báo **bên trong một hàm**.
  - **Quyền lực:** Chỉ hoạt động trong phạm vi của hàm đó.
  - Những gì sinh ra trong hàm sẽ “chết” khi hàm chạy xong.
  - Thế giới bên ngoài **không thể nhìn thấy** nó.

- **C. Block scope** (phạm vi khối)
  - Bất kỳ thứ gì nằm trong ngoặc nhọn `{}` của `if`, `for`, `while`,... đều tạo thành một block scope.
  - Những gì xảy ra trong ngoặc nhọn sẽ ở lại trong đó.
  - Nên dùng `let` hoặc `const`, **không dùng `var`** nếu muốn có block scope.

- **D. Cạm bẫy: `object` không phải là một scope**
  - Hình thức có thể giống nhau, nhưng vai trò và bản chất hoàn toàn khác nhau.
  - **Scope** là vùng nhìn thấy biến.
  - **Object** là hộp dữ liệu chứa các cặp `key-value`.
  - Scope trả lời câu hỏi: **“Biến này đứng ở đây còn nhìn thấy không?”**
  - Object trả lời câu hỏi: **“Dữ liệu này nằm trong property nào?”**
  - **Object không tạo ra scope.**

- **Scope chain**
  - Khi tìm biến, JavaScript tìm **từ trong ra ngoài**, không bao giờ tìm từ ngoài vào trong.
  - Hàm con nhìn thấy biến của hàm cha.
  - Hàm cha **không** nhìn thấy biến của hàm con.
