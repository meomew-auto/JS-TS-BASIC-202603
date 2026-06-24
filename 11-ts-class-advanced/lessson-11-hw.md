# Bài tập tổng hợp TypeScript — Class nâng cao

---

Abstract class `PaymentGateway` — Hệ thống thanh toán Neko Pay

Bạn cần xây dựng hệ thống thanh toán cho Neko Shop. Mỗi cổng thanh toán có cách tính phí khác nhau, nhưng đều có chung quy trình: kiểm tra số tiền, kiểm tra kênh hỗ trợ, tính phí, rồi trả kết quả thanh toán.

Bài này bắt buộc dùng:

- `abstract class` để chứa logic chung.
- Class con kế thừa và hoàn thiện phần riêng.
- `interface` cho logger.
- Composition / Dependency Injection: `PaymentProcessor` nhận danh sách gateway và logger từ bên ngoài.

### Bộ dữ liệu và kiểu dữ liệu cho sẵn

```typescript
type PaymentChannel = "card" | "bank" | "wallet";
type PaymentStatus = "paid" | "failed";

interface IPaymentRequest {
  id: string;
  customer: string;
  amount: number;
  channel: PaymentChannel;
}

interface IPaymentResult {
  id: string;
  provider: string;
  status: PaymentStatus;
  fee: number;
  totalCharged: number;
  message: string;
}

interface ILogger {
  log(message: string): void;
}
```

### Yêu cầu

1. Viết class `MemoryLogger implements ILogger`
   - Có private field `logs: string[]`.
   - `log(message: string): void`: thêm message vào `logs`.
   - `getLogs(): string[]`: trả về bản copy của `logs`.

2. Viết `abstract class PaymentGateway`
   - Có `protected providerName: string`.
   - Constructor nhận `providerName`.
   - Getter `name(): string` trả về `providerName`.
   - Abstract method `supports(channel: PaymentChannel): boolean`.
   - Abstract method `calculateFee(amount: number): number`.
   - Method thường `pay(request: IPaymentRequest): IPaymentResult`:
     - Nếu `request.amount <= 0` → `throw new Error("Số tiền phải lớn hơn 0")`.
     - Nếu gateway không hỗ trợ `request.channel` → `throw new Error("Gateway không hỗ trợ kênh thanh toán")`.
     - Tính `fee = this.calculateFee(request.amount)`.
     - Trả object `IPaymentResult` có:
       - `id`
       - `provider`
       - `status: "paid"`
       - `fee`
       - `totalCharged = amount + fee`
       - `message: "Thanh toán thành công cho {customer}"`

3. Viết 3 class con:
   - `CardGateway extends PaymentGateway`
     - `providerName = "Neko Card"`
     - Chỉ hỗ trợ `channel === "card"`.
     - Phí = `amount * 0.02`, nhưng tối thiểu `5000`.
   - `BankGateway extends PaymentGateway`
     - `providerName = "Neko Bank"`
     - Chỉ hỗ trợ `channel === "bank"`.
     - Nếu `amount >= 10000000` thì phí `0`, ngược lại phí `10000`.
   - `WalletGateway extends PaymentGateway`
     - `providerName = "Neko Wallet"`
     - Chỉ hỗ trợ `channel === "wallet"`.
     - Phí = `amount * 0.01`, nhưng tối đa `20000`.

4. Viết class `PaymentProcessor`
   - Constructor nhận:
     - `gateways: PaymentGateway[]`
     - `logger: ILogger`
   - `process(request: IPaymentRequest): IPaymentResult`
     - Tìm gateway đầu tiên hỗ trợ `request.channel`.
     - Nếu không có gateway phù hợp, trả result failed với message `Không tìm thấy gateway phù hợp`.
     - Nếu có gateway, gọi `gateway.pay(request)`.
     - Nếu thanh toán thành công, log `[PAID] {id} by {provider}`.
     - Nếu có lỗi, bắt lỗi và trả result failed:
       - `provider` là tên gateway nếu tìm thấy.
       - `fee = 0`, `totalCharged = 0`.
       - `message` là message lỗi.
       - log `[FAILED] {id}: {message}`.
   - `processMany(requests: IPaymentRequest[]): IPaymentResult[]`
     - Dùng vòng lặp `for...of` xử lý từng request.
   - `getPaidTotal(results: IPaymentResult[]): number`
     - Cộng `totalCharged` của các result có `status === "paid"`.
   - `getFailedMessages(results: IPaymentResult[]): string[]`
     - Trả về mảng chuỗi dạng `{id}: {message}` cho các result failed.

### Kết quả mong đợi

```typescript
const logger = new MemoryLogger();
const processor = new PaymentProcessor(
  [new CardGateway(), new BankGateway(), new WalletGateway()],
  logger,
);

const requests: IPaymentRequest[] = [
  { id: "o1", customer: "An", amount: 500000, channel: "card" },
  { id: "o2", customer: "Bình", amount: 12000000, channel: "bank" },
  { id: "o3", customer: "Cường", amount: 2500000, channel: "wallet" },
  { id: "o4", customer: "Dung", amount: -100000, channel: "card" },
];

const results = processor.processMany(requests);

console.log(
  results.map(
    (r) => `${r.id}:${r.provider}:${r.status}:${r.fee}:${r.totalCharged}`,
  ),
);
// [
//   "o1:Neko Card:paid:10000:510000",
//   "o2:Neko Bank:paid:0:12000000",
//   "o3:Neko Wallet:paid:20000:2520000",
//   "o4:Neko Card:failed:0:0"
// ]

console.log(processor.getPaidTotal(results));
// 15030000

console.log(processor.getFailedMessages(results));
// ["o4: Số tiền phải lớn hơn 0"]

console.log(logger.getLogs().length);
// 4
```
