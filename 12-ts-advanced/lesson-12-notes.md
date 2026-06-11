TypeScript type system: `typeof`, `keyof`, `as` và Generic

- Literal type:
  - Là kiểu giá trị cụ thể.
  - Trong TypeScript, `string` là tập hợp của rất nhiều chuỗi ký tự khác nhau.
  - `"dev"` là một literal type, tức là tập hợp chỉ chứa duy nhất một chuỗi: `"dev"`.

- Biến chỉ lưu được một giá trị thì khác gì hằng số `const`?

- Sức mạnh của literal type nằm ở union types:
  - Giúp code an toàn hơn.
  - Không còn lo gõ sai chính tả, ví dụ: `"dev"` thành `"devvv"`.
  - Tránh truyền nhầm giá trị lạ vào hệ thống.

- Type assertion (`as`):
  - Trong TypeScript, `as` được gọi là type assertion.
  - Lưu ý: `as` chỉ thay đổi cách TypeScript nhìn nhận kiểu dữ liệu, không thay đổi dữ liệu thật khi chạy.

- Value space (thực tế):
  - Dữ liệu vẫn giữ nguyên.
  - Ví dụ: số `5` vẫn là số `5`.

- Type space (bản vẽ):
  - Dùng `as` để gán một “nhãn kiểu” mới cho biến.
  - Ví dụ: bảo TypeScript đừng coi nó là số nữa, mà hãy coi nó là chuỗi.
