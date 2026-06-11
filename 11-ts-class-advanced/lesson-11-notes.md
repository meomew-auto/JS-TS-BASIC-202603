## Abstract class

- `abstract class` tồn tại trong TypeScript.
- Đây là một class “đang dang dở”:
  - Có một phần code đã viết sẵn.
  - Có một phần chưa viết, thường là `abstract method`.
- Class con sẽ kế thừa và hoàn thành phần còn thiếu.

## Generic class

- Generic class cho phép viết một class duy nhất nhưng có thể hoạt động với nhiều kiểu dữ liệu khác nhau.
- Giống như một khuôn bánh:
  - Một cái khuôn có thể làm bánh socola, bánh chưng, bánh dâu,...
  - Chỉ cần thay nguyên liệu (`T`), khuôn vẫn giữ nguyên.

### Cú pháp

```ts
class ClassName<T>
```

- `T` = Type Parameter, đóng vai trò như một placeholder.
- Generic constraints dùng để giới hạn kiểu dữ liệu được phép truyền vào.

## Composition và inheritance

### `is-a`

- `is-a` nghĩa là “là một”.
- Dùng với inheritance.
- Class con là một loại của class cha và kế thừa từ class cha.
- Câu hỏi cần đặt ra: `X có là một Y không?`
  - Nếu nghe tự nhiên, có thể dùng quan hệ `is-a`.

Ví dụ:

```ts
Dog is an Animal
Dog extends Animal
```

```ts
LoginPage is a BasePage
LoginPage extends BasePage
```

### `has-a`

- `has-a` nghĩa là “có một”.
- Dùng với composition.
- Một class có hoặc sử dụng object khác bên trong như một công cụ.

Ví dụ:

- `Car` có một `Engine`.
- `Student` có một `Score`.
- `Computer` có một `CPU`.

## Quy tắc OOP

- Ưu tiên dùng composition hơn inheritance.
- Chỉ dùng inheritance khi quan hệ `is-a` thật sự rõ ràng.

### Inheritance

- Cứng nhắc.
- Class con phải kế thừa tất cả thuộc tính và method từ class cha, kể cả những thứ không cần.
- Chỉ kế thừa được từ một class cha.
- Khó test hơn vì phải mock cả class cha.
- Khi class cha thay đổi, class con dễ bị ảnh hưởng.

### Composition

- Linh hoạt hơn.
- Chỉ chọn module cần dùng.
- Có thể dùng nhiều module cùng lúc.
- Module thay đổi ít ảnh hưởng đến class sử dụng nó.
- Dễ test hơn vì có thể mock từng module riêng.

## Khi nào dùng inheritance?

- Quan hệ `is-a` rõ ràng và ổn định.
- Không có nhu cầu đa kế thừa.

## Khi nào dùng composition?

- Quan hệ `has-a`.
- Cần sự linh hoạt.
- Muốn tái sử dụng các module độc lập.
- Tách logic thành các module/class có khả năng tái sử dụng, sau đó inject hoặc gọi thông qua composition.

## Dependency Injection

- Dependency Injection thường được dùng chung với composition.
- Trong Playwright, fixture là một ví dụ phổ biến của Dependency Injection.
