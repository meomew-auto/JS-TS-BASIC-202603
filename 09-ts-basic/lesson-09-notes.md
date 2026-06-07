## TypeScript là gì?

TypeScript = JavaScript + hệ thống kiểu dữ liệu (type system).

Ví dụ: đặt món ăn

- JS: không có type.
- TS: có type.

## TypeScript hoạt động như thế nào?

TypeScript kiểm tra lỗi ở các thời điểm sau:

### Bước 1: Viết code trong IDE

Ví dụ: VS Code.

- TypeScript Language Server chạy ngầm trong IDE.
- Gạch đỏ ngay khi mình gõ sai kiểu dữ liệu.
- Gợi ý code.

Đây chưa phải là lúc biên dịch. Đây chỉ là bước IDE kiểm tra code.

### Bước 2: Biên dịch

Chạy lệnh:

- `tsc`
- `npm run build`

Quá trình biên dịch:

```txt
file.ts -> tsc compile -> file.js
```

Trong bước này:

- TypeScript kiểm tra type.
- Sau khi biên dịch, file `.js` không còn type.
- File kết quả là JavaScript thuần 100%.
- Các khai báo type như `: number`, `: string` sẽ bị xóa.
- Chỉ giữ lại JavaScript thuần.

### Bước 3: Runtime

Trình duyệt hoặc Node.js chạy file `.js`.

## Công cụ cần biết

- `typescript`: bộ kiểm tra và biên dịch TypeScript, cung cấp lệnh `tsc`.
- `tsx`: công cụ giúp chạy trực tiếp file `.ts` trong Node.js, rất tiện khi học.

## Khởi tạo project

```bash
npm init -y
```

Lệnh này tạo file `package.json`.

Cài TypeScript và TSX:

```bash
npm install -D typescript tsx
```

Chạy trực tiếp file TypeScript:

```bash
npx tsx tenfile.ts
```

Biên dịch file TypeScript sang JavaScript:

```bash
npx tsc tenfile.ts
```

## Cấu hình Code Runner cho TypeScript

Tạo folder `.vscode` ở root project.

Tạo file `settings.json`:

```json
{
  "code-runner.runInTerminal": true,
  "code-runner.executorMap": {
    "typescript": "npx tsx"
  }
}
```

## Các kiểu dữ liệu cơ bản

Cú pháp:

```ts
let tenBien: kieuDuLieu = giaTri;
```

## Type inference

Type inference là cơ chế TypeScript tự suy luận kiểu dữ liệu.

## Union types

Union type dùng khi một biến có thể mang nhiều kiểu dữ liệu khác nhau.

Cú pháp dùng dấu `|`:

```ts
let value: string | number;
```

Nói đơn giản, union type giúp liệt kê trước các khả năng hợp lệ để TypeScript chặn giá trị sai ngay lúc viết code.

Union type đặc biệt hữu ích trong các nhóm sau:

- Giới hạn lựa chọn đầu vào:
  - browser
  - environment
  - role
  - action
- Mô tả trạng thái test/API rõ ràng:
  - pass
  - fail
  - skip

Trong function, ta phải kiểm tra kiểu dữ liệu để xử lý logic phù hợp.

## `any` và `unknown`

- `any`: cho phép gán bất kỳ kiểu dữ liệu nào.
- `unknown`: cũng nhận bất kỳ kiểu dữ liệu nào, nhưng bắt buộc phải kiểm tra kiểu trước khi sử dụng.

## Định kiểu cho mảng

Cú pháp đơn giản:

- `string[]`: mảng chỉ chứa string.
- `number[]`: mảng chỉ chứa number.
- `User[]`: mảng chỉ chứa object đúng shape `User`.
