//extends - is - a
//DOg is animal - > ke thua dac tinh va hanh vi
class Animal {
  eat() {
    console.log("eating");
  }
}

class Dog extends Animal {}

//has - a co 1 dung nhu nao
class Engine {
  start() {
    console.log("no may");
  }

  stop() {
    console.log("duing may");
  }
}

class Car {
  //car chứa động cơ - > dùng như công cụ bên trong class
  private engine = new Engine();

  drive() {
    this.engine.start();
    console.log("driving");
  }
}
const car = new Car();
car.drive();

//vấn đề 1: Đa kết thừa - Con vừa muốn gióngc ha A, vuiawf muốn giống B
class FlyingAnimal extends Animal {
  fly() {
    console.log("flying");
  }
}
class SwinmmingAnimal extends Animal {
  swimming() {
    console.log("swimming");
  }
}

//Tôi muốn dùng vịt vừa biết bay vừa biết bơi
// class Duck extends FlyingAnimal, S
//Vấn đề 2: Tight coupling - Bị lệ thuộc chặt vào cha < sửa cha , con chết theo

class BaseTest2 {
  setup() {
    console.log("opening browser...");
    //ngay b
    ///team muon thang setup nhan them 1 tham so vi du la env. de setup theo moi truong
    //setup(env:string) -> TAT CA CLASS CON OVERRIDE DEU PHAI SUA THEO ->
  }
}

class LoginTest2 extends BaseTest2 {
  setup() {
    super.setup();
    console.log("abc");
  }
}

//Vấn dề 3: Override lỡ tay, -. cha gẫy
//class cha có 1 method gọi nhiều method con -> class con override 1 mthod nhưng quên gọi super, làm dứgt chuôi logic cua cha
//ma compile vẫn ok _>

abstract class BaseTest3 {
  async run(): Promise<void> {
    console.log(`Running ${this.getTestName()}`);
    this.setup();
    await this.execute();
    this.teardown();
  }
  setup(): void {
    console.log("khoi tao browser");
    console.log("khoi tao context");
    console.log("auth token load");
  }
  teardown(): void {
    console.log("browser dong");
  }

  abstract getTestName(): string;
  abstract execute(): Promise<void>;
}
class LoginTest3 extends BaseTest3 {
  getTestName(): string {
    return "Login test";
  }

  //override setup de them buoc login truoc
  //
  setup(): void {
    // super.setup();
    console.log("Pre login. set auth cookie");
  }

  async execute(): Promise<void> {
    console.log("fill username;");
    //await page.fill()
    //page nay underfinded
    //thuc te se fail -> boi vi chung ta se ko co browser (hay trinh duyet de chay boi vi thieu buoc
    // setup tu thang cha
  }
}

async function runtest() {
  const test = new LoginTest3();
  await test.run();
}

//composition se ly ngon - vi ko co super, ko co override, ko co ke thua. moi module doc lap ro rahng

// interface Flyable {
//   fly(): void;
// }
// interface Swimmable {
//   swim(): void;
// }

// class Duck implements Flyable, Swimmable {
//   fly(): void {}
// }

//giai quyet bang composition
//Đa kế thừa : Duck vừa chứa khả năng biết bay và bơi (bao nhiêu module cũng đc)
//Tight coupling: _. Sửa flyabiblity -> chỉ ảnh hưởng tới fly -> ko ảnh hưởngt tới duck hay flyAbility
//ko có override -> ko lo lỡ tay phá code của cha
class FlyAbility {
  fly() {
    console.log("flying");
  }
}

class SwimAbility {
  swimming() {
    console.log("swimming");
  }
}

class Duck {
  private flyAbility = new FlyAbility();
  private swim = new SwimAbility();

  fly() {
    this.flyAbility.fly();
  }
}

class Eagle {
  private fly = new FlyAbility();
}

//thay vì nhồi nhét mọi thứ vào 1 base page khổng l rồi bắt mọi page kết thừa , ta sẽ tách từng khả năng thành 1 helper riêng
//Mỗi page object chứa (has - a) các helper nó cần

//Các helper cần thiết - mỗi cái lo 1 việc

class NavigationHelper {
  constructor(private baseUrl: string) {}

  goTo(path: string) {
    console.log(`Dieu huong ${this.baseUrl}${path}`);
  }
}

class ScreenShotHelper {
  capture(name: string) {
    console.log(`Chup man hinh ${name}.png`);
  }
}

class LoginPage9 {
  //page Tu tao helper cua minh
  private nav = new NavigationHelper("https://autoneko.com");

  //tháng sau ta cần test trên staging
  // new NavigationHelper("stg/https://autoneko.com");

  private scr = new ScreenShotHelper();
  async login(username: string, password: string): Promise<void> {
    this.nav.goTo("/login");
    console.log(`Nhap username: ${username}`);
    console.log(`Nhap password: ${password}`);
    this.scr.capture("after-login");
  }
}

class ProductPage {
  private nav = new NavigationHelper("https://autoneko.com");

  async openProduct(id: number): Promise<void> {
    this.nav.goTo(`/product/${id}`);
    console.log(`Da mo sna pham ${id}`);
  }
}

const loginPage9 = new LoginPage9();

//Dependency injection
//tiêm phụ thuộc  - thay vì class tự tạo thứ nó cần (dependency), nó nhận từ bên ngoài đưa vào
//3 yếu DI
//Dependency; Thứ class cần đeer hoạt động
//injector: Người/tạo ra dependency để dưau cho class ()
//consumer: class NHận dependency và sử dụng
//Nhược điểm composition
//1 ko test độc lập được. vì loginpage8 tự new dependency bên trong
//2. ko swap đc -muối đổi implementation phải sửa code -> mỗi lần đổi env/ loại navigation -> sửa code
// -> mỗi lần sửa phải test lại toàn bộ
//3. tight coupling - moij su thay doi cua helper lan vao page -> dan toi moi page phai sua theo

//cách nhận chúng ta sẽ thường nhận qua thằng interface (abstraction), ko phải class cụ thể

//Viết lại ví dụ trên  = DI
// B1. Định nghĩa interface - đây là dependency
interface INavigation {
  goTo(path: string): void;
}

interface IScreenshot {
  capture(name: string): void;
}

//B2: implement interface - day la nhung thu se dc inject -> injector

class RealNavigation implements INavigation {
  constructor(
    private baseUrl: string,
    private browserType: string,
  ) {}

  goTo(path: string) {
    console.log(`Dieu huong ${this.baseUrl}${path}`);
  }
}

class RealScreenshot implements IScreenshot {
  capture(name: string) {
    console.log(`Chup man hinh ${name}.png`);
  }
}

//Testing: unittest - mocktesting (FE BE)
//ko cần browser, ko cần DOM, ko cần lệ thuộc
class MockNavigation implements INavigation {
  goTo(path: string): void {
    console.log("mock");
  }
}
class MockScreenShot implements IScreenshot {
  capture(name: string) {
    console.log(`Chup man hinh ${name}.png`);
  }
}

//B3: class nhận interface - Đây là consumer
class LoginPage10 {
  //Nhận interface - ko phải class cụ thể
  // LoginPage10 ko biết và ko cần biết nav, src là REAL hay MOCK
  constructor(
    private nav: INavigation,
    private scr: IScreenshot,
  ) {}

  async login(username: string, password: string): Promise<void> {
    this.nav.goTo("/login");
    console.log(`Nhap username: ${username}`);
    console.log(`Nhap password: ${password}`);
    this.scr.capture("after-login");
  }
}

//sử dụng

const realLogin = new LoginPage10(
  new RealNavigation("http/...", "chrome"),
  new RealScreenshot(),
);

const mockLogin = new LoginPage10(new MockNavigation(), new MockScreenShot());

///Tại sao DI giải quyết cả 3 vấn dề:

// Vấn dề 1: ko test độc lập đc -> inject mock
//Vấn dề 2: ko swap đc ->

// const stagingPage = new LoginPage10(
//   new RealNavigation("https://staging.com"),
//   new RealScreenshot(),
// );
// co
// nst mobilePage = new LoginPage10(new MobilePage())
//vd3: tight coupling

//TRONG ts kiểu dữ liệu của 1 tham số có thể là interface, type alias, hoặc class

interface ILogger {
  log(msg: string): void;
}

abstract class AbsLogger {
  abstract log(msg: string): void;
}

class Logger {
  log(msg: string) {
    console.log(`Default`);
  }
}

class ConsoleLogger implements ILogger {
  log(msg: string): void {
    console.log("Console log");
  }
}

class FileLogger implements ILogger {
  log(msg: string): void {
    console.log("file log");
  }
}

class UserService {
  constructor(private logger: ILogger | AbsLogger | Logger) {}
}
new UserService(new ConsoleLogger());
new UserService(new FileLogger());
//TS dùng kiểu cấu trúc - nó ko quan tâm thằng logger đc khai báo là interface, abstractr, hay class thường

// nó chỉ quan tâm object truyeefn vafo cos method la log(msg:string): void ko -> co hop le
//tính đa hình nền tảng của DI - . constructor có thể nhận bấtg kì object nào thảo mãn cái shape đấy
//khi gọi tới thằng class -> phụ thuộc vào thằng đc tiêm vào
//goi abstract ,hanh vi quyet dinh lucs run time

//ví dụ interface + inheritance + composition + DI

//Interface - Dependency

interface IHttpClient {
  get(path: string): Promise<string>;
  post(path: string, body: string): Promise<string>;
}

interface IValidator {
  checkStatus(response: string, expected: string): boolean;
  checkContains(response: string, keyword: string): boolean;
}

interface IAuth {
  login(user: string): void;
  logout(): void;
  getAuthHeader(): string;
}

//Implementation - injector
class RealHttpClient implements IHttpClient {
  constructor(private baseUrl: string) {}
  async get(path: string): Promise<string> {
    console.log(`Get ${this.baseUrl}${path}`);
    return `{"status": "ok"}`;
  }

  async post(path: string, body: string): Promise<string> {
    console.log(`POST ${this.baseUrl}${path}`);
    return `{"id":1, "created":true}`;
  }
}

class RealValidator implements IValidator {
  checkStatus(response: string, expected: string): boolean {
    const ok = response.includes(`"status":"${expected}"`);

    return ok;
  }

  checkContains(response: string, keyword: string): boolean {
    const ok = response.includes(keyword);
    return ok;
  }
}

class RealAuth implements IAuth {
  private token: string | null = null;

  login(user: string): void {
    this.token = `token-${user}-xxx`;
  }
  logout() {
    this.token = null;
    console.log("logged out");
  }
  getAuthHeader(): string {
    return this.token ? `Bearer ${this.token}` : "Anonymus";
  }
}

//inheritance: abstract class

abstract class BaseApiTest {
  constructor(
    protected testName: string,
    protected http: IHttpClient,
    protected validator: IValidator,
    protected auth: IAuth,
  ) {}

  //concreet method
  async run(): Promise<boolean> {
    console.log(`Running ${this.testName}`);
    this.setup();
    const result = await this.execute();
    this.teardown();
    return result;
  }

  protected teardown() {
    this.auth.logout();
    console.log(`${this.testName} finished`);
  }

  protected abstract setup(): void;
  protected abstract execute(): Promise<boolean>;
}

//4/ concreet tests..

class ProductApiTest extends BaseApiTest {
  constructor(http: IHttpClient, validator: IValidator, auth: IAuth) {
    super("Product APi test", http, validator, auth);
  }
  protected setup(): void {
    this.auth.login("admin");
  }
  protected async execute(): Promise<boolean> {
    const response = await this.http.get("/product");
    return (
      this.validator.checkStatus(response, "ok") &&
      this.validator.checkContains(response, "status")
    );
  }
}

async function runTest() {
  //khoi tao injector
  const http = new RealHttpClient("https://api.neko.com");
  const validator = new RealValidator();

  const auth = new RealAuth();

  //tiêm vào consumer
  const productTest = new ProductApiTest(http, validator, auth);
  await productTest.run();
}
runTest();
