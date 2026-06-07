//1. Class field có giá trị mặc định-> ko cần constructor

class LoginPage {
  url: string = "/login";
  txtUsername: string = "#username";
  txtPassword: string = "#password";
}

const page = new LoginPage();
console.log(page.txtPassword);
console.log(page.url);

//2 Class field ko có giá trị -> bắt buộc phải gán trong constructor
class HocVien {
  hoTen: string;
  tuoi: number;
  email: string;

  constructor(hoTen: string, tuoi: number, email: string) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.email = email;
  }
}

const hv = new HocVien("neko", 19, "neko@gmail.com");
console.log(hv.hoTen);

//3 - combo ket hop class field + constructor

class Product {
  //thuoc tinh co dinh -> ko can constructor

  category: string = "general";
  tags: string[] = [];
  rating: number = 0;

  // thuoc tinh dong
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const p = new Product("Macbook pro", 200000);

class UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user2 = new UserProfile("neko", "neko@gmail.com");
console.log(user2.name);
console.log(user2.avatarUrl);

class TestConfig {
  //Bat buoc test nao cung can

  browser: string;
  baseUrl: string;

  //optional
  screenshot?: "on" | "off";
  retryCount?: number;
  tags?: string[];

  constructor(browser: string, baseUrl: string) {
    this.browser = browser;
    this.baseUrl = baseUrl;
  }

  summary(): string {
    const retry = this.retryCount ?? 0;
    const scrn = this.screenshot ?? "off";
    const tagList = this.tags?.join(", ") ?? "all";
    return `${this.browser} | ${this.baseUrl} | retry: ${retry} | scrn: ${scrn} | tags: ${tagList}`;
  }
}

const config = new TestConfig("firefox", "https://autoneko.com");
console.log(config.summary());

config.screenshot = "on";
config.retryCount = 3;
config.tags = ["smoke", "regress"];

console.log(config.summary());

//readonly

class AppCofig {
  readonly appName: string = "Neko app";
  readonly version: string;

  constructor(version: string) {
    this.version = version;
  }
}

const appC = new AppCofig("2.0");
console.log(appC.appName);
console.log(appC.version);

class UserOK {
  name!: string;
}

const user = new UserOK();
user.name = "Neko";
console.log(user.name.toUpperCase());

class Database {
  //   connection!: string;
  //   //
  //   connection2: string | null = null;

  connection3?: string;

  async connect(url: string) {
    this.connection3 = url;
  }

  query(sql: string): string {
    if (!this.connection3) {
      throw new Error("Chua co ket noi");
    }
    return `${this.connection3} ${sql}`;
  }
  //   isConnected(): boolean {
  //     return this.connection2 !== null;
  //   }
}

// async function runSQL() {
//   const db = new Database();
//   console.log(db.isConnected());
//   await db.connect("mongo://localhost:28101");
//   //db.connect()
//   console.log(db.query("SELECT * FROM"));
// }

class HocVienDai {
  hoTen: string;
  tuoi: number;

  constructor(hoTen: string, tuoi: number) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
  }
}

//parameter properties

class HocVienNgan {
  constructor(
    public hoTen: string,
    public tuoi: number,
  ) {}
}

const hv1 = new HocVienDai("neko1", 23);
const hv2 = new HocVienNgan("neko2", 23);

//ket hop parameter propeties va class fiedls

class LoginPage2 {
  readonly url = "/login";
  readonly btnSubmit = "btn";

  constructor(public timeout: number) {}
}

class TestConfig2 {
  //classfield MAc dinh
  //gia tri co dinh moi instance deu gion nhau
  //ko the thay doi khi tao object
  readonly url = "/login";
  //default parameter
  //gia tri mac dinhj - co the override khi tao object
  constructor(
    public browser: string = "chromium",
    public headless: boolean = true,
  ) {}

  summary() {
    return `${this.browser} | headless: ${this.headless}`;
  }
}
const tcg2 = new TestConfig2();
tcg2.summary();
tcg2.url;

const tcg3 = new TestConfig2("firefox");
tcg3.browser;
tcg3.url;

class Animal {
  constructor(
    public name: string,
    public sound: string,
  ) {}

  public speak(): string {
    return `${this.name} keu: ${this.sound}`;
  }
}

const cat = new Animal("meo", "meo meo");

cat.speak();

cat.name = "meo may";
cat.speak();

class BankAccount {
  constructor(
    public ownwer: string,
    private balance: string,
    private pin: string,
  ) {}

  deposit(amount: number) {
    this.balance += amount;
    console.log(`${amount} => so du ${this.balance}`);
  }

  getBalance(inputPin: string): string {
    if (inputPin !== this.pin) return `Sai PIN`;
    return `So du ${this.balance}`;
  }
}

const account = new BankAccount("neko", "20000000", "123456");
account.getBalance("123456");
// console.log(account.balance);

class BasePage {
  constructor(
    public url: string,
    private secret: string = "xxx",
    protected baseUrl = "http:neko.com",
  ) {}

  protected getFullUrl(): string {
    return `${this.baseUrl}${this.url}`;
  }
}

class LoginPage3 extends BasePage {
  constructor() {
    super("/login");
  }

  goto() {
    const fullUrl = this.getFullUrl();
    console.log(`Truy cap den trang web ${fullUrl}`);

    console.log(`Base URl: ${this.baseUrl}`);
  }
}
const loginPage3 = new LoginPage3();

loginPage3.goto();
console.log(loginPage3.url);

class User3 {
  //_ convention prefix
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim() === "") {
      throw new Error("Ten ko dc rong");
    }
    this._name = value;
  }
}

const user3 = new User3("neko", 25);
// console.log(user3.name);
// user3.name = "";

//Promise<T>
//Tra ve object hoac array
class TestReport {
  private results: { name: string; passed: boolean }[] = [];

  addResult(name: string, passed: boolean): void {
    this.results.push({ name, passed });
  }

  //return object
  getSummary(): { total: number; passed: number; failed: number } {
    const passed = this.results.filter((r) => r.passed).length;
    return {
      total: this.results.length,
      passed,
      failed: this.results.length - passed,
    };
  }

  //return array
  getFailedTest(): string[] {
    return this.results.filter((r) => !r.passed).map((r) => r.name);
  }
}

const report = new TestReport();
report.addResult("login test", true);
report.addResult("search test", false);
report.addResult("cart test", true);

console.log(report.getSummary());

console.log(report.getFailedTest());

class Counter {
  //thuoc tinh ma moi instnace (object deu co 1 ban sao)

  count: number = 0;

  constructor(public name: string) {
    Counter.totalCreated++;
  }

  increment(): void {
    this.count++;
  }
  //Static bien dem CHUNG CHO TAT CA THUOC VE CLASS
  static totalCreated: number = 0;
  static showTotal(): void {
    console.log(`Tổng cộng đc tạo ${Counter.totalCreated}`);
  }
}

const a = new Counter("Counter A");
const b = new Counter("Counter B");
const c = new Counter("Counter C");

a.increment();
a.increment();
b.increment();
b.increment();
c.increment();

console.log(a.count);
console.log(b.count);
console.log(c.count);

//NHUNG STATIC LA PROPERY CHUNG

console.log(Counter.totalCreated);
Counter.showTotal();
class BaseReporter {
  static format(message: string): string {
    return `[BASE] ${message}`;
  }

  static report(message: string): void {
    console.log(this.format(message)); // this = class gọi, không phải instance
  }
}

class CounterChild extends Counter {}

const childCounter = new CounterChild("child");
console.log(CounterChild.totalCreated);

//Lí do tại sao thực tế khi code mà các hàm chứa static người tga ko dùng extends

// thằng static không cso tính đa hình () - có override nhưng thực ra nó là shadow( che khuất)
//
class Parent {
  static greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  static greet() {
    return "Hello from Child";
  }
}

console.log(Parent.greet());
console.log(Child.greet());
//khi mà thằng cha có method gọi static method khác của chính nó
class BaseReport {
  static format(msg: string): string {
    return `[BASE] ${msg}`;
  }
  static report(msg: string): void {
    console.log(BaseReport.format(msg));
  }
}

class JsonReporter extends BaseReport {
  //thằng con tự định nghĩa lại format (bỏi vì tính đa hình) - nhưng đay là SHADOW ko phải override
  static format(msg: string): string {
    return `{"level": "info", "msg" :"${msg}"}`;
  }
}

BaseReport.report("Hello");

JsonReporter.report("Hello");

class BaseInstance {
  format(msg: string): string {
    return `[BASE] ${msg}`;
  }
  report(msg: string): void {
    console.log(this.format(msg));
  }
}
class JsonInstance extends BaseInstance {
  //thằng con tự định nghĩa lại format (bỏi vì tính đa hình) - nhưng đay là SHADOW ko phải override
  format(msg: string): string {
    return `{"level": "info", "msg" :"${msg}"}`;
  }
}

const reporter: BaseInstance = new JsonInstance();

reporter.report("hello");

//Lí do: Static đc thiết kế để dùng trực tiếp ko phải mở rộng
//Utility class - đây là class hỗ trợ cho chúng ta khi code
// class StringUtils {
//   static capitalize(str: string): string {}
//   static isEmail(str: string): boolean;
// }

// class AppConfig {
//   static readonly APP_NAME = "NEko shop";
//   static readonly API_URL = "https/...";
// }

//Thực tế sử dụng.
//Static Property Dữ liệu chia sẻ

class AppConfig {
  static readonly APP_NAME = "NEko shop";
  static readonly API_URL = "https/...";
}

// const appConfig = new AppConfig();
// appConfig.APP_NAME;

console.log(AppConfig.API_URL);

//static method - utility functions

// class StringUtils {
//   static capitalize(str: string): string {}
//   static isEmail(str: string): boolean;
// }
