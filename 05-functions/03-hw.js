// - người dùng gõ thừa khoảng trắng
// - role viết hoa viết thường lung tung
// - checkbox `remember me` lúc thì là `true`, lúc là `"yes"`, lúc là `"on"`
// - dev truyền object input vào nhiều nơi, chỉ cần sửa trực tiếp nhầm một lần là bug dây chuyền

// object trong JS được truyền theo dạng tham chiếu

const input = {
  email: " A@gmail.com ",
  role: "admin",
};

function nornalize(data) {
  data.email = data.email.trim();
  data.role = data.role.toLowerCase();
}

function logOriginal(data) {
  console.log(data.email);
}

function nornalizeInput(input) {
  return {
    ...input,
    email: input.email.trim(),
    role: input.role.toLowerCase(),
  };
}

logOriginal(input);

// nornalize(input);

nornalizeInput(input);

logOriginal(input);

//vấn đeef
//nornalize ko tọa object mới -> nó sửa luôn input gốc -> nếu chỗ khác vẫn nghĩ input là dữ liệu ban đầu
//thì sẽ lỗi logic

//

//object đầu vào có dạng
//  formInput: {
// //       username: "  Neko_Admin  ",
// //       password: "  12345678  ",
// //       role: " tester ",
// //       rememberMe: "yes",
// //       device: "  chrome-win11  ",
// //     },

// let {username, password, role, remberMe, device} = formInput
// formInput -> chinsh la loginTestData[i].formInput hi chay test

// const { defaultRole = "guest", allowedRoles, minPasswordLength = 8 } = options;

// nếu options.defaultRole mà ko có thì defaultRole nhận giá mặc định là guest

// const loginTestData = [
//   {
//     name: "Case 1 - Hợp lệ cơ bản",
//     formInput: {
//       username: "  Neko_Admin  ",
//       password: "  12345678  ",
//       role: " tester ",
//       rememberMe: "yes",
//       device: "  chrome-win11  ",
//     },
//   },
//   {
//     name: "Case 2 - Role rỗng, phải dùng defaultRole",
//     formInput: {
//       username: "  guest_user  ",
//       password: "  abcdefgh  ",
//       role: "   ",
//       rememberMe: "no",
//       device: " firefox ",
//     },
//   },
//   {
//     name: "Case 3 - Username rỗng",
//     formInput: {
//       username: "    ",
//       password: "12345678",
//       role: "tester",
//       rememberMe: "yes",
//       device: "chrome",
//     },
//   },
//   {
//     name: "Case 4 - Username có khoảng trắng ở giữa",
//     formInput: {
//       username: "neko admin",
//       password: "12345678",
//       role: "tester",
//       rememberMe: "yes",
//       device: "chrome",
//     },
//   },
//   {
//     name: "Case 5 - Password quá ngắn",
//     formInput: {
//       username: "valid_user",
//       password: "123",
//       role: "tester",
//       rememberMe: true,
//       device: "chrome",
//     },
//   },
//   {
//     name: "Case 6 - Role không hợp lệ",
//     formInput: {
//       username: "valid_user",
//       password: "12345678",
//       role: "manager",
//       rememberMe: "on",
//       device: "chrome",
//     },
//   },
//   {
//     name: "Case 7 - rememberMe là boolean true",
//     formInput: {
//       username: "admin01",
//       password: "abcdefgh",
//       role: "admin",
//       rememberMe: true,
//       device: "edge",
//     },
//   },
//   {
//     name: "Case 8 - rememberMe là chuỗi lạ",
//     formInput: {
//       username: "viewer01",
//       password: "abcdefgh",
//       role: "viewer",
//       rememberMe: "maybe",
//       device: "safari",
//     },
//   },
// ];
// ```
// const loginOptions = {
//   defaultRole: "guest",
//   allowedRoles: ["admin", "tester", "viewer", "guest"],
//   minPasswordLength: 8,
// };

function taoPayloadDangNhap(formInput, options) {
  //YC1
  let { username, password, role, rememberMe, device } = formInput;

  //YC2
  const {
    defaultRole = "guest",
    allowedRoles,
    minPasswordLength = 8,
  } = options;
  const errors = [];
  //YC3
  username = username.trim().toLowerCase();
  password = password.trim();
  role = role.trim().toLowerCase();
  device = device.trim();
  if (rememberMe === true || rememberMe === "yes" || rememberMe === "on") {
    rememberMe = true;
  }
  {
    rememberMe = false;
  }
  if (role === "") {
    role = defaultRole.toLowerCase();
  }

  const payload = {
    username,
    password,
    role,
    rememberMe,
    device,
  };
  //phải làm sạch -> mới check điều kiện
  //YC4 kiểm tra tính hợp lệ -> validate
  if (payload.username === "") {
    errors.push("Username không được bỏ trống");
  }
  if (payload.username.includes(" ")) {
    errors.push("Username không có khoảng trắng ở giữa");
  }
  if (payload.password.length < minPasswordLength) {
    errors.push(`Password phải có ít nhất ${minPasswordLength} kí tự`);
  }
  if (!allowedRoles.includes(payload.role)) {
    errors.push("Role không nằm trogn dánh sách cho phép");
  }

  return {
    payload,
    errors,
    isValid: errors.length === 0,
  };
}

const loginOptions = {
  defaultRole: "guest",
  allowedRoles: ["admin", "tester", "viewer", "guest"],
  minPasswordLength: 8,
};

const loginTestData = [
  {
    name: "Case 1 - Hợp lệ cơ bản",
    formInput: {
      username: "  Neko_Admin  ",
      password: "  12345678  ",
      role: " tester ",
      rememberMe: "yes",
      device: "  chrome-win11  ",
    },
  },
  {
    name: "Case 2 - Role rỗng, phải dùng defaultRole",
    formInput: {
      username: "  guest_user  ",
      password: "  abcdefgh  ",
      role: "   ",
      rememberMe: "no",
      device: " firefox ",
    },
  },
  {
    name: "Case 3 - Username rỗng",
    formInput: {
      username: "    ",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 4 - Username có khoảng trắng ở giữa",
    formInput: {
      username: "neko admin",
      password: "12345678",
      role: "tester",
      rememberMe: "yes",
      device: "chrome",
    },
  },
  {
    name: "Case 5 - Password quá ngắn",
    formInput: {
      username: "valid_user",
      password: "123",
      role: "tester",
      rememberMe: true,
      device: "chrome",
    },
  },
  {
    name: "Case 6 - Role không hợp lệ",
    formInput: {
      username: "valid_user",
      password: "12345678",
      role: "manager",
      rememberMe: "on",
      device: "chrome",
    },
  },
  {
    name: "Case 7 - rememberMe là boolean true",
    formInput: {
      username: "admin01",
      password: "abcdefgh",
      role: "admin",
      rememberMe: true,
      device: "edge",
    },
  },
  {
    name: "Case 8 - rememberMe là chuỗi lạ",
    formInput: {
      username: "viewer01",
      password: "abcdefgh",
      role: "viewer",
      rememberMe: "maybe",
      device: "safari",
    },
  },
];

for (let i = 0; i < loginTestData.length; i++) {
  console.log(loginTestData[i].name);
  console.log(taoPayloadDangNhap(loginTestData[i].formInput, loginOptions));
}
