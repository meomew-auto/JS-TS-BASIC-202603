## Vòng lặp `while`

- Dịch sang tiếng Việt là: **"trong khi..."**
- Logic:
  - Trong khi **bụng còn đói** thì **đi lấy thêm thức ăn**.

### Cú pháp

Vòng lặp `while` có 3 yếu tố cốt lõi:

```js
// Biến khởi tạo: khai báo trước khi vào vòng lặp
let bienDem = giaTriBanDau;

while (dieuKienLap) {
  // Khối lệnh thực thi
  thucHienHanhDong();

  // Bước nhảy: cập nhật biến đếm
  capNhatBienDem();
}
```

- **Yếu tố 1: Biến khởi tạo**
  - Đây là **vạch xuất phát** của vòng lặp.
  - Ví dụ: `let soLanClick = 1;`
  - Nghĩa là bắt đầu click từ lần đầu tiên.

- **Yếu tố 2: Điều kiện lặp**
  - Nằm trong **dấu ngoặc tròn `()`**.
  - Đây là phần **kiểm tra điều kiện**:
    - Nếu **truthy** thì code bên trong vòng lặp được chạy.
    - Nếu **falsy** thì vòng lặp kết thúc.
  - Ví dụ: `soLanClick <= 3`

- **Yếu tố 3: Bước nhảy**
  - Đây là **cửa thoát hiểm** của vòng lặp.
  - Bắt buộc phải nằm bên trong **dấu ngoặc nhọn `{}`**.
  - Nhiệm vụ là **thay đổi biến khởi tạo** để đến một thời điểm nào đó điều kiện lặp trở thành `false`, từ đó vòng lặp dừng lại.
  - Ví dụ: soLanClick++

- **Quy tắc vàng:** Dùng `while` khi bạn **không biết trước số lần lặp**, mà chỉ biết **điều kiện để dừng**.

  ````js
  while (chưaBuồnNgủ) {
    lướtVideoTiếp();
  }
  ```- **Lưu ý:** Vòng lặp vô tận, không nên chạy đoạn này.
  ````

```js
// let bungDoi = true;

// while (bungDoi === true) {
//   console.log("Đang ăn thịt nướng");
//   // Hậu quả: ăn mãi không ngừng -> nổ bụng -> treo máy
//   // Đây là infinite loop (vòng lặp vô tận)
//   // bungDoi = false
// }
```

- **Mảng (Array)**
  - Bản chất, nếu:

    ```js
    let ten = "Hoang";
    ```

    thì `ten` chỉ chứa một giá trị.

  - Có thể hiểu array giống như một cái tủ đựng đồ có nhiều ngăn:
    - Chỉ có một tên chung (giống tên biến).
    - Có thể chứa nhiều món đồ bên trong.
    - Các món đồ được đặt cạnh nhau và có thứ tự.

  - Cú pháp:
    - Dùng dấu ngoặc vuông `[]`
    - Các phần tử đặt bên trong và ngăn cách nhau bằng dấu phẩy

  - Ví dụ:

    ```js
    // Array chứa toàn string
    let danhSachUser = ["admin", "test_01", "user_vip"];

    // Array chứa toàn number
    let danhSachGia = [1000, 2000, 3000];

    // Array rỗng
    let danhSachLoi = [];
    ```

  - **Lưu ý:** Trong nhiều ngôn ngữ khác, array thường chỉ chứa một kiểu dữ liệu. Nhưng trong JavaScript, array có thể chứa nhiều kiểu dữ liệu khác nhau.

    ```js
    let thapCam = ["Neko", 30, true, null];
    ```

    - Tuy nhiên, không nên dùng kiểu "thập cẩm" như vậy.
    - Nên giữ dữ liệu đồng nhất để dễ xử lý.

- **Cú pháp lấy phần tử trong mảng**
  - Cú pháp:
    ```js
    tenBien[viTri];
    ```
  - `index` bắt đầu từ `0`

  - Ví dụ:

    ```js
    let sanPham = ["aoThun", "quanJean"];

    console.log(sanPham[1]); // "quanJean"
    console.log(sanPham[10]); // undefined
    ```

- **Bộ đồ nghề xử lý mảng**
  - **A. `length`** - Đếm số lượng phần tử
    - Cú pháp:
      ```js
      tenMang.length;
      ```
    - Trả ra `number` là tổng số phần tử trong mảng.
    - Vì `index` bắt đầu từ `0`, nên phần tử cuối cùng luôn ở vị trí `length - 1`.

  - **B. `push()`** - Thêm phần tử vào cuối mảng
    - Cú pháp:
      ```js
      tenMang.push(giaTri);
      ```
    - Đầu ra: số lượng phần tử mới của mảng sau khi thêm
    - Tác dụng phụ: mảng gốc bị thay đổi

  - **C. `includes()`** - Kiểm tra phần tử có tồn tại hay không
    - Cú pháp:
      ```js
      tenMang.includes(giaTri);
      ```

  - **D. `pop()`** - Rút phần tử cuối cùng ra ngoài
    - Đầu ra: phần tử cuối cùng vừa bị rút ra
    - Tác dụng phụ: mảng gốc bị thay đổi

  - **E. `shift()`** - Rút phần tử đầu tiên ra ngoài

  - **F. `unshift()`** - Thêm phần tử vào đầu mảng

  - **G. `join()`** - Gộp tất cả phần tử thành một chuỗi
    - Cú pháp:
      ```js
      tenMang.join(kiTuNoi);
      ```

  - **H. `indexOf()`** - Trả ra `index` nếu tìm thấy, trả `-1` nếu không có

- **Object**
  - Có thể hiểu object giống như một cái tủ có dán nhãn:
    - Khi muốn lấy một "ngăn kéo", ta lấy theo **tên ngăn kéo**.

  - **Quy tắc vàng:**
    - Dùng **array** khi bạn có một danh sách gồm nhiều thứ giống nhau, ví dụ: danh sách user, giá, sản phẩm.
    - Dùng **object** khi cần mô tả chi tiết **một thứ duy nhất**, ví dụ: một user, một sản phẩm, hoặc một cấu hình test.

  - **Cú pháp:**
    - Dùng dấu ngoặc nhọn `{}`.
    - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.

  - **Key và value:**
    - **Key**: tên thuộc tính, giống như nhãn dán trên ngăn kéo.
    - **Value**: dữ liệu nằm trong ngăn kéo, có thể là `string`, `number`, `boolean`, `array`, hoặc `function`.

  - **Ví dụ:**

    ```js
    let userTest = {
      hoTen: "Neko Nguyen",
      tuoi: 30,
      isVip: true,
      quyenHan: ["read", "write"],
    };
    ```

  - **Quy tắc đặt tên key:**
    - Nếu key là tên hợp lệ theo quy tắc đặt tên biến, thường **không cần dấu nháy**.
    - Nếu key chứa **dấu cách** hoặc **dấu gạch ngang `-`**, phải bọc trong dấu nháy kép.

  - **Cách truy xuất dữ liệu:**
    - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
      - Cú pháp:
        ```js
        tenObject.key;
        ```
      - Dùng khi key là tên hợp lệ.

    - **B. Dùng dấu ngoặc vuông `[]`**
      - Cú pháp:
        ```js
        tenObject["tenKey"];
        ```
      - Dùng khi key có dấu cách, dấu gạch ngang, hoặc cần truy cập động.

  - **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
    - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

  - **Các phương thức thường dùng của object:**
    - **A. `Object.keys()`** - Lấy tất cả key thành một mảng
    - **B. `Object.values()`** - Lấy tất cả value thành một mảng
    - **C. `Object.entries()`** - Lấy cả key và value thành từng cặp
    - **D. `Object.hasOwn()`** - Kiểm tra key có phải là thuộc tính của chính object đó hay không

  - **Cú pháp `Object.hasOwn()`:**
    ```js
    Object.hasOwn(tenObject, "tenKey");
    ```

## Array of Object

- Cấu trúc này được bao bên ngoài bằng ngoặc vuông `[]`.
- Bên trong mảng chứa các object, mỗi object được bao bằng ngoặc nhọn `{}`.

## Vòng lặp `for` - lặp lại có cấu trúc

### A. Vòng lặp `for` cổ điển

- Đây là kiểu vòng lặp cơ bản, mạnh mẽ và xuất hiện trong hầu hết các ngôn ngữ lập trình.

- **Cú pháp:**

  ```js
  for ([1. Khởi tạo]; [2. Điều kiện dừng]; [3. Bước nhảy]) {
    // khối lệnh bên trong
  }
  ```

- **[1] Khởi tạo:** Tạo biến đếm, chỉ chạy đúng 1 lần duy nhất.
- **[2] Điều kiện dừng:** Được kiểm tra trước mỗi vòng lặp. Nếu `true` thì tiếp tục, nếu `false` thì dừng.
- **[3] Bước nhảy:** Cập nhật biến đếm sau mỗi vòng lặp, thường là `i++` hoặc `i--`.
- Ba phần được ngăn cách với nhau bằng dấu chấm phẩy `;`, không phải dấu phẩy `,`.
  B. Vòng lặp `for...of` (dùng cho array và string)

- Dùng để duyệt qua từng phần tử trong `array` hoặc từng ký tự trong `string`.

- **Cú pháp:**

```js
for (let phanTu of danhSach) {
  // phanTu tự động nhận giá trị của từng phần tử
}
```

- `danhSach`: một `array` hoặc `string` muốn duyệt qua.
- `phanTu`: biến tạm, tự động nhận **giá trị** của từng phần tử trong mỗi vòng lặp.
- `of`: từ khóa.

- **Lưu ý:** Không dùng `for...of` để duyệt `object`.

C. Vòng lặp `for...in` (dành cho object)

- Dùng để duyệt qua từng tên thuộc tính (`key`) của `object`.

- **Cú pháp:**

```js
for (let key in tenObject) {
  // key tự động nhận tên thuộc tính
}
```

- `tenObject`: `object` muốn duyệt qua.
- `key`: biến tạm, tự động nhận tên thuộc tính (`key`) trong mỗi vòng lặp.
- `in`: từ khóa.

- **Lưu ý:** Không nên dùng `for...in` cho `array`.

Break và continue

- Khi chạy vòng lặp, đôi khi cần can thiệp ngay giữa chừng:
  - Tìm thấy rồi, không cần tìm nữa → dùng `break`.
  - Phần tử này không cần xử lý → dùng `continue` để bỏ qua và chuyển sang vòng lặp tiếp theo.

- `break` và `continue` dùng được trong:
  - `for` cổ điển
  - `while`
  - `for...of`
  - `for...in`

- **Không dùng được với `forEach()`.**

- **Cú pháp `break`:**

for (...) {
if (dieuKien) {
break; // thoát khỏi vòng lặp, rồi chạy tiếp code bên dưới
}
// code ở đây
}

````

- Với `break`:
  - Thoát khỏi vòng lặp ngay lập tức.
  - Code phía dưới `break` trong lần lặp đó sẽ không chạy.
  - Các lần lặp tiếp theo cũng không chạy nữa.

- **Cú pháp `continue`:**

```js
for (...) {
  if (dieuKien) {
    continue; // bỏ qua lần lặp hiện tại
  }

  // code ở đây
}
````

- Với `continue`:
  - Không thoát khỏi vòng lặp.
  - Chỉ bỏ qua phần code phía dưới trong lần lặp hiện tại.
  - Sau đó chuyển sang lần lặp tiếp theo.
