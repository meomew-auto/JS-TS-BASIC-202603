## Bài 1: Typed config helper — Quản lý config Neko E2E

Trong automation test, selector, URL, timeout, role thường được lưu trong object config. Yêu cầu là khi lấy config, TypeScript phải bắt lỗi nếu truyền sai section hoặc sai key.

### Bộ dữ liệu cho sẵn

```typescript
const APP_CONFIG = {
  env: {
    dev: "https://dev.neko.vn",
    staging: "https://staging.neko.vn",
    prod: "https://neko.vn",
  },
  selectors: {
    loginButton: "#login",
    cartBadge: "[data-test='cart-badge']",
    checkoutButton: "#checkout",
  },
  timeouts: {
    short: 1000,
    medium: 5000,
    long: 15000,
  },
  roles: {
    admin: "ADMIN",
    member: "MEMBER",
    guest: "GUEST",
  },
} as const;
```

### Yêu cầu

1. Tạo các type từ `APP_CONFIG`:
   - `type AppConfig = typeof APP_CONFIG`
   - `type ConfigSection = keyof AppConfig`
   - `type SelectorKey = keyof typeof APP_CONFIG.selectors`
   - `type TimeoutKey = keyof typeof APP_CONFIG.timeouts`
   - `type Role = typeof APP_CONFIG.roles[keyof typeof APP_CONFIG.roles]`

2. Viết hàm generic `getConfigValue`
   - Nhận `section` và `key`.
   - `section` phải là key của `APP_CONFIG`.
   - `key` phải là key nằm trong đúng section đó.
   - Return type phải đúng theo value thật.

   Ví dụ:

   ```typescript
   const devUrl = getConfigValue("env", "dev"); // type: "https://dev.neko.vn"
   const longTimeout = getConfigValue("timeouts", "long"); // type: 15000
   ```

3. Viết hàm `getSelector(key: SelectorKey): string`
   - Trả selector theo key.

4. Viết hàm `getTimeout(key: TimeoutKey): number`
   - Trả timeout theo key.

5. Viết hàm generic `createRoleRecord<V>(defaultValue: V): Record<Role, V>`
   - Tạo object có đủ 3 key: `ADMIN`, `MEMBER`, `GUEST`.
   - Mỗi key có giá trị là `defaultValue`.

6. Viết hàm type guard `isRole(value: string): value is Role`
   - Trả `true` nếu value là một role hợp lệ.

### Kết quả mong đợi

```typescript
console.log(getConfigValue("env", "dev"));
// https://dev.neko.vn

console.log(getConfigValue("timeouts", "long"));
// 15000

console.log(getSelector("checkoutButton"));
// #checkout

console.log(getTimeout("medium"));
// 5000

const permissions = createRoleRecord(false);
console.log(permissions.ADMIN);
console.log(permissions.MEMBER);
console.log(permissions.GUEST);
// false
// false
// false

console.log(isRole("ADMIN"));
console.log(isRole("SUPER_ADMIN"));
// true
// false

// Các dòng sau nếu mở comment thì TypeScript phải báo lỗi:
// getConfigValue("env", "loginButton");
// getSelector("dev");
// permissions.SUPER_ADMIN;
```

## Bài 2: Generic table utilities — Lọc, sort, index đơn hàng Neko Shop

Bạn cần viết một bộ hàm generic để thao tác với mảng object. Các hàm phải dùng `keyof` để chỉ cho phép truyền key hợp lệ, và dùng generic để return type chính xác.

### Bộ dữ liệu cho sẵn

```typescript
const ORDER_STATUS = {
  pending: "pending",
  paid: "paid",
  cancelled: "cancelled",
  refunded: "refunded",
} as const;

type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
type SortDirection = "asc" | "desc";

interface Order {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  tags: string[];
}

const orders: Order[] = [
  {
    id: "o1",
    customer: "An",
    total: 450000,
    status: "paid",
    createdAt: "2026-06-01",
    tags: ["smoke", "vip"],
  },
  {
    id: "o2",
    customer: "Bình",
    total: 120000,
    status: "pending",
    createdAt: "2026-06-03",
    tags: ["new"],
  },
  {
    id: "o3",
    customer: "Cường",
    total: 800000,
    status: "paid",
    createdAt: "2026-06-02",
    tags: ["vip"],
  },
  {
    id: "o4",
    customer: "Dung",
    total: 0,
    status: "cancelled",
    createdAt: "2026-06-04",
    tags: [],
  },
];
```

### Yêu cầu

1. Viết hàm `getField<T, K extends keyof T>(item: T, key: K): T[K]`
   - Lấy giá trị của một field.
   - Return type phải đúng theo key.

2. Viết hàm `pickFields<T, K extends keyof T>(item: T, keys: K[]): Pick<T, K>`
   - Trả về object mới chỉ chứa các field được chọn.

3. Viết hàm `updateField<T, K extends keyof T>(item: T, key: K, value: T[K]): T`
   - Trả về object mới với field được cập nhật.
   - Không mutate object gốc.
   - TypeScript phải bắt lỗi nếu value không đúng kiểu của field.

4. Viết hàm `sortBy<T, K extends keyof T>(items: T[], key: K, direction?: SortDirection): T[]`
   - Trả về mảng mới, không mutate mảng gốc.
   - Sort được field kiểu `number` hoặc `string`.
   - `direction` mặc định là `"asc"`.

5. Viết hàm `groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]>`
   - Nhóm item theo giá trị của field.
   - Key của object kết quả dùng `String(item[key])`.

6. Viết hàm `createIndex<T, K extends keyof T>(items: T[], key: K): Record<string, T>`
   - Tạo object tra cứu nhanh theo field.

7. Viết hàm `summarizeByStatus(orders: Order[]): Record<OrderStatus, { count: number; total: number }>`
   - Phải có đủ key cho mọi status trong `ORDER_STATUS`: `pending`, `paid`, `cancelled`, `refunded`.
   - Với mỗi status, tính số đơn và tổng tiền.

### Kết quả mong đợi

```typescript
console.log(getField(orders[0], "customer"));
// An

console.log(pickFields(orders[0], ["id", "total"]));
// { id: "o1", total: 450000 }

console.log(updateField(orders[0], "status", ORDER_STATUS.refunded).status);
// refunded

console.log(sortBy(orders, "total", "desc").map((order) => order.id));
// ["o3", "o1", "o2", "o4"]

console.log(Object.keys(groupBy(orders, "status")));
// ["paid", "pending", "cancelled"]

console.log(createIndex(orders, "id").o2.customer);
// Bình

const summary = summarizeByStatus(orders);
console.log(summary.paid);
// { count: 2, total: 1250000 }

console.log(summary.refunded);
// { count: 0, total: 0 }

// Các dòng sau nếu mở comment thì TypeScript phải báo lỗi:
// getField(orders[0], "notExist");
// updateField(orders[0], "total", "100000");
// sortBy(orders, "abc");
```
