//abstract class
abstract class Vehicle {
  constructor(
    public brand: string,
    public year: number,
  ) {}
  //concrete methods - CÓ code sẵn , class con dùng luôn
  age(): number {
    return new Date().getFullYear() - this.year;
  }

  info(): string {
    return `${this.brand} - ${this.year} - ${this.age()} tuổi`;
  }

  //abstract method - KO CÓ CODE, class con phải tự viết
  abstract maxSpeed(): number;
}

//KO THỂ KHỞI TẠO INSTANCE HAY OBJECT TỪ ABSTRACT CLASS
// const v = new Vehicle();

class ElectricCar extends Vehicle {
  constructor(brand: string, year: number) {
    super(brand, year);
  }
  maxSpeed(): number {
    return 300;
  }
}

const tesla = new ElectricCar("tesla model 3", 2023);
console.log(tesla.info());

//Ví dụ thực tế
//Ví dụ làm auto cho 10 trang : login, dashboard, cart, checkout...
//mỗi trang cần cso các method ví dụ như navigate() (mở url), takeScreenshot(chụp màn hình)
//get fullUrl (baseURL + path). nhưng mỗi trang lại có title khác nhau, cách kiểm tra isloaded() kahsc nhau
// .nooij dung môi xtrnag khác nhau getMainContent()

// nếu ko có abstract class bạn sẽ phải viết navigate(), 10 lần - mỗi trang 1 lần
/// absstract class giải quyế triệt để vấn đề này: viết 1 lần base page, 10 trang con dùng chung
// còn những phần khác nhau. thì ép mỗi trang tự định nghĩa. thiếu là TS báo l;ỗi , ko lo quên

abstract class BasePage {
  // concrete: có sẵnL class con dùng luôn
  protected baseUrl = "https://autoneko.com";

  constructor(protected path: string) {}

  //concrete method.
  getFullUrl() {
    return `${this.baseUrl}${this.path}`;
  }

  navigate() {
    console.log(`Chuyển tới trang ${this.getFullUrl()}`);
  }

  takeScreenshot(name: string) {
    console.log(`ScreenShot ${name} - ${this.getFullUrl()}`);
  }

  //abstract: class con tự viết
  //mỗi page tải xong có cách kiểm tra loaded riêng
  abstract isLoaded(): boolean;

  //,mỗi page có title riêng
  abstract getTitle(): string;
  abstract getMainContent(): string;
}

//class con
class LoginPage5 extends BasePage {
  constructor() {
    super("/login");
  }
  isLoaded(): boolean {
    console.log("Kieem tra username da hien thi");
    return true;
  }

  getTitle(): string {
    return "Neko -dang nhap";
  }
  getMainContent(): string {
    return "FORM DANG NHAp";
  }
  async login(user: string, pass: string): Promise<void> {
    this.navigate();
    console.log(`nhap username ${user}`);
    console.log(`nhap username ${pass}`);
    this.takeScreenshot("after login click");
  }
}
const loginPage5 = new LoginPage5();
console.log(loginPage5 instanceof BasePage);

console.log(loginPage5.login("neko", "123"));

console.log(loginPage5.getMainContent());

//Thực tế tại sao lại ít regular class (class bịnh thường làm cha)

//ví dụ
class BasePage6 {
  navigate(): void {
    console.log("navigate");
  }
  //
}

class LoginPage6 extends BasePage6 {}
//cos theer new BasePage truc tieo
const badBasePage = new BasePage6();
badBasePage.navigate();
//sai veef mawtj thiet ke
//Baepage tao ra voi muc dich la khuon mau cho cho cac trang web cu the nhu login, dashboard.... bvan tghan no ko dai dien cho 1 trang web that noa ca
// cho new BasePAge - tu la tao ra 1 object 'trab web chung chung" ko phai login, ko phai dasboard ....
//Nguyen tac: 1 class on tai chi de lam ban thiet ke cho class khac thi Nen LA ABstract.

interface PageInterface {
  navigate(): void;
}

class LoginPage7 implements PageInterface {
  navigate(): void {
    console.log("navigate");
  }
}
const loginPage7 = new LoginPage7();
// console.log(loginPage7 instanceof PageInterface);

//2 thằng này làm cha - là 1 cuốc chiến thiết kế
//Interface: " mày phỉa có method X, Y, Z. Tao ko cho code - tự viết đi"
//Absstract: "mày phải có method, X,Y, Z. Nhưng method A, B, C thì tao viết sẵn rồi - dùng free"

//Khi ào interface làm cha (tỏa sáng) trong các tình huống sau
//1. ko có code chung dể chia sẻ - mỗi implement 1 kiểu
// interface DataService<T> {
//   getAll(): Promise<T[]>;
//   getById(id: string): Promise<T>;
// }

// class UserApiService implements DataService<User> {
//   async getAll(): Promise<User[]>;
// }

// class ProductGraphQLService implements DataService<Product> {
//   async getAll(): Prmosse<Product[]>;
// }
// code fetch du lieu cua Userapi va product hoan toan khc nhau
/// ko co gi de tru tuong hoa chung -> INTERFACE la lau chon hop ly
//2. can implement nhieu hio dong = da ke thua

// interface Loggable {}
// interface Configurable {}

// class DatabaseService implements Loggable, Configurable{

// }
//abstract toa sang khi nao ?

///1 . co code chung muon chia se cho con - DAY LA LY DO DAU TIEN chung ta se chon
//2 can state chung (field, private member)
//3 . instanceof - chi check dc khi sung dung abstract

//COMBO; Abstract class + implement interface\
//Taij sao

//Interface -- Vai tro la khai bao voi moi nguoi la; Class nay co the lam duoc nhu ng viec nay

// Ai implements taop phải chạy đc
interface Runnable {
  run(): Promise<void>;
}

//Những hợp đồng phổ quát - có ích vì nhiều họ class khác nhau cùng cần kí hợp đồng đó
//ai implmenet tao phai kiem tra dc ket qua
interface Verifibable {
  verify(): boolean;
}

interface Screenshotable {
  takeScreenshot(name: string): void;
}

//abstract class
//vai tro: cho class con code mien phi, giau chi tiet implement

abstract class BaseTest {
  private startedAt: Date = new Date();
  private result: string[] = [];
  constructor(protected testName: string) {}

  //concrete method - code mien phi, moi test con dung chung
  setUp(): void {
    console.log(`SET UP MO browser, clear cache`);
  }

  tearDown(): void {
    console.log(`Dong browser, don dep...`);
  }

  protected navigate(): void {
    console.log("navigate");
  }

  //concrete method - ghi log test - moi test deu can
  protected logResult(status: "PASS" | "FAIL", detail?: string): void {
    const entry = `[${this.testName}] ${status} ${detail ? ` -${detail}` : ""}`;
    this.result.push(entry);
    console.log(`entry: ${entry}`);
  }
  //concrete method - do thoi gian chay
  protected getDuration(): number {
    return Math.floor(Date.now() - this.startedAt.getTime()) / 1000;
  }
  //chi truy cap trong basetest
  private getInternalConfig(): string {
    return "browser =chromium";
  }

  //abstract: class con phai tu viet
  //moi test co logic execute khac nhau
  abstract execute(): Promise<void>;

  abstract getTestData(): string;
}

class LoginTest
  extends BaseTest
  implements Runnable, Verifibable, Screenshotable
{
  private passed = false;

  constructor() {
    super("Logint test");
  }
  //thoa man base test
  async execute(): Promise<void> {
    console.log("Nahp user name va password");
    this.passed = true;
  }

  getTestData(): string {
    return "username=neko,password=;123";
  }

  //thoa man interface

  async run(): Promise<void> {
    this.setUp();
    await this.execute();
    this.logResult("PASS", `${this.getDuration()}`);

    this.tearDown();
  }

  verify(): boolean {
    return this.passed;
  }

  takeScreenshot(name: string): void {
    console.log(`SCren shot ${name}`);
  }
}

async function runTest() {
  const loginTest = new LoginTest();

  await loginTest.run();
  console.log(`Xac minh ket qua ${loginTest.verify() ? "Đạt" : "trượt"}`);
  loginTest.takeScreenshot("abc");
}

runTest();
//
//lý do 1: Interface - có thể tái sử dụng mà ko cần extends
//Nếu 2 class thuộc 2 hệ khác nhau thì ta nên dùng interface để đáp ứng sự tái sử dụng
class ApiHealthCheck implements Verifibable {
  verify(): boolean {
    return true;
  }
}

//lý do 2: Interface cho phép 1 class có nhiều vai trò
// class CheckoutTest extends BaseTest implements Runnable, Verifibable {

// }

//ly do 3: iinterface giup cho viec mock testing

//reguclass ko thể làm cha tốt nếu 1 tỏng các trường hợp
class BasePage7 {
  baseUrl = "abc.com";
  constructor(protected path: string) {}
  navigate(): void {}

  //abstract isLoaded()
}

class LoginPage8 extends BasePage7 {
  isLoaded(): boolean {
    return true;
  }
}

class CartPage extends BasePage7 {
  addToCart(): void {}
}

///regular class làm cha khi cha đã hoàn chỉnh 100%. tự dùng đc 1 mình, và con chỉ thêm các tính năng chứ ko cần override
class HttpClient {
  constructor(protected baseUrl: string) {}

  async get<T>(path: string): Promise<T> {
    return {} as T;
  }
}

class AuthHttpClient extends HttpClient {
  constructor(
    baseUrl: string,
    private token: string,
  ) {
    super(baseUrl);
  }
  //thêm method mới - cha ko có

  async getWithAuth<T>(path: string): Promise<T> {
    return this.get<T>(path);
  }
}

//cả cha và con đều dùng đọc lập

//cha dùng  1 mình - api test đơn giản ko cần auth
const simpleCleint = new HttpClient("abc");
// await simpleCleint.get("abc");

const authClient = new AuthHttpClient("abc", "abc");

//over-engineering
