//nói lại về constructor trong kế thừa - các trường hợp
//TH1 : class con ko có constructor - > tự động dùng constructor của cha
class AnimalBase {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `${this.name}, ${this.age} tuoi`;
  }
}

class DogChild extends AnimalBase {
  bark(): string {
    return `${this.name}:Gâu gâu`;
  }
}

const buddy = new DogChild("Buddy", 3);
console.log(buddy.greet());
console.log(buddy.bark());

//TH2: class con CÓ constructor riêng() -> bát buộc phải gọi super

class AnimalBase2 {
  constructor(public name: string) {}
}
class Dog2 extends AnimalBase2 {
  constructor(
    name: string,
    //Propery riêng của Dog2
    public breed: string,
  ) {
    super(name);
    console.log(`Tạo ${this.breed} : ${this.name}`);
  }
}

const dog2 = new Dog2("buddy", "golden");

//TH đặc biệ: cha ko có constructor , nhưng con víe contructor thì vẫn phải gọi super
class Base {
  sayHi() {
    return `Hi from base`;
  }
}

class Child extends Base {
  constructor() {
    super();
  }
}

//override

class Parent2 {
  greet(): string {
    return "Hello from parent";
  }
}

class Child1 extends Parent2 {
  gret(): string {
    return "Hello from child 1";
  }
}

class Child2 extends Parent2 {
  override greet(): string {
    return "Hello from child 1";
  }
}

//Method overloading trong class - cùng tên, khác tham số
//Js ko có overloading -> tính năng này chi có ở TS -> complie xong sẽ mất
//cú pháp viết nhiều hàm cùng tên khác tham số (nhung ko cos body) + với 1 hàm thực

//add có thể sử dụng cộng number number , hoặc cộng string , hoặc cộng trong 1 mảng

class Calculator {
  //overload signatures (kai bao ko co body)
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number[]): number;
  //implementation )than ham - xy ly tat ca cac truong hop
  add(a: number | string | number[], b?: number | string): number | string {
    //TH3: mang
    if (Array.isArray(a)) {
      return a.reduce((sum, n) => sum + n, 0);
    }
    //Th1: 2 so
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    //Th2: 2 chuoi
    if (typeof a === "string" && typeof b === "string") {
      return a + b;
    }
    throw new Error("Invalid arugment");
  }
}
const calc = new Calculator();

console.log(calc.add(1, 2));
console.log(calc.add("hello", "member"));
console.log(calc.add([1, 2, 3, 5]));
