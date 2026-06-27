// ///
// const menuCatalog = {
//   drinks: {
//     coffee: { name: "Ca phe sua", price: 3000 },
//     tea: { name: "Tra dao", price: 2400 },
//     juice: { name: "Nuoc ep cam", price: 5000 },
//   },
//   food: {
//     bread: { name: "Banh mi", price: 2000 },
//     rice: { name: "com tam", price: 6000 },
//   },
// } as const;

// //getMenu('', '')

// function getMenu<
//   N extends keyof typeof menuCatalog,
//   K extends keyof (typeof menuCatalog)[N],
// >(nameSapce: N, key: K) {
//   return menuCatalog[nameSapce][key];
// }

// const coffee = getMenu("drinks", "coffee");
// coffee.name;
import customers from "./customers.json" with { type: "json" };
import customersDev from "./customers-dev.json" with { type: "json" };

function loadDataByEnv<T>(base: T, dev: T): T {
  //process.env
  let env = "dev";
  switch (env) {
    case "dev":
    case "development":
      return dev;
    default:
      //néu ko truyền môi trường
      return base;
  }
}

type DataEntry = {
  description?: string;
  //dùng unkown vì tại đây ta chưa biết data là object , array, stgring, number
  //type chi tiết chúng ta sẽ xử lý sau
  data: unknown;
};

const testDataCatalog = {
  //customers có 2 file: file base và file dev
  //loadDatabyenv sẽ chọn đúng file theo môi trường
  customers: loadDataByEnv(customers, customersDev),
  //loginCase: loadDataByEnv(loginCase, loginCaseDev)
  //login case
  //oders
  //producst
};

type TestDataCatalog = typeof testDataCatalog;

type TestDataNamespace = keyof typeof testDataCatalog;

type TestDataKey<N extends TestDataNamespace> = keyof TestDataCatalog[N];
// customers |''

type TestDataValue<
  N extends TestDataNamespace,
  K extends TestDataKey<N>,
> = (TestDataCatalog[N][K] & DataEntry)["data"];

type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;
//{name; string., age:number}
//copy lông shallow copy
function cloneData<T>(data: T) {
  if (typeof structuredClone !== "undefined") {
    return structuredClone(data);
  }
  return JSON.parse(JSON.stringify(data));
  //node js 17+
  //structuredClone()
}

//override
//Object.asign () merge 2 object lại với nhau.
const original = {
  company: "Auto minimal",
  address: {
    city: "HCM",
  },
};

const overrides = {
  address: {
    city: "HN",
  },
};

Object.assign(original, overrides);

//transform - Biến đổi data
//mainfunction
export function getTestDataSimple<
  // N là namespace người dùng truyền vao
  //ví dụ getTestDataSimple('customer',...)-> 'customer'
  N extends TestDataNamespace,
  // K là key nằm trong namespace
  //ví dụ getTestDataSimple('customer', 'full')->
  K extends TestDataKey<N>,
>(
  nameSpace: N,

  key: K,

  ///optional
  options?: {
    //override dung khi data la object va chi muon bien doi vai field
    overrides?: Partial<TestDataValue<N, K>>;

    //transorm dung cho logic linh hoat, filter array, map array, tao field dong, hoac bien doi object
    transform?: (data: TestDataValue<N, K>) => TestDataValue<N, K>;
  },
): TestDataValue<N, K> {
  ///B1: Kiểm tra namespace có tồn tại hay ko
  const nameSpaceData = testDataCatalog[nameSpace];
  if (!nameSpaceData) {
    throw new Error(`Namespace ${nameSpace} Không tồn tại`);
  }

  //b2: Kiểm tra key
  const entry = nameSpaceData[key] as TestDataCatalog[N][K] & DataEntry;
  if (!entry) {
    throw new Error(`Key ${String(key)} Không tồn tại`);
  }

  //b3.clonedata
  let results = cloneData(entry.data) as TestDataValue<N, K>;

  //B4: apply overrides
  if (options?.overrides) {
    if (Array.isArray(results)) {
      throw new Error("Khong the dung override cho array");
    }
    if (typeof results !== "object" || results === null) {
      throw new Error(
        "Override ko the dung cho string, number, boolean (check primitive type",
      );
    }
    Object.assign(results, options.overrides);
  }

  //b5. apply transform
  if (options?.transform) {
    results = options.transform(results);
  }
  return results;
}
