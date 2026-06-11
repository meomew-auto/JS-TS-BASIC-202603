// khi test api có rất nhiều api ví dụ userm product, order
//điểm chung là những thằng này sẽ có những method ví dụ như
//thêm . sửa, xóa, (CRUD), update
//UserRepository, ProductRepository, OrderRepository
//T có thể là bất cứ thứu gì. có thể là string, number, bolean.... Điều này linh hoạt, nhưng cso 1 vấn đề

/// mình ko thể dùng bất kì property cụ thể nào của T, vì TS ko biêtts T là kiểu gì
class Repository<T> {
  //mảng chứa T (có thể userm product, hoặc order)
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  //   findById(id: number): T | undefined {
  //     return this.items.find((item) => item.id === id);
  //   }

  getAll(): T[] {
    //trả về 1 mảng copy mảng gốc
    return [...this.items];
  }
  count(): number {
    return this.items.length;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "neko1", email: "neko1@gmail.com" });
userRepo.add({ id: 2, name: "neko2", email: "neko2@gmail.com" });

console.log(userRepo.count());

const productRepo = new Repository<Product>();

///mình muốn viết. T ko phải là bất cứ thứ gì - T phải có ít field id:number.
///T extends tới interface hoặc type yueeu cầu
//định nghĩa constraint: những gì T bắt buộc phải có
interface HasId {
  id: number;
}

interface Order extends HasId {
  product: string;
  total: number;
}

//T phải có ít nhất {id:number}
class CrudRepo<T extends HasId> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}
const orderRepo = new CrudRepo<Order>();
orderRepo.add({ id: 1, product: "neko1", total: 1 });
const found = orderRepo.findById(1);
