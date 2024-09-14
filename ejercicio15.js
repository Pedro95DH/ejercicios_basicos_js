const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
}

console.log("\nVersión Array Function \n");

products.forEach((element) =>
  element.includes("Camiseta") ? console.log(element) : null
);
