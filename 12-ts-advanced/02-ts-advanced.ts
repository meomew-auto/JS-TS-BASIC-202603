//Record<K, T>
//Syntax cua record la su dung generic Record<K,T>
//dùng để tạo ra 1 object mà ở đó
//chúng ta biết rõ KIỂU của KEY
//và chúng ta biết rõ KIỂU của giá trị
//Cách sử dụng
type DiemSo = Record<string, number>;

const lop1A: DiemSo = {
  teo: 2,
  ti: 8,
};
//Cách sử dụng 2: Dùng Record để bắt lôi thiếu sót
// Hệ thống có 3 vai trò (role): admin, user, guest. -> Muốn quy định tiêu đề hiển thị cho từng vai trò

interface RoleTitle {
  admin: string;
  user: string;
  guest: string;
}
//vis duj object nay o 1 file khac
const roleConfig: RoleTitle = {
  admin: "Quan tri vien",
  user: "Nguoi dung",
  guest: "Khach vang lai",
};

type UserRole = "admin" | "user" | "guest";

const roleConfig2: Record<UserRole, string> = {
  admin: "Quan tri vien",
  user: "Nguoi dung",
  guest: "Khach vang lai",
};

///Interface
//KHi thêm role mới -> sửa 2 nơi: IInterface + object
//Cơ chê báo lỗi: báo ở object nếu thiếu field
//Ràng buộc: chỉ ép key phải đúng tên

//Record + union type
//Sửa 1 nơi: union type (object tự báo lỗi)
// Báo ở TẤT CẢ object dùng RECORD đó
//ÉP ĐỦ TẤT CẢ KEY TRONG UNION

//Tiêu chí
//Khi nào dùng interface và Record<>

//Các key (thuộc tính): Interface key khác nhau (User, phả có id, name, email..)
///Record -> giống nhau (danh sánh điểm số, config)
//Giá trị : Interface mỗi dòng 1 kiểu , Record -> TẤT CẢ GIÁ TRỊ cùng 1 kiểu
//Múc đích; Interface -> mô tả 1 đối tượng cụ thể. RECORD.- > MÔ TẢ 1 bộ sưu tập (từ điển, map, config)

//chạy lint -> kiểm tra việc biên dịch code TS có thừa thiếu hay ko đúng convention nào ko.

//-> TÓM LẠI: RECORD<K, V> tao muốn 1 cái object . có key là nằm trong nhóm K, và giá trị TÂT CẢ đều là kiểu V

//Partial<T>
//giả sử có 1 interface
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
//mình muốn viết 1 hàm để sửa thông tin.
//hàm update -> lầ 1 sửa naem, lần 2 sửa id và email

function updateUser(id: number, newData: User) {
  console.log(`Udate user ${id}:`, newData);
}

//ví dụ chỉ muốn sửa tên
updateUser(1, { name: "Teo", id: 1, email: "1", age: 2 });

//Partial -> 1 phần -> sẽ cop cái khuôn type cũ (User)-> nhưng sẽ làm cho tất cả thuộc tính trở thành optional ?
//{
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
// }

function updateUserNew(id: number, newData: Partial<User>) {
  console.log(`Udate user ${id}:`, newData);
}
updateUserNew(1, { name: "Teo" });
updateUserNew(1, { name: "Teo", age: 30 });

//Record cũng có thể kết hợp với Partial _. trong các file config hoặc state manegment(qunar lý trnjg thía)

type BrowserName = "chromium" | "firefox" | "webkit";

interface BrowserConfig {
  headless: boolean;
  slowMo: number;
}

//Ví dụ mình muốn tạo ra 1 danh sách có thể THIẾU 1 vài trình duyệt
const mySettings: Partial<Record<BrowserName, BrowserConfig>> = {
  firefox: { headless: true, slowMo: 200 },
};
//Hoặc danh sách phải đủ các trình duyệt, nhưng cấu hình bên trong có thể thiếu
const mySettings2: Record<BrowserName, Partial<BrowserConfig>> = {
  chromium: { slowMo: 200 },
  firefox: { headless: true },
  webkit: {},
};

//Thích làm gì làm thì làm, thiếu trình duyệt hoặc config cũng đc
const mySettings3: Partial<Record<BrowserName, Partial<BrowserConfig>>> = {
  chromium: { slowMo: 20 },
};

///Pick. omit. intersection &
//muốn update name: optional. email, age require
//{
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
// }
// Partial<Pick<User, "name">>
// {
//  name?:   string
// }
// Pick<User, "email" | "age">
// }
// /   email: string;
// //   age: number;
// // }

// {
//     //  name?:   string
//   email: string;
// // //   age: number;
// }
type UserOptionalField = "name" | "email";
type UpdateUserData = Partial<Pick<User, UserOptionalField>> &
  Pick<User, "email" | "age">;

function updateUserNew2(id: number, newData: UpdateUserData) {
  console.log(`Udate user ${id}:`, newData);
}

updateUserNew2(1, {
  email: "12",
  age: 120,
});

//Parameter<T>

//Try catch finally

//try {

// }catch(error){

// }
//finall{
// }
//try{}-> chứa code nghi ngờ có thể sinh lỗi
//catch{} -> nhận object lỗi (error) và xử lý. error.name = tên lõi lỗi,  error.message = mô tả chi tết
//finally {} luôn chayk dù lỗi hay k
///throw . throw new Error("mô tả lỗi") ->  error.name = "Error" . error.message = 'mô tả lỗi'

console.log("Bắt đầu xử lý");

let dataTuApi = "Chuỗi này ko phải JSON";
// let user3 = JSON.parse(dataTuApi);

// SyntaxError: Unexpected token 'C', "Chuỗi này "... is not valid JSON
//     at JSON.parse (<anonymous>)
//     at <anonymous> (e:\playwright-pro\202603-PW-JS-TS\12-ts-advanced\02-ts-advanced.ts:170:18)
// SyntaxError = error.name
//Unexpected token 'C', "Chuỗi này "... is not valid JSON
//     at JSON.parse (<anonymous>)
//     at <anonymous> (e:\playwright-pro\202603-PW-JS-TS\12-ts-advanced\02-ts-advanced.ts:170:18) = error.message

try {
  console.log("đang dịch chuỗi");
  let user3 = JSON.parse(dataTuApi);

  console.log("dịch thành công");
} catch (error) {
  //hứng lỗi
  if (error instanceof Error) {
    console.log("- Tên lỗi", error.name);
    console.log("- Tên lỗi", error.message);
  }
} finally {
  console.log("Xoa cac file...");
}

console.log("Tiếp tục chạy caase 2");

function kiemTraText(text: string) {
  try {
    console.log("Dang kiem tra text");
    if (text === "undefined" || text === "") {
      throw new Error("Lỗi giao diện: Tên user bị trống hoặc undefined");
    }
    console.log("PASS-hiển thị đúng tên", text);
  } catch (error) {
    if (error instanceof Error) {
      console.log("- Tên lỗi", error.name);
      console.log("- Chi tiết lỗi", error.message);
    }
  }
}

kiemTraText("");

kiemTraText("abc");
