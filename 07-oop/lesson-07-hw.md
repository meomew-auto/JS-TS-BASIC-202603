### Bài 1: Quản lý danh sách sản phẩm

Tạo class cha `ProductStore` với private field `#products = []`.

Yêu cầu class `ProductStore`:

- Method `addProduct(product)`:
  - Không thêm nếu `id` bị trùng.
  - Không thêm nếu `name` rỗng sau khi `trim()`.
  - Không thêm nếu `category` rỗng sau khi `trim()`.
  - `price` phải lớn hơn 0.
  - `inStock` phải là kiểu boolean.
  - Nếu không hợp lệ, trả về:

```javascript
{
    success: false,
    message: "Lý do lỗi"
}
```

- Nếu hợp lệ, trả về:

```javascript
{
    success: true,
    message: "Thêm sản phẩm thành công"
}
```

- Method `findByName(keyword)`:
  - Tìm sản phẩm có `name` chứa keyword.
  - Không phân biệt hoa thường.
  - Dùng `trim()` cho keyword.
- Method `filterByCategory(category)`:
  - Lọc sản phẩm theo category.
  - Không phân biệt hoa thường.
- Method `getAvailableProducts()`:
  - Trả về danh sách sản phẩm còn hàng.
- Method `getTotalInventoryValue()`:
  - Tính tổng giá trị các sản phẩm còn hàng.
  - Nếu không có sản phẩm nào còn hàng, trả về `0`.

Tạo class con `DiscountProductStore extends ProductStore`:

- Constructor nhận `discountRate`, ví dụ `0.1` nghĩa là giảm 10%.
- Override method `getTotalInventoryValue()`:
  - Gọi `super.getTotalInventoryValue()` để lấy tổng gốc.
  - Trả về tổng sau giảm giá.
- Thêm method `getDiscountInfo()`:
  - Trả về object gồm `originalTotal`, `discountRate`, `discountAmount`, `finalTotal`.

Bài test mẫu:

```javascript
const store = new DiscountProductStore(0.1);

store.addProduct({
  id: "p01",
  name: "  iPhone 15 Pro  ",
  category: "phone",
  price: 29990000,
  inStock: true,
});

store.addProduct({
  id: "p02",
  name: "MacBook Air",
  category: "laptop",
  price: 24990000,
  inStock: true,
});

store.addProduct({
  id: "p03",
  name: "AirPods Pro",
  category: "audio",
  price: 5990000,
  inStock: false,
});

store.addProduct({
  id: "p01",
  name: "Duplicate",
  category: "phone",
  price: 1000,
  inStock: true,
});

store.findByName("iphone");
store.filterByCategory(" PHONE ");
store.getAvailableProducts();
store.getDiscountInfo();
```

Kết quả mong đợi:

- `addProduct()` hợp lệ trả `{ success: true, message: "Thêm sản phẩm thành công" }`
- `addProduct()` trùng `id` trả `{ success: false, message: "Id sản phẩm đã tồn tại" }`
- `findByName('iphone')` trả object `iPhone 15 Pro`
- `filterByCategory(' PHONE ')` trả danh sách có category `phone`
- `getAvailableProducts()` trả 2 sản phẩm còn hàng
- `getDiscountInfo()` trả:

```javascript
{
    originalTotal: 54980000,
    discountRate: 0.1,
    discountAmount: 5498000,
    finalTotal: 49482000
}
```

### Bài 2: Giỏ hàng có mã giảm giá

Tạo class cha `Cart` với private field `#items = []`.

Yêu cầu class `Cart`:

- Method `addItem(item)`:
  - Nếu item cùng tên đã tồn tại, tăng `quantity`.
  - Tên so sánh không phân biệt hoa thường và bỏ khoảng trắng thừa.
  - `name` không được rỗng sau khi `trim()`.
  - `price` và `quantity` phải lớn hơn 0.
  - Nếu không hợp lệ, trả về:

```javascript
{
    success: false,
    message: "Lý do lỗi"
}
```

- Nếu hợp lệ, trả về:

```javascript
{
    success: true,
    message: "Thêm vào giỏ hàng thành công"
}
```

- Method `removeItem(name)`:
  - Xóa item theo tên.
- Method `getSubtotal()`:
  - Tính tổng tiền trước giảm giá.
- Method `applyCoupon(code)`:
  - Nhận mã như `"SALE10"` hoặc `"SALE20"`.
  - Nếu mã hợp lệ, giảm 10% hoặc 20%.
  - Nếu mã không hợp lệ, không giảm.
  - Trả về `true` nếu áp dụng được mã, ngược lại trả về `false`.
- Method `checkout()`:
  - Trả về object gồm `items`, `subtotal`, `discount`, `total`.

Tạo class con `VipCart extends Cart`:

- Constructor nhận `memberName`.
- Override `applyCoupon(code)`:
  - Gọi `super.applyCoupon(code)` trước.
  - Nếu coupon thường không hợp lệ, chấp nhận thêm mã `"VIP30"` để giảm 30%.
- Override `checkout()`:
  - Gọi `super.checkout()` để lấy hóa đơn gốc.
  - Thêm `memberName` và `cartType: "VIP"` vào object kết quả.

Bài test mẫu:

```javascript
const cart = new VipCart("Neko");

cart.addItem({
  name: "Trà sữa trân châu",
  price: 30000,
  quantity: 2,
});

cart.addItem({
  name: "  trà SỮA trân châu  ",
  price: 30000,
  quantity: 1,
});

cart.addItem({
  name: "Trà đào",
  price: 25000,
  quantity: 1,
});

cart.applyCoupon(" vip30 ");
cart.checkout();
```

Kết quả mong đợi:

- `addItem()` hợp lệ trả `{ success: true, message: "Thêm vào giỏ hàng thành công" }`
- `addItem()` nếu `name` rỗng hoặc `price/quantity <= 0` trả `{ success: false, message: "Lý do lỗi" }`
- `applyCoupon(' vip30 ')` trả `true`
- `checkout()` trả:

```javascript
{
    items: [
        { name: 'Trà sữa trân châu', price: 30000, quantity: 3 },
        { name: 'Trà đào', price: 25000, quantity: 1 }
    ],
    subtotal: 115000,
    discount: 34500,
    total: 80500,
    memberName: 'Neko',
    cartType: 'VIP'
}
```
