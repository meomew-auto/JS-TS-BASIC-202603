1. **Bản chất đơn luồng (single-thread) của JavaScript**

- JavaScript chỉ có **một luồng chính (Main Thread)** để thực thi code.
- Có thể hình dung như một nhân viên duy nhất vừa làm thu ngân vừa làm pha chế.
- Với **multi-threading**, có nhiều nhân viên xử lý nhiều việc cùng lúc.
- Nhưng với JavaScript, mỗi việc phải được xử lý **từng cái một**: dòng này xong mới tới dòng khác.

2. **Lập trình đồng bộ (synchronous)**

- Trong mô hình đồng bộ, nếu một tác vụ đầu tiên quá nặng hoặc quá lâu:
  - Main Thread phải đứng chờ xử lý xong tác vụ đó.
  - Toàn bộ các tác vụ phía sau đều bị chặn (**blocked**).
  - Không ai được phục vụ tiếp cho đến khi việc hiện tại hoàn tất.

- Ví dụ:
  - Khách đầu tiên gọi một món cực kỳ phức tạp.
  - Nhân viên phải tập trung pha món đó.
  - Tất cả khách còn lại đều phải chờ.

3. **Trong automation, tác vụ nặng nhất thường không phải là tính toán**

- Phần khiến máy tính mất nhiều thời gian thường là **I/O (Input/Output)**, tức là giao tiếp với thế giới bên ngoài.

- Gọi là I/O vì:
  - CPU không tự hoàn thành các tác vụ này một mình.
  - Nó chỉ **gửi yêu cầu ra ngoài (output)**.
  - Sau đó **ngồi chờ kết quả trả về (input)**.
  - Thời gian chờ này nằm ngoài sự kiểm soát trực tiếp của CPU.
  - Nó phụ thuộc vào:
    - tốc độ mạng,
    - tốc độ phản hồi của server,
    - tốc độ đọc/ghi file,
    - và nhiều yếu tố bên ngoài khác.

4. **Những loại I/O thường gặp trong Automation Testing**

- **I/O với hệ thống file**
  - Đọc/ghi file dung lượng lớn để lấy dữ liệu.
  - Lưu ảnh chụp màn hình vào report sau khi chạy test.

- **I/O với trình duyệt**
  - Ví dụ: `page.click()`
  - CPU gửi lệnh click cho trình duyệt.
  - Sau đó phải chờ trình duyệt:
    - xử lý sự kiện,
    - render lại DOM,
    - rồi phản hồi kết quả.

- **I/O với server (network)**
  - Gọi API để tạo dữ liệu.
  - Kết nối database và chờ server trả về kết quả query.

5. **Vì vậy JavaScript cần mô hình bất đồng bộ (asynchronous)**

- Thay vì để Main Thread đứng chờ một tác vụ nặng hoàn tất, JavaScript xử lý theo cách khác:

1. Nhân viên nhận order tải một trang web hoặc làm một tác vụ nặng.
2. Nó chuyển tác vụ đó cho hệ thống phía sau xử lý, đồng thời phát cho người dùng một **tờ biên lai**.
3. Tờ biên lai đó chính là **Promise**.
4. Main Thread lập tức rảnh tay để tiếp tục làm các việc khác, ví dụ chạy các dòng code bên dưới.
5. Khi tác vụ hoàn tất, hệ thống sẽ quay lại thông báo kết quả thông qua Promise để xử lý tiếp.

6. **Promise là gì?**

- Trong JavaScript, **Promise** là một "lời hứa".
- Có thể hiểu Promise như **tờ biên lai theo dõi kết quả của một tác vụ sẽ có trong tương lai**.

7. **Ba trạng thái của Promise**

- `pending`
  - Promise vừa được tạo.
  - Tác vụ bất đồng bộ đang chạy.
  - Chưa có dữ liệu trả về.

- `fulfilled` / `resolved`
  - Tác vụ đã hoàn thành thành công.
  - Promise trả về kết quả.

- `rejected`
  - Tác vụ thất bại.
  - Promise trả về lỗi, ví dụ timeout hoặc mất kết nối.

8. **Cách lấy kết quả từ Promise**

- Chúng ta thường dùng hai phương thức ghép nối:

- `.then(callback)`
  - Được gọi khi Promise thành công (`resolved` / `fulfilled`).
  - Dùng để lấy dữ liệu và xử lý bước tiếp theo.

- `.catch(callback)`
  - Được gọi khi Promise thất bại (`rejected`).
  - Dùng để xử lý lỗi.

9. **Cú pháp**

```js
const tenPromise = new Promise((resolve, reject) => {
  // Thực hiện tác vụ bất đồng bộ ở đây

  if (thanhCong) {
    resolve(giaTriThanhCong);
  } else {
    reject(lyDoLoi);
  }
});
```

- Đầu ra của `new Promise(...)` là một Promise.
- Chúng ta sẽ dùng `.then()` hoặc `.catch()` để đón kết quả từ Promise.

- Giá trị truyền vào `resolve()` hoặc `reject()` sẽ tự động trở thành tham số đầu vào cho `.then()` hoặc `.catch()`.
- Đây chính là cầu nối dữ liệu giúp dữ liệu luân chuyển xuyên suốt Promise.
- `resolve()` và `reject()` chỉ nhận đúng một giá trị. Giá trị đó có thể là bất kỳ kiểu dữ liệu nào.

### Chaining (xâu chuỗi): Khi các `.then()` truyền dữ liệu cho nhau

- Nếu bên trong `.then()` `return` một giá trị, giá trị đó sẽ tự động trở thành đầu vào cho `.then()` tiếp theo trong chuỗi.
- Dữ liệu cứ thế chảy từ bước này sang bước khác.

### Các cách bắt lỗi với `.catch()` và `reject()`

- Khi một Promise bị `reject()`, JavaScript sẽ tìm nơi xử lý lỗi gần nhất.
- Có 3 cách bắt lỗi:
  1. Dùng `.catch()` ở cuối chuỗi:
     - Đây là cách hay dùng nhất.
     - Bắt lỗi từ bất kỳ `.then()` nào phía trên bị lỗi.

  2. Dùng `.then()` với 2 tham số:
     - Cách này ít dùng hơn.

  3. Dùng `.catch()` xen giữa chuỗi:
     - Đây là cách nâng cao.
     - Dùng để bắt lỗi từng bước, xử lý xong rồi cho chuỗi chạy tiếp.

### `setTimeout()`

- Cú pháp:

  ```js
  setTimeout(callback, delay);
  ```

- `setTimeout()` trả về một ID số nguyên, có thể dùng để hủy hẹn giờ nếu cần.

### `async/await`: Cứu tinh khi làm việc với Promise

- `async/await` là một lớp cú pháp bọc bên ngoài Promise và `.then()`.
- Tác dụng chính là giúp code dễ đọc, dễ viết và thuận tiện hơn.

#### `async`

- `async` biến một hàm thường thành một hàm bất đồng bộ.
- Hàm có `async` chắc chắn 100% sẽ trả về một Promise, dù bên trong `return` một giá trị bình thường.
- JavaScript sẽ tự động bọc giá trị trả về bằng `Promise.resolve()`.
- Bên trong hàm `async`, ta có quyền sử dụng từ khóa `await`.

#### `await`

- Đặt `await` trước một lệnh trả về Promise.
- `await` sẽ:
  - Tạm dừng dòng code bên trong hàm `async` để chờ Promise hoàn tất.
  - Trả về giá trị mà Promise đã `resolve()`, nên có thể gán thẳng vào biến.
  - Không làm đóng băng toàn bộ hệ thống.

## Promise.all - Chạy song song và gộp kết quả

```js
let ketQua = await Promise.all([promise1, promise2, ...]);
```

### Cách hoạt động của `Promise.all`

1. Nhận vào một mảng chứa nhiều Promise.
2. Kích hoạt tất cả Promise chạy cùng lúc.
3. Đợi cho đến khi tất cả đều resolve xong.
4. Trả về một mảng kết quả theo đúng thứ tự ban đầu.

**Thời gian chạy = thời gian của tác vụ lâu nhất**  
Không cộng dồn thời gian của từng Promise.

Nếu bất kỳ Promise nào trong mảng bị `reject()`, `Promise.all` sẽ dừng ngay và nhảy vào `catch()`. Các Promise khác dù đã thành công cũng sẽ bị bỏ qua.

## Promise.allSettled() - Kẻ bao dung

- Giống `Promise.all`: chạy tất cả Promise cùng lúc.
- Khác `Promise.all`: không dừng khi gặp lỗi.
- Nó kiên nhẫn đợi tất cả chạy xong rồi trả về mảng kết quả, bao gồm cả thành công và thất bại.

```js
let ketQua = await Promise.allSettled([promise1, promise2, ...]);
```

Trả về mảng object, mỗi phần tử có dạng:

```js
[
  {
    status: "fulfilled",
    value: "<giá trị resolve>", // Thành công
  },
  {
    status: "rejected",
    reason: "<giá trị reject>", // Thất bại
  },
];
```

## Bắt lỗi trong async/await: try...catch...finally

### Cú pháp

```js
try {
  // Code nguy hiểm, có thể gây lỗi
  // Bất kỳ dòng await nào cũng có thể bị reject
} catch (loi) {
  // Xử lý khi bất kỳ await nào ở trên bị reject
  // Biến loi chứa nội dung reject hoặc Error object khi gọi new Error()
} finally {
  // Luôn luôn chạy, dù try thành công hay catch bắt lỗi
  // Dùng để dọn dẹp tài nguyên
}
```
