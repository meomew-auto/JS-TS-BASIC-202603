function tinhTong2(a: number, b: number): number {
  return a + b;
}

console.log(tinhTong2(3, 4));

//number
let tuoi: number = 25;
tuoi = 20;
//string

let hoTen2: string = "neko";

//boolean

let daXoa: boolean = true;

//null
let chiLaNull: null = null;
//biến này luôn luôn là null -> vì ậy hầu như ko có tác dụng thực tế

// chiLaNull = { name: "neko" });
// union type -> | phân chia giữa 2 loại type
let apiResponse: string | null = null;
apiResponse = "dữ liệu từ server";

//undefined

let chuaGan: string;

//các cách khai báo undeffined ở trong TS
//1. khai báo union
let phone: string | undefined;

console.log(phone);
phone = "abc123";

phone = undefined;

//cách 2: optional param trong function -> dùng dấu hỏi chấm

function chao(name: string, lop?: string) {
  //lúc này lop sẽ touwng dướng với string | undefined
  console.log(`Xin chào ${name}`);
  if (lop) {
    console.log(`Lớp ${lop}`);
  }
}
chao("neko");
chao("neko", "1234");

//cách 3: optional property trong object
interface HocSinh {
  ten: string;
  email?: string;
  // tưogn đương string |undefined
}

let hs: HocSinh = { ten: "neko" };
console.log(hs.email);

let hocSinhDiHoc: HocSinh | null = null;
hocSinhDiHoc = { ten: "Dihoc" };
hocSinhDiHoc = null;

//nếu dữ liệu có sử dụng undefined -> DỮ LIỆU CÓ THỂ CHƯA TỒN TẠI không được truyền/ ko có key
// nếu dữ liệu có sử udnjg null -> TÔI BIẾT BIẾN NÀY, NHƯNG HIỆN TẠI KO có

let tuoi3: number = 30;

let tuoi4 = 30;

let danhSach1 = ["a", "b"];

let maSanPham: string | number;

//Thực tế hay gặp UI là string -> nhưng id torong dtabase/API là number
maSanPham = "SP022";
maSanPham = 1;

//ưgsn dụng api có thể trả về null hoặc data
//null ở đây nghĩa là: đã gọi api rồi nhưng ko có dữ liệu
let apiData: string | null = null;
apiData = "dữ liệu server";

//hàm tìm kiếm có thể thấy hoặc ko tìm thấy
//
type User = { name: string };
//undefined nghĩa là: ko tìm thấy phần tử phù hợp
let userTimDuoc: User | undefined;

userTimDuoc = { name: "abc" };

userTimDuoc = undefined;

function hienThiMaDonHang(orderId: string | number) {
  if (typeof orderId === "string") {
    return orderId.toUpperCase();
  }
  return orderId.toString();
}

//Literal String Union - Chọn trong danh sách cố định
//nghĩa là thay vì string quá rộng ta lieie kê chính xấc giá trị đc phép
type TestStatus = "passed" | "failed" | "skipped" | "pending";

let currentTest: string = "failed";

currentTest = "skipped";

type UserRole = "admin" | "editor" | "viewer";

function loginAs(role: UserRole) {
  console.log("login with", role);
}
loginAs("admin");

//any: Bỏ qua kiểm tra kiểu
//bạn gọi method sai, triyeefn sai. TS vẫn cho qua -> ko khác gì JS
// -> HẠN CHẾ TỐI ĐA, chỉ dùng khi migrate code cũ ->
let duLieuTuUI: any = "admin";

// console.log(duLieuTuUI.toFixed(2));

//unknown - Không biết kiểu, nên phải kiểm tra trước
//unknown cũng nhận đc mọi giá trị giống any, nhưng khác là : TS ko cho dùng trực tếp nếu bạn chưa kiểm tra kiêu

let giaTriTuFile: unknown = "admin@example.com";

if (typeof giaTriTuFile === "string") {
  console.log(giaTriTuFile.toLocaleLowerCase());
}

const browserName = ["chromium"];

const scores: number[] = [8, 9];
scores.push(3);

//mảng hỗn hợp
const csvRow: (string | number | null)[] = ["neko", 25, null, "admin"];

//đừng lạm dụng mảng hỗn hợp. mảng chỉ nên chứa cùng 1 kiểu dữ loieuej

//tuple  - mảng cso cấu trúc cố định
//tuple -> là mảng có só lượng phần tử và kiểu từng vị trí cố định
const coordinate: [number, number] = [10.3, 30.2];
const loginPair: [string, string] = ["admin@em", "123"];
type HeaderPair = [string, string];

const headers: HeaderPair[] = [
  ["Authorization", "Beaer token1123"],
  ["Content-type", "application/json"],
];
//readonly
const testRoles: readonly string[] = ["admin", "editor"];

console.log(testRoles[0]);

//các methodf dùng tỏng array -> thì gióng hệt với JS

type ApiUser = {
  id: number;
  email: string;
  role: "admin" | "viewer";
  enabled: boolean;
};

const usersFromApi: ApiUser[] = [
  {
    id: 1,
    email: "admin@example.com",
    role: "admin",
    enabled: true,
  },
  {
    id: 2,
    email: "viewer@example.com",
    role: "viewer",
    enabled: true,
  },
  {
    id: 3,
    email: "disabled@example.com",
    role: "viewer",
    enabled: false,
  },
];

const emails = usersFromApi.map((user) => user.email);
console.log(emails);

const enabledUsers = usersFromApi.filter((user) => user.enabled);
console.log(enabledUsers);

//Định kiểu cho object

//inline type - kieu truc tiep
const user2: { email: string; password: string } = {
  email: "abc",
  password: "123",
};

//type alias - dat ten shape cho object
//type giup ten shape cua object de tai su dung

//interface

//optional properties
type CreateUserInput = {
  email: string;
  phone?: string;
};

const userA1: CreateUserInput = {
  email: "abc",
};

//định kiêu dữ liệu cho hàm
function cong(a: number, b: number): number {
  return a + b;
}

function taoLoiChao(ten: string): string {
  return `Xin chao ${ten}`;
}

//void = ham ko tra ve gia tri nao co y nghia. giong cai viec lam rat nhieu action nhung ko tra a ket qua

function logStep(message: string): void {
  console.log(`[STEP] ${message}`);
}
//

async function clickButton(slector: string): Promise<void> {}

async function layTieuDe(): Promise<string> {
  return "trang dashboard";
}

function mocChoDoi(selector: string, timeout?: number): void {
  const ms = timeout ?? 5000;
  console.log(`Cho ${selector} toi da ${ms}`);
  // ko truyen thi mac dih la 5000
}

mocChoDoi("abc");
mocChoDoi("abc", 20000);
//type guard
