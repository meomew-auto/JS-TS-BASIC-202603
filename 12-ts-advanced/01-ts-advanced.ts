let myString: string;
myString = "dev";
myString = "prod";

//kiểu literal type (khắt khe)
let myEnv: "dev";
myEnv = "dev";

//redd, yelow, thay vi cho phep string()-> co the go nham
//thi ta dinh nghi chi chap nhan 3 chu cu the nay thoi
type TrafficLight = "red" | "yellow" | "green";

function checkLight(color: TrafficLight) {
  if (color === "red") {
    console.log("dung lai");
  }
}

checkLight("green");

const soNam: number = 5;

//dung as de noi voi TS: hay coi 1 bien duoi day la string di
const soNamNew = soNam as unknown as string;

///Trường hợp sử dụng
//Th1; nhận diện dữ liệu từ hộp đen
//
interface UserData {
  id: number;
  email: string;
}

// const apiResponse: any = await fetchUserData();
//ko biet dc kieu du lieu dau ra la gi, -> coi la any
//de ep thang ts biet kieu dw lieu de chung ta co the co goi y khi code
//
// apiResponse.
// const user = apiResponse as UserData
// user.id

//cos sự khác nhau giữa :Type và as Type là 2 thứ khác nhau về mặc cú [há]
//:Type -> const tenBien:UserData = apiResponse
//-> TYPE chỉ dùng khi khai báo biến (Có tên biến)

//as type -> đùng được ở bất kì có giá trị (ko cần tên)
// (apiResponse as userData).email
//renderUser(await fetchUserData() as UserData)
//(await fetchUserData() as UserData).email
//ĐÂY LÀ VÍ DỤ GIẢ ĐỊNH fetchUserData() trả về any (fetch(), axios().get() ko tự động có type)
/// nếu hàm đã cso kiểu trả về rõ ràng (Promise<userdata>) ko cần gọi as type script đã biết kiểu từ đâu

//Dom/browser API, thư viện thứ 3 ko có type, type sai,

//TH2: as const - Hóa đa dữ liệu

const config = {
  method: "POST",
  timeout: 5000,
};
//Rủi ro có thể bị gán lại thành giá trị sai logic
config.method = "GET";

//Ta sẽ dùng as CONST  -> chúng ta sẽ biến kiểu dữ liệu thành literal type

const configStrict = {
  method: "POST",
  timeout: 5000,
} as const;

//typeof và keyof
//chỉ trong TS sẽ có 2 thế giới song song
//Value space(thế giới thật): các biến const, let, hàm function, đốit tượng {}.
//type space (bản vẽ) -> thế giới kiểu: chỉ tồn tại trong TS (gọi là type, interface)
//để kết nối 2 thế giới này -> type script dùng typeof
//type of trong thế giới thật (JS)
const user = { name: "neko" };
console.log(typeof user);

//typeof ở trong thế giới kiểu TS
//nó đóng vai trò là cây cầu giúp scan 1 biến ở thế giới thật để tạo ra bản vẽ (type) tương ứng

// type UserType1 = {
//   name: string;
// };
type UserType = typeof user;
//ko thể dùng type gán bằng const đc bắt buộc phải dùng cấu nối là type
//JS/TS. hàm (function) cũng là 1 biến bt (first class citizen)

function tinhTong(a: number, b: number) {
  return a + b;
}

type MyType = typeof tinhTong;

//keyof: chỉ tồn ở thế giới kiểu (type space)
//lấy ra danh sách các keys của 1 type

type Product2 = {
  id: number;
  price: number;
};

type ProductKeys = keyof Product2;
//-> "id" | "price"

const COLORS = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
} as const;
//Mục tiêu là muốn tạo ra 1 type ColorName = "red"|"green"|"blue"
//combo 2 bước
//dùng type of -> biến value Colors thành type
type ColorsType = typeof COLORS;

//B2 -> key of
type ColorName = keyof ColorsType;

//viết gộp combo
type ColorKey = keyof typeof COLORS;
//bám dính vào object -> object thay đổi là type sẽ update key theo

// type ColorKey2 = "red" | "green" | "blue" | "yellow";

//Ý nghĩa
//selector và test data -> thay đổi liên tục ->

const LoginPage = {
  userName: "#user222213234",
  password: "#pass",
  submitBtn: "#login-btn",
} as const;

type LoginField = keyof typeof LoginPage;

async function fill(field: LoginField, value: string) {
  console.log(` Fill ${LoginPage[field]}, ${value}`);
}

fill("userName", "neko123");

//quản lý danh sách api endpoint
const API_ROUTES = {
  LOGIN: "/api/v100/auth/login",
  REGISTER: "/api/auth/register",
  PROFILE: "/api/auth/profile",
} as const;

type ApiRoutesType = typeof API_ROUTES;
//Nhiều trường hợp để chúng ta tùy biến
//THA: lấy danh sách key (LOGIN|REGISTER)
type RouteKey = keyof typeof API_ROUTES;

//THB mình muốn lấy danh sách value ('/api/auth')
// biến kiểu dữ liệu -> thế giới kiểu qua type of

// layas keyof typeof của API_ROUTES -> bộ key

//từ bộ key -> chúng dùng để tra ra giá trị của object -> LẤY RA VALUE TƯƠNG ỨNG
type RoutePath = (typeof API_ROUTES)[keyof typeof API_ROUTES];
//typeof OBJ[keyof typeof OBJ]
//Lợi ích
function goTo(path: RouteKey) {}

goTo("LOGIN");

//GENERIC TYPE
function boSoVaoHop(x: number): number {
  return x;
}

function boStringVaoHop(x: string): string {
  return x;
}

function boCaiGiCungDuoc(x: any): any {
  return x;
}

//Sinh ra 1 kiểu là generic<T> -> tạo ra 1 cái biến đại diẹn cho TYPE(thương đặt tên là T)
//nó hoạt động như sau
//Người dùng ném vào type gì
//hàm sẽ ghi nhớ type đó là T
//hàm trả về kết quả cũng là T

function caiHopThanKy<T>(data: T): T {
  return data;
}

const so = caiHopThanKy(100);

const chu = caiHopThanKy("abc");
chu.toUpperCase();

//cú pháp generic
//trong function (arrow function) thì generic đặt trước dấu ngoặc tròn
// function getFirstItem<T>
const getFirstItem = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

const n1 = getFirstItem(["1", "2", "3"]);
const n2 = getFirstItem([4, 5, 6]);

//generic trong interface (rat hay dung trong API)

interface ApiResponse<Data> {
  status: number;
  message: string;
  data: Data;
}

//dinh nghia data cu the
interface User {
  id: number;
  name: string;
}
interface Product {
  sku: string;
  price: number;
}

//su dung
const userRes: ApiResponse<User> = {
  status: 200,
  message: "Success",
  data: {
    id: 1,
    name: "Tung",
  },
};
const productUser: ApiResponse<Product> = {
  status: 200,
  message: "Success",
  data: {
    sku: "IP15",
    price: 300,
  },
};

//generic trong class ()
//class TenClass<T>{
// }

//  status: number;
//   message: string;
//   data: User;
// }

//Còn generic trong type cú pháp tương tự với interface , nhưng thường dung cho các cấu trúc dữ liệu đơn giản
//ví dụ nhu ưphaan trang, hoặc các cặp giá trị

type PaginatedList<T> = {
  items: T[];
  total: number;
  page: number;
};

type Student = { id: number; name: string };

const studentList: PaginatedList<Student> = {
  items: [{ id: 1, name: "tung" }],
  total: 20,
  page: 1,
};

//generic constrainst (ràng buộc)
/// mình muốn kiểu T phải thỏa mãn điều kiện nào đó sẽ viết thêm extends

// function logLength<T>(arg: T) {
//   ///
//   console.log(arg.length);
// }
//giải pháp -> extends để ra lệnh "T là cái gì cũng đc, miễn là phải có thuộc tính length"

interface CoDoDai {
  length: number;
}

function logLength<T extends { length: number }>(arg: T) {
  console.log(arg.length);
}
logLength("Hello");
logLength([1, 2]);
logLength({ length: 2, value: "abc" });

function inHoa<T extends string>(s: T) {
  return s.toUpperCase();
}

type RESULT = "PASS" | "FAIL" | "SKIP";

function ghiKetQua<T extends RESULT>(status: T) {
  console.log(status);
}

// ghiKetQua('')
//T extends X = " bất kì giá trị nào thuộc kiểu T đều phải được dùng ở chỗ cần kiểu X" tức là T là 1 tập CON của X
function xuLy<T extends { id: number } & { name: string }>(item: T) {
  console.log(item.id);
  console.log(item.name);
}

//Genereic mặc định (Default Tyype)
//ý ngĩa: nếu người gọi ko chỉ định T, thì coi như T là kiểu mặc định này.
//nó giúp mình vừa giữ đc tínhlinh hoạt của generic, vừa ko bătgs người dùng phảio gõ type ở trường hợp phổ biến

interface StorageBox<T = string> {
  item: T;
}

const box1: StorageBox = { item: "hello" };

const box: StorageBox<number> = { item: 2 };

//generic với nhiều tham số
//thực tế. 1 hàm hoặc 1 type thường sẽ giữ nhiều mối hiệu kiểu cùng lúc
// dữ liệu đầu vào 1 kiểu, dữ liệu đầu ra kiểu khác
//res thành công trả về user, lỗi trả về api error
// -> lúc nafy ta dung fnhieefu tgham soso <T, U>, <TInput, TOutput>, <TData, TError>
//ví dụ

//tạo 1 hàm makePair -> nhạn 2 giá trị bất kì và trả về kiểu tuple [first, second]:
//Ts phải nhớ vị trí thứ nhất 1 kiểu gì, và ví trí t2 là kiểu gì

function makePair<TFirst, TSecond>(
  first: TFirst,
  second: TSecond,
): [TFirst, TSecond] {
  return [first, second];
}

const pair1 = makePair("hello", 123);

console.log(pair1[0].toUpperCase());
console.log(pair1[1].toFixed(2));

const pair2 = makePair(true, { id: 1, name: "neko" });

console.log(pair2[0] === true);
console.log(pair2[1].name);

//API tra ve thanh cong hoac that bai

interface ApiError {
  code: number;
  message: string;
}

type ApiSuccess<Tdata> = {
  success: true;
  data: Tdata;
  error: null;
};

type ApiFailure<TError> = {
  success: false;
  data: null;
  error: TError;
};

type ApiResult<TData, TError = ApiError> =
  | ApiSuccess<TData>
  | ApiFailure<TError>;

//Api dang nhap

interface User3 {
  id: number;
  email: string;
  role: "admin" | "user";
}

interface LoginError {
  field: "email" | "password";
  reason: string;
}

const sucessRes: ApiResult<User3, LoginError> = {
  success: true,
  data: { id: 1, email: "2", role: "admin" },
  error: null,
};

const failedRes: ApiResult<User3, LoginError> = {
  success: false,
  data: null,
  error: {
    field: "email",
    reason: "sai email",
  },
};

function printLoginResult(result: ApiResult<User3, LoginError>) {
  if (result.success) {
    //Ts biết result.data là user
    console.log(result.data.role);
    console.log(result.data.id);
  } else {
    console.log(result.error.reason);
  }
}

//Record<K, T>
