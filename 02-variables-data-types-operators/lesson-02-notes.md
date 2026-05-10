- `clg` -> `console.log()`
- `Shift + dấu .` -> `>`
- Markdown
- Có 2 bạn không dùng được gõ tắt.
- Công dụng của biến là để lưu trữ dữ liệu (giá trị) để máy tính có thể nhớ và sử dụng lại sau này.
- Cách "khai báo" biến:
  - Cú pháp: `[từ khóa] [tên biến] = [giá trị]`
  - A. `let` (chiếc hộp linh hoạt)
    - Dùng khi bạn biết giá trị của biến có thể thay đổi trong tương lai.
  - B. `const` (chiếc hộp niêm phong)
    - Viết tắt của `constant` (hằng số).
    - Dùng khi bạn muốn giá trị này không bao giờ thay đổi sau khi đã khai báo.
- Chỉ dùng `let` khi khai báo biến lần đầu; những lần sau chỉ cần gọi tên biến, không cần dùng lại `let`.
- Dùng `console.log(tên_biến)` để in giá trị của biến ra màn hình, giúp kiểm tra và debug.

- Các quy tắc đặt tên biến:
  1. Không dùng ký tự đặc biệt; không dùng dấu gạch ngang `-`, chỉ nên dùng dấu gạch dưới `_`.
  2. Không được bắt đầu tên biến bằng số.
  3. Không chứa khoảng trắng.
  4. Không được dùng từ khóa của JavaScript (`reserved keywords`).

5. Quy tắc ngầm: tuân thủ `naming convention`.
   - Vi phạm quy tắc này thì code vẫn chạy, nhưng đồng nghiệp sẽ đánh giá chúng ta là amateur (nghiệp dư).
   - Không nên viết: `let thongtinhocvien = 'abc'`
   - `snake_case`: `let thong_tin_hoc_vien = 'abc'`
     - Tạm chấp nhận được, nhưng thường dùng nhiều hơn trong Python/SQL.
   - `PascalCase`: `let ThongTinHocVien = 'abc'`
     - Thường chỉ dùng cho class, không dùng cho biến.
   - `camelCase` (chuẩn trong JS/TS): `let thongTinHocVien = 'abc'`
     - Đây là cách viết chuẩn.

- Nghệ thuật đặt tên (Clean Code)
  - Hãy đặt tên sao cho chỉ cần đọc là hiểu biến đó đang chứa gì.

- Tránh đặt tên vô nghĩa
  - Không nên:
    - `let d = 10`
  - Nên:
    - `let daysToFinish = 10` // số ngày để hoàn thành

- Đặt tên biến boolean rõ nghĩa (`true`/`false`)
  - Không nên:
    - `let check = true`
    - `let open = false` // khó hiểu: đang mở hay là lệnh mở?
  - Nên:
    - `let isOpen = false` // cửa có đang mở không?
    - `let hasPermission = true` // có quyền truy cập không?

- Dùng tiếng Anh hay tiếng Việt?
  - Tốt nhất là dùng tiếng Anh:
    - `fullName`, `age`
  - Có thể chấp nhận tiếng Việt không dấu:
    - `hoTen`, `tuoi`
  - Tuyệt đối tránh:
    - Tiếng Việt có dấu: `let sốTiền = 10` // dễ lỗi mã hóa
    - Nửa Tây nửa Ta: `let soMoney = 10` // thiếu nhất quán

- Kiểu dữ liệu (data types)
- Nhóm kiểu dữ liệu nguyên thủy (primitive types)
  - `string` (chuỗi ký tự)
    - Được bao bọc bằng dấu nháy đơn (`'`) hoặc dấu nháy kép (`"`).
    - Có thể dùng dấu backtick (`` ` ``).

- Nếu là chuỗi bình thường và không cần nhúng biến, có thể dùng cả dấu nháy đơn (`'...'`) hoặc dấu nháy kép (`"..."`).
  - Dùng dấu nháy kép (`"..."`) khi bên trong chuỗi có dấu nháy đơn (`'`).
  - Dùng dấu nháy đơn (`'...'`) khi bên trong chuỗi có dấu nháy kép (`"`).
  - Nếu cần nhúng biến, dùng dấu backtick (`` `...${tenBien}...` ``).

  sẽ có những extension để format code cho đẹp ví dụ như là
  prettier /eslint
  - Number (số)
  - Không phân biệt số nguyên (`10`) hay số thập phân (`3.14`) — tất cả đều được gọi chung là `number`.
  - Quy tắc đóng gói của `number`: viết trực tiếp, không bao quanh bởi ký tự nào cả.

- Boolean (luận lý) giống như một công tắc đèn.
  - Nó chỉ có 2 trạng thái duy nhất: bật `true` hoặc tắt `false`.
  - Quy tắc đóng gói của `boolean`: viết trực tiếp `true` hoặc `false`, không bao quanh bởi ký tự nào cả.

Hộp đồ nghề xử lý string

- `.length`: dùng để đếm số ký tự của chuỗi, bao gồm cả dấu cách.
  - Cú pháp: `tenBien.length`
  - Lưu ý: không có dấu ngoặc `()` vì đây là thuộc tính, không phải method.

- trim() - cái kéo cắt tỉa - nó sẽ làm sạch khoảng trắng ở 2 đầu

- Ví dụ: `input: " admin@example.com " -> "admin@example.com"`
  - Cú pháp: `tenBien.trim()`

- `toUpperCase()` và `toLowerCase()` - máy biến hình
  - Dùng để biến tất cả ký tự thành chữ HOA hoặc chữ thường.
  - Cú pháp: `tenBien.toUpperCase()` và `tenBien.toLowerCase()`

- `includes()` - kính lúp tìm kiếm
  - Dùng để kiểm tra xem một chuỗi con có nằm trong chuỗi mẹ hay không.
  - Kết quả trả về: `true` hoặc `false`
  - `includes()` phân biệt chữ HOA/chữ thường (case-sensitive).
  - Nó so khớp chính xác từng ký tự, bao gồm cả chữ hoa và chữ thường.
  - Ví dụ: `Error` và `error` là hai chuỗi khác nhau.
- `replace()` - xóa và sửa lỗi
  - Đặc điểm: mặc định chỉ thay thế **lần xuất hiện đầu tiên** mà nó tìm thấy.
  - Cú pháp: `tenBien.replace("cu", "moi")`

- `replaceAll()` - máy hút bụi công nghiệp
  - Dùng để thay thế **tất cả** chuỗi khớp.

- `indexOf()` - máy dò vị trí
  - Tìm vị trí (index) đầu tiên của một chuỗi con bên trong chuỗi mẹ.
  - Nếu không tìm thấy, trả về `-1`.
  - Cú pháp: `chuoiMe.indexOf("chuoiCon")`
  - Kết quả: trả về số, là vị trí bắt đầu tính từ `0`.

- `substring()` / `slice()`
  - Cắt lấy một phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc.
  - Điểm cực kỳ quan trọng:
    - `start`: được tính vào
    - `end`: không được tính vào
- `slice()` và `substring()` đều dùng để cắt chuỗi.

```js
let text = "ABCDEFG";

text.slice(1, 4); // "BCD"
```

- Cú pháp:
  - `chuoi.substring(batDau, ketThuc)`: cắt từ vị trí bắt đầu đến trước vị trí kết thúc.
  - `chuoi.slice(batDau, ketThuc)`: cắt tương tự, nhưng hỗ trợ số âm.

```js
let maDon = "ORD-2026-00567";

maDon.substring(4, 8); // "2026"
```

```js
let fileName = "report_2026.pdf";

fileName.slice(-4); // ".pdf"
```

- Khi nào dùng:
  - Muốn lấy phần cuối chuỗi hoặc đuôi file: ưu tiên `slice()`.
  - Cắt đơn giản từ trái sang phải: `slice()` hoặc `substring()` đều được.
  - Nếu không truyền `end`, hàm sẽ lấy từ vị trí `start` đến hết chuỗi.
  - Nếu chỉ truyền 1 tham số, nó sẽ lấy từ vị trí đó đến hết chuỗi.

- Tư duy kết hợp nhiều string method:
  - Đừng cố nhớ rời rạc từng method.
  - Hãy tư duy theo quy trình:

1. Dữ liệu có bẩn không?  
   → dùng `trim()`, `replace()`, `replaceAll()`, `toLowerCase()`

2. Có cần kiểm tra sự tồn tại hay không?  
   → dùng `includes()`

3. Mốc bắt đầu nằm ở đâu?  
   → dùng `indexOf()`

4. Sau khi biết vị trí rồi, cần cắt đoạn nào?  
   → dùng `slice()`, `substring()`

5. Kết quả cuối cùng có cần chuẩn hóa nữa không?  
   → dùng `trim()`, `toLowerCase()`, `split()`

- Công thức tư duy: **LÀM SẠCH → TÌM MỐC → CẮT/TÁCH → CHUẨN HÓA → KIỂM TRA**

Hộp đồ nghề xử lý Number

- `"100"` → `100`

- **Ép kiểu**
  - Để tính toán, bắt buộc phải chuyển dữ liệu về kiểu `Number`.
  - `Number()`
    - Cố gắng chuyển toàn bộ chuỗi thành số.
    - Nếu chuỗi chứa chỉ một ký tự không hợp lệ, kết quả sẽ là `NaN` (`Not a Number`).
  - `parseInt()`
    - Giống như máy lọc số nguyên.
    - Đọc từ trái sang phải, gặp số thì lấy, gặp chữ thì dừng.
    - Bỏ qua phần thập phân.
  - `parseFloat()`
    - Giống như máy lọc số thập phân.
    - Hoạt động tương tự `parseInt()`, nhưng giữ lại phần thập phân.

- **Một số phương thức làm việc với `Number`**
  - `toFixed()`
    - Dùng để cố định số chữ số sau dấu phẩy.
    - Cú pháp: `so.toFixed(soLeMuonLay)`
    - Tự động làm tròn dựa vào chữ số ngay sau vị trí muốn giữ.
      - `>= 5` → làm tròn lên
      - `< 5` → làm tròn xuống
      - Nếu thiếu, sẽ tự thêm số `0` vào cuối

### Đối tượng toán học (Math object)

- **Làm tròn số nguyên**
  - `Math.round()`: làm tròn theo quy tắc toán học.
  - `Math.ceil()`: làm tròn lên. Ví dụ: `4.1 -> 5`.
  - `Math.floor()`: làm tròn xuống. Ví dụ: `4.9 -> 4`.

- **Tạo số ngẫu nhiên**
  - `Math.random()`: trả về một số thập phân ngẫu nhiên từ `0` đến nhỏ hơn `1`.
  - Ví dụ: `0.1123`, `0.999999`

- **Tạo số ngẫu nhiên từ `min` đến `max`**
  - Công thức:
    `Math.floor(Math.random() * (max - min + 1)) + min`
- Ví dụ: random từ `50` đến `55` sẽ có thể ra:
  `50, 51, 52, 53, 54, 55`
  - B1. `Math.random()` → từ `0` đến gần `1` (`0.99999999...`)
  - B2. `max - min + 1` → `55 - 50 + 1 = 6` → tính tổng số kết quả có thể có (`50, 51, 52, 53, 54, 55` là `6` số)
  - B3. `Math.random() * 6` → từ `0` đến `5.99999999...` → kéo giãn khoảng ra `6` đơn vị
  - B4. `Math.floor()` → nhận được `0, 1, 2, 3, 4, 5` → làm tròn xuống để ra `6` số nguyên từ `0` đến `5`
  - B5. `+ min` → dịch chuyển lên vị trí `min` → `50, 51, 52, 53, 54, 55`

- `min`, `max`
- `padStart()`, `padEnd()`

- Ví dụ:
  - Ngày tháng: `01`, `02`, ... thay vì `1`, `2`
  - Mã đơn hàng: `SP-00005`, không phải `SP-5`
  - Đồng hồ: `00:05`

- `padStart()` dùng để lấp đầy phần trống ở phía trước chuỗi.
- Hàm này chèn thêm ký tự vào đầu chuỗi cho đến khi chuỗi đạt đủ độ dài mong muốn.
- Lưu ý: `padStart()` là phương thức của `String`, không phải `Number`.
  - Nếu đang có số, cần ép kiểu sang chuỗi trước khi dùng.

- Cú pháp:
  - `chuoi.padStart(doDaiMongMuon, kiTuChen)`

- Ghi nhớ:
  - Độ dài tổng bao gồm cả phần đệm.
  - Nếu chuỗi chưa đủ độ dài `n`, hàm sẽ tự động thêm ký tự chèn vào đầu chuỗi cho đủ.

- Cách nhớ nên dùng hàm nào:
  - Đầu vào hiện tại là text hay number?
    - Nếu là text, cần nghĩ tới việc ép kiểu.
  - Cần ép kiểu nghiêm ngặt hay linh hoạt?
    - `Number()`, `parseInt()`, `parseFloat()`
  - Sau khi thành số rồi, cần tính gì?
    - Cộng, trừ, nhân, chia, `min`, `max`
  - Có cần làm tròn không?
  - Có cần hiển thị đẹp không?
    - `toFixed()`, `padStart()`, `padEnd()`

In ra màn hình (`console.log`)

1. Cách 1: Nối chuỗi bằng dấu cộng (`+`)
2. Cách 2: Ngăn cách bằng dấu phẩy
3. Cách 3: Dùng backtick (template literal)

### Method chaining là gì?

- Ví dụ có chuỗi:
  ```js
  const slug = " Playwright Basic First test ";
  ```
- Kết quả mong muốn:
  ```js
  playwright - basic - first - test;
  ```
- Cách xử lý:
  - `trim()` để xóa khoảng trắng ở đầu và cuối chuỗi
  - `toLowerCase()` để chuyển toàn bộ ký tự sang chữ thường
  - `replaceAll(" ", "-")` để thay khoảng trắng bằng dấu `-`

- Method chaining là cách gọi nhiều method liên tiếp trên cùng một kiểu giá trị.
- Kết quả của bước trước sẽ trở thành đầu vào cho bước sau.

```js
let slug = "abc";
let trimmed = slug.trim();
let lowerCase = trimmed.toLowerCase();
let result = lowerCase.replaceAll(" ", "-");
```

- Có thể viết ngắn gọn bằng method chaining:

```js
const slug = " Playwright Basic First test ";
console.log(slug.trim().toLowerCase().replaceAll(" ", "-"));
```

- Ví dụ:

  ```js
  let text = " sale ";
  ```

- Câu này **sai**:

  ```js
  text.trim().includes("sale").toLowerCase();
  ```

  - `includes("sale")` trả về `true` hoặc `false`
  - Boolean không dùng `toLowerCase()` được

- Câu đúng là:

  ```js
  text.trim().toLowerCase().includes("sale");
  ```

- `toLocaleString()` dùng để hiển thị số theo cách viết quen thuộc của từng quốc gia hoặc ngôn ngữ.
- Ví dụ, cùng là số `54000000`:
  - Việt Nam: `54.000.000`
  - Mỹ: `54,000,000`

- Cú pháp:

  ```js
  so.toLocaleString(locale, options);
  ```

  - `locale`: chuẩn vùng/ngôn ngữ, ví dụ `vi-VN`, `en-US`
  - `options`: cấu hình thêm như tiền tệ, số lẻ, phần trăm

- Ví dụ:

  ```js
  const price = 54000000;

  console.log(price.toLocaleString("vi-VN")); // 54.000.000
  console.log(price.toLocaleString("en-US")); // 54,000,000
  ```

- Với `slice()`:

  ```js
  let text = "ABCDEFGH";
  //         01234567
  //        -8-7-6-5-4-3-2-1
  ```

- Chỉ cần nhớ:
  - `start`: được lấy
  - `end`: không được lấy
  - Nếu là số âm, đổi sang vị trí dương bằng công thức: `length + số âm`
  - Nếu chỉ có 1 tham số, đó là `start`, còn `end` sẽ là đến hết chuỗi

- Muốn lấy `DEFGH`:

  ```js
  text.slice(3);
  ```

  - `start = 3`
  - Không có `end` nên lấy đến hết chuỗi
  - Kết quả: `"DEFGH"`

- Muốn lấy `GH` bằng tham số âm:

  ```js
  text.slice(-2);
  ```

  - `-2` đổi sang dương là `8 + (-2) = 6`
  - Bản chất là:

  ```js
  text.slice(6);
  ```

  - Bắt đầu từ index `6` là chữ `G`
  - Kết quả: `"GH"`

- Muốn lấy `BCDEF`:

  ```js
  text.slice(1, -2);
  ```

  - `start = 1`
  - `end = -2` đổi sang dương là `6`
  - Bản chất là:

  ```js
  text.slice(1, 6);
  ```

  - Kết quả: `"BCDEF"`

Toán tử (Operator)

- **Phép cộng (`+`)**
  - Đây là phép toán "nguy hiểm" nhất vì có tính chất lưỡng cực.
  - Nếu cả 2 toán hạng đều là số, nó sẽ thực hiện phép cộng:
    - `10 + 5 = 15`
  - Nếu 1 trong 2 toán hạng là chuỗi (`string`), nó sẽ nối chuỗi:
    - `"10" + 5 = "105"`

- **Phép trừ (`-`)**
  - JavaScript luôn cố gắng ép kiểu chuỗi thành số khi gặp dấu trừ.

- **Phép nhân (`*`)** và **phép chia (`/`)**
  - Hoạt động tương tự phép trừ: JavaScript sẽ cố gắng ép kiểu chuỗi thành số.

- **Phép chia lấy dư (`%`)**
  - Trả về phần dư của phép chia.
  - Ví dụ:
    - `10 % 3 = 1` → `10` chia `3` được `3`, dư `1`
    - `10 % 2 = 0` → `10` chia `2` được `5`, dư `0`
  - Thường dùng để kiểm tra số chẵn hay số lẻ.

- **Toán tử gán (`=`)**
  - Dùng dấu bằng để gán giá trị.
  - Quy tắc: tính vế phải trước, rồi gán kết quả sang vế trái.
  - Ví dụ:
    - `let diemSo = 10`
    - `diemSo = diemSo + 5`
      - Bước 1: Tính vế phải trước → `10 + 5 = 15`
      - Bước 2: Gán `15` trở lại vào biến `diemSo`

- **Toán tử gán rút gọn**
  - Rất hay gặp trong các trường hợp như: `x = x + 5`
  - Các dạng phổ biến:
    1. `=` → `x = 10`
    2. `+=` → `x += 5` tương đương `x = x + 5`
    3. `-=` → `x -= 5` tương đương `x = x - 5`
    4. `*=` → `x *= 5` tương đương `x = x * 5`

Toán tử so sánh

- `>`: lớn hơn
- `<`: nhỏ hơn
- `>=`: lớn hơn hoặc bằng
- `<=`: nhỏ hơn hoặc bằng
  trả về boolean

- `==` và `===` đều dùng để so sánh bằng nhau.
- `===` là so sánh tuyệt đối, nghĩa là hai giá trị phải **đồng nhất về cả giá trị và kiểu dữ liệu**.

-- so sánh khác nhau
!==

- Không nên sử dụng `==`:
  - Đây là phép so sánh lỏng lẻo.
  - Chỉ ưu tiên so sánh **giá trị**, không kiểm tra chặt chẽ **kiểu dữ liệu**.
  - Nếu kiểu dữ liệu khác nhau, JavaScript sẽ tự động ép kiểu để cố gắng so sánh.

- Nên sử dụng `===`:
  - Đây là phép so sánh nghiêm ngặt.
  - Kiểm tra cả **giá trị** lẫn **kiểu dữ liệu**.

Toán tử logic

- **Phép VÀ (`&&` - logical AND)**
  - **Quy tắc:** chỉ trả về `true` khi **tất cả** điều kiện đều là `true`.
  - Chỉ cần có **1** điều kiện là `false` thì kết quả là `false`.

- **Phép HOẶC (`||` - logical OR)**
  - **Quy tắc:** trả về `true` nếu có **ít nhất 1** điều kiện là `true`.
  - Chỉ trả về `false` khi **tất cả** điều kiện đều là `false`.

- **Phép PHỦ ĐỊNH (`!` - logical NOT)**
  - **Quy tắc:** đảo ngược giá trị boolean.
  - `true` thành `false`, và `false` thành `true`.

- **Cách đọc toán tử `!` cho đúng**
  - 3 cách đọc quen thuộc:
    - Không
    - Không phải
    - Phủ định của

- **Ví dụ**
  - `isLoading`: kiểm tra xem có đang loading hay không.
  - `!isLoading`: đọc là **không loading**, **không phải đang loading**.
  - `!isSuccess`: **không thành công**.
  - `!hasPermission`: **không có quyền**.

- **Mẹo**
  - Hãy dịch luôn thành **một câu phủ định** để dễ hiểu.
- **Tư duy đọc code**
  - Trước khi hỏi AI, hoặc trước khi thêm `console.log` hay dùng debugger, nên áp dụng tư duy đọc code từ trên xuống để hiểu logic trước.

- **Toán tử tăng/giảm (`prefix` và `postfix`)**
  - `i++` (`postfix`): trả về giá trị cũ của `i`, rồi **sau đó** mới tăng `i` lên `1`.
  - `++i` (`prefix`): tăng `i` lên `1` trước, rồi mới trả về giá trị mới.
  - `i--`
  - `--i`

- **Luôn tự đặt ra 2 câu hỏi**
  - Giá trị của **cả biểu thức** `i++` hoặc `++i` là gì?
  - Giá trị cuối cùng của biến `i` sau khi dòng code chạy là gì?

- **Những nơi toán tử này có thể được nhét vào**
  - Phép gán: `let y = i++`
  - Phép tính: `let total = ++i * 2`
  - Hàm: `console.log(i++)`
  - Điều kiện: `if (i++ > 5)`

- **Điểm mấu chốt**
  - Nơi đang dùng nó luôn nhận **giá trị của cả biểu thức**, chứ không phải chỉ nhìn giá trị cuối cùng của biến là đủ.

- **Lưu ý khi dùng `++` / `--`**
  - Nếu `++` hoặc `--` đứng một mình trên một dòng riêng biệt, thì hoàn toàn vô hại.
  - Lúc này `prefix` hay `postfix` đều cho kết quả giống nhau.

- **Best practice**
  - Nên viết thành các dòng riêng biệt.

- **Ý chính khi code**
  - 1 dòng chỉ nên làm 1 việc chính.
  - Phép tính để riêng.
  - Cập nhật biến để riêng.
