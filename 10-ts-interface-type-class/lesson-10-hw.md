## Bài 1: Class `Library` — Quản lý thư viện Neko Books

Viết class `Library` quản lý danh sách sách: thêm sách, tìm kiếm, lọc, mượn/trả, thống kê.

### Bộ dữ liệu (cho sẵn, KHÔNG SỬA)

```typescript
interface IBook {
  title: string;
  author: string;
  year: number;
  genre: string;
  available: boolean;
}

type BookFilter = {
  title?: string;
  genre?: string;
  yearFrom?: number;
};
```

### Yêu cầu

Viết class `Library` với:

1. **`private books: IBook[]`** — mảng lưu sách, khởi tạo rỗng `[]`

2. **`addBook(book: IBook): void`**
   - Thêm sách vào mảng. Không được thêm nếu đã tồn tại sách trùng cả `title` và `author` (kiểm tra bằng vòng lặp).
   - Nếu trùng → `throw new Error(...)` với message mô tả rõ.

3. **`getAllBooks(): IBook[]`**
   - Trả về bản copy của mảng books (dùng spread `[...this.books]`).

4. **`findByTitle(keyword: string): IBook[]`**
   - Tìm sách có `title` chứa `keyword`, không phân biệt hoa thường (dùng `.toLowerCase().includes()`).

5. **`filter(filter: BookFilter): IBook[]`**
   - Lọc sách theo các tiêu chí trong `filter`. Nếu 1 field không được truyền (là `undefined`) thì bỏ qua field đó.
   - Dùng `if (filter.field !== undefined)` để kiểm tra field có được truyền không.

6. **`getAvailableBooks(): IBook[]`**
   - Trả về các sách có `available === true`.

7. **`getStats()`**
   - Trả về object `{ total: number; available: number; borrowed: number; genres: string[] }`.
   - `genres` là mảng các thể loại **duy nhất, không trùng** (gợi ý: dùng `[...new Set(...)]` hoặc vòng lặp kiểm tra trước khi push).

8. **`borrowBook(title: string): boolean`**
   - Tìm sách theo `title` (so khớp chính xác, phân biệt hoa thường). Nếu không tìm thấy → `throw Error`. Nếu `available === false` → `throw Error`. Ngược lại, đổi `available = false` và trả về `true`.

9. **`returnBook(title: string): boolean`**
   - Tương tự `borrowBook` nhưng ngược lại: nếu `available === true` → `throw Error`. Đổi `available = true` và trả về `true`.

### Kết quả mong đợi

```typescript
const lib = new Library();

lib.addBook({
  title: "Clean Code",
  author: "Robert Martin",
  year: 2008,
  genre: "Programming",
  available: true,
});
lib.addBook({
  title: "Design Patterns",
  author: "GoF",
  year: 1994,
  genre: "Programming",
  available: true,
});
lib.addBook({
  title: "Dế Mèn Phiêu Lưu Ký",
  author: "Tô Hoài",
  year: 1941,
  genre: "Văn học",
  available: false,
});
lib.addBook({
  title: "Refactoring",
  author: "Martin Fowler",
  year: 1999,
  genre: "Programming",
  available: true,
});

console.log(lib.getAllBooks().length); // 4
console.log(lib.findByTitle("clean")); // [{ Clean Code }]
console.log(lib.filter({ genre: "Programming", yearFrom: 2000 })); // [{ Clean Code }]
console.log(lib.getAvailableBooks().length); // 3

const stats = lib.getStats();
console.log(stats.total); // 4
console.log(stats.available); // 3
console.log(stats.borrowed); // 1
console.log(stats.genres); // ["Programming", "Văn học"]

lib.borrowBook("Clean Code");
console.log(lib.getAvailableBooks().length); // 2

lib.returnBook("Clean Code");
console.log(lib.getAvailableBooks().length); // 3

// ---- Bộ test nâng cao: tự kiểm tra xử lý lỗi ----
// Thêm sách trùng title+author -> phải throw Error
try {
  lib.addBook({
    title: "Clean Code",
    author: "Robert Martin",
    year: 2020,
    genre: "Programming",
    available: true,
  });
  console.log("FAIL: trung lap khong bi bat");
} catch (e) {
  console.log("OK");
}
// Mượn sách không tồn tại -> phải throw Error
try {
  lib.borrowBook("Sach Khong Ton Tai");
  console.log("FAIL: sach khong ton tai khong bi bat");
} catch (e) {
  console.log("OK");
}
// Mượn sách đã có người mượn (Dế Mèn đang available: false) -> phải throw Error
try {
  lib.borrowBook("Dế Mèn Phiêu Lưu Ký");
  console.log("FAIL: sach da muon khong bi bat");
} catch (e) {
  console.log("OK");
}
// Trả sách đang có sẵn (Design Patterns đang available: true) -> phải throw Error
try {
  lib.returnBook("Design Patterns");
  console.log("FAIL: sach dang co san khong bi bat");
} catch (e) {
  console.log("OK");
}
// Tìm với keyword rỗng -> không crash, trả về tất cả
console.log(lib.findByTitle("").length); // 4
// Filter yearFrom=0 -> 0 là falsy, phải dùng !== undefined không dùng if(yearFrom)
console.log(lib.filter({ yearFrom: 0 }).length); // 4
```

## Bài 2: Class `TestReporter` — Hệ thống báo cáo test Neko QA

Viết class `TestReporter` quản lý kết quả chạy test: thêm kết quả, thống kê, lọc, nhóm theo tag, tìm kiếm, xuất báo cáo.

### Bộ dữ liệu (cho sẵn, KHÔNG SỬA)

```typescript
interface ITestResult {
  testName: string;
  status: "passed" | "failed" | "skipped";
  duration: number; // đơn vị: giây
  errorMessage?: string; // chỉ có khi status === "failed"
  tags: string[]; // 1 test có thể có nhiều tag
}

type TestSummary = {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  passRate: string; // VD: "75.0%"
  avgDuration: string; // VD: "2.30s"
  slowest: string; // VD: "User registration (5.10s)"
};
```

### Yêu cầu

Viết class `TestReporter` với:

1. **`private results: ITestResult[]`** — mảng lưu kết quả test, khởi tạo rỗng `[]`

2. **`addResult(result: ITestResult): void`**
   - Thêm kết quả. Không được thêm nếu `testName` đã tồn tại → `throw Error`.

3. **`getSummary(): TestSummary`**
   - Đếm `total`, `passed`, `failed`, `skipped` bằng vòng lặp.
   - `passRate`: `(passed / (passed + failed)) * 100`, làm tròn 1 chữ số, thêm `"%"`. Nếu `passed + failed = 0` thì trả `"0%"`.
   - `avgDuration`: tổng duration / total, làm tròn 2 chữ số, thêm `"s"`. Nếu `total = 0` thì trả `"0s"`.
   - `slowest`: tên test có duration lớn nhất, format `"TênTest (X.XXs)"`.

4. **`getFailedTests(): ITestResult[]`** — Trả về test có `status === "failed"`.

5. **`getTestsByStatus(status: "passed" | "failed" | "skipped"): ITestResult[]`** — Lọc theo status.

6. **`searchTests(keyword: string): ITestResult[]`**
   - Tìm kiếm không phân biệt hoa thường trong `testName` HOẶC `errorMessage`.
   - Nhớ kiểm tra `errorMessage !== undefined` trước khi `.includes()`.

7. **`getSlowTests(threshold: number): ITestResult[]`** — Test có `duration > threshold`.

8. **`getReportByTag(): { tag: string; total: number; passed: number; failed: number; skipped: number }[]`**
   - Nhóm kết quả theo từng tag (1 test có thể thuộc nhiều tag).
   - Mỗi tag thống kê: tổng số test, passed, failed, skipped.
   - Gợi ý: dùng object `{ [tag: string]: ... }` để nhóm, hoặc vòng lặp lồng.

9. **`exportReport(): string`**
   - Trả về chuỗi báo cáo format (dùng template string):

   ```
   ======== TEST REPORT ========
   Total: X | Passed: X | Failed: X | Skipped: X
   Pass Rate: X%
   Avg Duration: Xs
   Slowest: TênTest (X.XXs)

   --- FAILED TESTS ---
   [FAIL] testName (X.XXs)
      Error: errorMessage
   ============================
   ```

   - Nếu không có test failed thì không in phần `--- FAILED TESTS ---`.

### Kết quả mong đợi

```typescript
const reporter = new TestReporter();

reporter.addResult({
  testName: "Login with valid credentials",
  status: "passed",
  duration: 2.5,
  tags: ["smoke", "login"],
});
reporter.addResult({
  testName: "Login with invalid password",
  status: "failed",
  duration: 1.2,
  errorMessage: "Expected error message not displayed",
  tags: ["login", "validation"],
});
reporter.addResult({
  testName: "Checkout with empty cart",
  status: "failed",
  duration: 3.8,
  errorMessage: "Cart is empty",
  tags: ["checkout", "validation"],
});
reporter.addResult({
  testName: "User registration",
  status: "passed",
  duration: 5.1,
  tags: ["smoke", "registration"],
});
reporter.addResult({
  testName: "Add to cart",
  status: "passed",
  duration: 1.0,
  tags: ["smoke", "cart"],
});
reporter.addResult({
  testName: "Logout",
  status: "skipped",
  duration: 0,
  tags: ["login"],
});

const summary = reporter.getSummary();
console.log(summary.total); // 6
console.log(summary.passed); // 3
console.log(summary.failed); // 2
console.log(summary.skipped); // 1
console.log(summary.passRate); // "60.0%"  (3/(3+2)*100)
console.log(summary.avgDuration); // "2.27s"  (13.6/6)
console.log(summary.slowest); // "User registration (5.10s)"

console.log(reporter.getFailedTests().length); // 2
console.log(reporter.getTestsByStatus("passed").length); // 3
console.log(reporter.searchTests("login").length); // 2
console.log(reporter.searchTests("empty").length); // 1
console.log(reporter.getSlowTests(3).length); // 2

const tagReport = reporter.getReportByTag();
// Phải có 6 tag: smoke, login, validation, checkout, registration, cart
console.log(tagReport.length); // 6

// Tag "smoke": 3 tests (Login valid, User registration, Add to cart), tất cả passed
const smokeTag = tagReport.find((t) => t.tag === "smoke");
if (smokeTag) {
  console.log(smokeTag.total); // 3
  console.log(smokeTag.passed); // 3
  console.log(smokeTag.failed); // 0
}

console.log(reporter.exportReport());

// ---- Bộ test nâng cao: tự kiểm tra xử lý lỗi ----
// Test passed NHƯNG có errorMessage -> searchTests phải tìm trong errorMessage, getFailedTests không tính test passed
reporter.addResult({
  testName: "Search with long timeout",
  status: "passed",
  duration: 12.0,
  errorMessage: "Timeout after 30s",
  tags: ["search", "performance"],
});
console.log(reporter.searchTests("timeout").length); // >= 1
console.log(
  reporter
    .getFailedTests()
    .find((t) => t.testName === "Search with long timeout"),
); // undefined
// Test có tags rỗng -> getReportByTag không crash
reporter.addResult({
  testName: "No tags test",
  status: "passed",
  duration: 0.5,
  tags: [],
});
console.log(reporter.getReportByTag().length); // >= 6
// searchTests("") -> trả về tất cả, không crash
console.log(reporter.searchTests("").length); // 8
// getSlowTests(0) -> tất cả test có duration > 0
console.log(reporter.getSlowTests(0).length); // >= 6
// passRate = passed/(passed+failed), không tính skipped (4 passed, 2 failed -> 66.7%)
const s2 = reporter.getSummary();
console.log(s2.total); // 8
console.log(s2.passRate); // "66.7%"
```
