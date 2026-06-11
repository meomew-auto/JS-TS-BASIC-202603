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
