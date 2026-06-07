//khai báo interface

interface UserTest {
  id: number;
  name: string;
  email: string;
  //optional - co hay ko deu OK
  age?: number;
  // readonly - gan 1 lan, k dc sua
  readonly createdAt: Date;
}
//su dung

const user: UserTest = {
  id: 1,
  name: "neko",
  email: "123@mgail.com",
  createdAt: new Date(),
};

function greet(user: UserTest): string {
  return `Xin chao ${user.name}, email: ${user.email}`;
}

//Khai bao method o tgrong interface
interface Calculator {
  //C1: method short hand(pho bien nhat nene dung)
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;

  //C2: arrow function
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

const calc: Calculator = {
  //   add: (a, b) => a + b,
  //   subtract: (a, b) => a - b,
  add(a, b) {
    console.log("abc");

    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

//Nhwng minh cung co the implement ngc lai VAN HOP LE

const calc2: Calculator = {
  //   add: (a, b) => a + b,
  //   subtract: (a, b) => a - b,
  add: (a, b) => a + b,
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide: (a, b) => a / b,
};

//
interface UserService {
  baseUrl: string;

  //methods
  getUser(id: number): Promise<{ name: string; email: string }>;
}

const userService: UserService = {
  baseUrl: "http",

  async getUser(id) {
    return {
      name: "222",
      email: "123",
    };
  },
};

//Extends
//Tạo interface con từ cha, kế thừa toàn bộ thuộc tính và thêm cái omiws
//kế thừa đơn
interface User2 {
  id: number;
  name: string;
}

interface Admin extends User2 {
  role: "admin";
  permission: string[];
}

//Admin co tat ca id, name, role, permission
const admin: Admin = {
  id: 1,
  name: "abc",
  role: "admin",
  permission: ["ab,", "c"],
};

//kees thua da
interface HasTimeStamp {
  createdAt: string;
  updatedAt: string;
}

interface HasSoftDelete {
  deletedAt: string | null;
  isDeleted: boolean;
}

interface SuperAdmin extends Admin, HasTimeStamp, HasSoftDelete {
  secrectKey: string;
}

// const superAdmin: SuperAdmin = {};

//Khi interface con khai bao lai 1 key đã có ở cha, TS bát buộc kiểu mới phải tương thích (gán được) với kiểu cha.
//Hay lad bạn chỉ đc thu hẹp kiểu, ko đc đỏi sang kiểu khác

interface Base {
  id: number;
  status: string;
}

// interface Broken extends Base {
//   id: string;
// }

interface Narrowed extends Base {
  id: 1 | 2 | 3;
  status: "active" | "off";
}

//
//Cách sử dụng interface extends thực tế
/// MÔ tả data - api entities ké thừa nhau

interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface User4 extends BaseEntity {
  name: string;
  email: string;
}

interface Product extends BaseEntity {
  title: string;
  price: number;
}

async function fakeGetUser(id: number): Promise<User4> {
  return {
    id,
    createdAt: "abc",
    updatedAt: "abc",
    name: "1",
    email: "fakeuseremail",
  };
}

async function runTest() {
  const user = await fakeGetUser(1);
  console.log(user.email);
}
runTest();

//Best practice . Kết hợp interface làm hợp đồng, class implement

interface PageObject {
  url: string;
  goTo(): Promise<void>;
  isLoaded(): Promise<boolean>;
  //   takeScrenshot(name: string): Promise<void>;
}

//page()
class FakeBrowser {
  async open(url: string) {
    console.log(`Mo ${url}`);
  }
}

//implements su dung trong class neu muon su dung interface
class BasePage implements PageObject {
  url = "/";
  constructor(protected browser: FakeBrowser) {}

  async goTo() {
    await this.browser.open(this.url);
  }

  async isLoaded() {
    return true;
  }
  //   async takeScrenshot()
}

//Page ke thua code tu basePage (class extends) va gian tiep tuan theo PageObject interface
class LoginPageObj extends BasePage {
  url = "/login";

  async isLoaded() {
    console.log("Kiem tra form login ");
    return true;
  }
}

class ProductPageObj extends BasePage {
  url = "/login";
}

//Pattern nay ket hop 3 vai tro , moi cai giai quyet 1 van de khac nhau
// interface PageObject -> vai tro hop dong -> bat buoc moi Page phai co url, goTo, isload
//class BasePage ->code dung chung -> viet 1 lan logic lap lai go to
// class extends tu basepage -> page cu the -> dung lai code chung + overide hanh vi

/// sẽ đảm bảo 3 lợi ích lớn khi làm POM cho suite lớn
/// 1. interace đảm bảo tính nhất quán -> KO PAGE nào quên method

///class ProductPage extends BasePage (thieu isload)
// -> nhờ hợp đồng này, cả team chắc chắn page nào cũng có đủ method chuẩn
//Bỏ code lặp.  mọi page ko cần viết lại hàm goto và isloaded
/// khi hợp đồng thay đổi, TS sẽ báo hết chỗ cần sửa, ví dụ thêm method
// QUY TẮC: intetface lo phần "phải có gì" (an toàn kiểu, thồng nhất team) . còn class extends lo phần (làm như thế nào ) -> tái sử dụng code

//Declaration mergin - gộp khai báo (ĐỘC QUYỀN CHỈ CÓ Ỏ INTERFACE)
//khi khai báo 2 interface cùng tên, TS sẽ tự động gộp lại thành 1

interface TestContext {
  baseUrl: string;
}

interface TestContext {
  authToken: string;
}

const ctx: TestContext = {
  baseUrl: "abc",
  authToken: "bv",
};

//Chú ý 1 class imple,ent nhiều interface
interface Loggable {
  log(): void;
}

interface Serializable {
  toJSON(): string;
}

class ApiService implements Loggable, Serializable {
  log() {
    console.log("abc");
  }
  toJSON() {
    return "abc";
  }
}

const api = new ApiService();
api.log();

type Email = string;
type Age = number;
type User5 = { name: string; email: Email; age: Age };

let UserId: User5 = {
  name: "abc",
  email: "abc1",
  age: 12,
};

//Độc quyền của type: Alias cho function đơn lẻ

type MathFn = (a: number, b: number) => number;

const add: MathFn = (a, b) => a + b;

console.log(add(3, 5));

// type kiểu function rất hay sử dụng trong callback function,
//call back types
type OnSuccess = (data: { id: number; name: string }) => void;

type OnError = (error: Error) => void;

type ApiCallBack = {
  onSuccess: OnSuccess;
  onError: OnError;
};

function fetchUser(id: number, callBack: ApiCallBack) {
  try {
    callBack.onSuccess({ id, name: "neko" });
  } catch (err) {
    callBack.onError(err as Error);
  }
}

fetchUser(1, {
  onSuccess: (data) => console.log(`co: ${data.name}`),
  onError: (err) => console.log(err.message),
});

//Union Types
///day la thu interface ko the lam dc
type Status = "active" | "inactive";

type ID = string | number;

type TestStatusResult = "passed" | "failed" | "skipped";

function getStatusResult(status: TestStatusResult): string {
  switch (status) {
    case "passed":
      return "passsss";
    case "failed":
      return "failedddddd";
    case "skipped":
      return "skippped";
  }
}

//gộp kiểu (intersection type &)

// dùng gộ nhiều type thành 1
// ví dụ
type User6 = {
  id: number;
  name: string;
};

type HasTimeStamp2 = {
  createdAt: string;
};

type AdminUser = User6 &
  HasTimeStamp2 & {
    role: "admin";
    perrmission: string[];
  };

//   const admin: AdminUser = {

//   }

//Khac key
type A1 = { id: string };
type B1 = { email: string };
type C1 = A1 & B1;

//trung key + cung kieu
type A2 = { id: number };
type B2 = { id: number };

type C2 = A2 & B2;

//trung key + khac kieu
//tranh trường hợp này
type A3 = { id: string };
type B3 = { id: number };
type C3 = A3 & B3;
//type cửa thằng c3 -> kiểu never => string & number = never

// const c3: C3 = { id: "1" };
interface IA {
  id: number;
}
interface IB {
  id: string;
}
// interface IC extends IA, IB {}

// Casc kiểu chỉ type làm được
//đây là nưuhng thứ interface ko thể mô tả
//primitve alias
type ID2 = string | number;

//tuple
type Coordinate = [number, number];

//function type
type CallBack = (error: Error | null, data: string) => void;


//QUY TẮC CHỌN 
//CÂU HỎI DUY NHẤT: MÌNH ĐANG mô tả 1 object shape, hbay 1 thứ khác

// LÀ OBJECT SHAPE (object. class) -> DÙNG INTERFACE (mặc định) 

//Ko phải object shape ( -> bát buộc dùng type
//union type: 
//tuple
//function call back
//Partial. Pick . Omit
//Trong typescipt handbook 

//Với object shape đừng quá lo về viehejc chọn sai -> interface và tyype gần như thay thế đc cho nhau
//chỉ có nhóm //union type: 
//tuple
//function call back
//Partial. Pick . Omit => BẮT BUỘC TYPE