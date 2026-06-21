//export

export function taoEmailNgauNhien() {
  return `test_${Date.now()}@gmail.com`;
}

export const MAX_RETRY = 3;

export const BASE_URL = "http/1bc";

function hamBiMat() {
  return "ok";
}
//2 cách khai báo export default

// class LoginPage {
//   motrangDangNhap() {
//     return "abc";
//   }
// }
// export default LoginPage;

export default class LoginPage {
  motrangDangNhap() {
    return "abc";
  }
}
