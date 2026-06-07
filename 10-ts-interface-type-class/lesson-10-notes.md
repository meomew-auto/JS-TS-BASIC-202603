## Triết lý TypeScript

Trong TypeScript, chúng ta cần mô tả hình dạng của mọi dữ liệu bằng `type` hoặc `interface`.

Nguyên tắc:

- Mọi object, hàm, và API response đều nên có hợp đồng dữ liệu được viết bằng `interface` hoặc `type`.
- “Hình dạng” của dữ liệu nghĩa là:
  - Có những field nào.
  - Mỗi field thuộc kiểu dữ liệu gì.
  - Field nào bắt buộc.
  - Field nào tùy chọn.
- Người tạo dữ liệu phải tạo đúng shape:
  - Đủ field.
  - Đúng kiểu dữ liệu.
- Người sử dụng được TypeScript đảm bảo:
  - Field nào tồn tại.
  - Field nào có thể thiếu.
  - Field đó thuộc kiểu gì.

## Interface - Bản thiết kế

Có thể tưởng tượng `interface` giống như bản thiết kế nhà:

- Kiến trúc sư vẽ bản thiết kế trước (`interface`).
- Thợ xây phải xây dựng đúng theo thiết kế (`object`/`class` phải tuân theo `interface`).
- Có thể mở rộng bản thiết kế bằng `extends`.
  - Ví dụ: thêm phòng, thêm tầng.
- Nhiều kiến trúc sư có thể đóng góp vào cùng một bản thiết kế thông qua declaration merging.

## Type Alias - Nhãn dán

`type alias` giống như một nhãn dán:

- Có thể dán nhãn lên nhiều loại dữ liệu:
  - Object.
  - String.
  - Number.
  - Function.
  - Tuple.
- Nhãn dán không thể sửa sau khi đã viết.
  - Không hỗ trợ declaration merging.
- Có thể tổ hợp nhiều kiểu dữ liệu với nhau.
  - Ví dụ: union type.

## Class trong TypeScript

TypeScript có một quy tắc quan trọng: mỗi thuộc tính trong class **phải có giá trị trước khi object được khởi tạo**.

- **Optional property (`?`)**
  - Cho phép khai báo: “Field này có hay không đều được”.
  - Không cần gán trong `constructor`.

- **`readonly`**
  - Chỉ được gán một lần duy nhất:
    - Khi khai báo.
    - Hoặc trong `constructor`.
  - Sau đó không được sửa.
  - Nếu sửa, TypeScript sẽ báo lỗi.

- **Dấu `!` (Definite Assignment Assertion)**
  - Báo với TypeScript: “Tin tôi đi, field này chắc chắn sẽ có giá trị trước khi tôi dùng nó”.
  - Dù hiện tại TypeScript chưa thấy field đó được gán ở đâu.

- **`constructor()`**
  - Dùng để khởi tạo object và gán giá trị ban đầu cho thuộc tính.

- **Parameter properties**
  - Là cú pháp viết tắt.
  - Có thể vừa khai báo vừa gán thuộc tính chỉ trong một dòng.

- **Default parameters**
  - Cho phép gán sẵn giá trị mặc định cho tham số.
  - Nếu khi `new` không truyền giá trị, TypeScript sẽ tự lấy giá trị mặc định.

## Access modifiers - Phân quyền truy cập

- **`public`**
  - Là mặc định.
  - Không giới hạn truy cập.
  - Có thể đọc, sửa, gọi từ bất cứ đâu:
    - Trong class.
    - Ngoài class.
    - Trong class con.

- **`private`**
  - Chỉ truy cập được bên trong chính class đó.
  - Code bên ngoài và class con không dùng được.
  - Đây là công cụ để đóng gói và che giấu dữ liệu nhạy cảm.

- **`protected`**
  - Nằm giữa `public` và `private`.
  - Truy cập được trong class và các class con kế thừa nó.
  - Vẫn đóng kín với thế giới bên ngoài.

## Return type - Kiểu trả về

- TypeScript cần khai báo rõ method sẽ trả về kiểu gì.
- TypeScript sẽ kiểm tra xem bạn có giữ đúng “lời hứa” đó hay không.

## Static methods và properties

- Bình thường, mỗi object (`instance`) có bản sao riêng của property và method.
- Đôi khi cần một thứ dùng chung cho tất cả.
- Khi đó dùng `static`, vì thành viên đó thuộc về class chứ không thuộc về object cụ thể nào.
