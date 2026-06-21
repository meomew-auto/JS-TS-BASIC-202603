///
const menuCatalog = {
  drinks: {
    coffee: { name: "Ca phe sua", price: 3000 },
    tea: { name: "Tra dao", price: 2400 },
    juice: { name: "Nuoc ep cam", price: 5000 },
  },
  food: {
    bread: { name: "Banh mi", price: 2000 },
    rice: { name: "com tam", price: 6000 },
  },
} as const;

//getMenu('', '')

function getMenu<
  N extends keyof typeof menuCatalog,
  K extends keyof (typeof menuCatalog)[N],
>(nameSapce: N, key: K) {
  return menuCatalog[nameSapce][key];
}

const coffee = getMenu("drinks", "coffee");
coffee.name;
