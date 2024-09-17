// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
// Imprime en un console log el array resultante.
// Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const lugares = placesToTravel;

for (let i = 0; i < lugares.length; i++) {
  if (lugares.id == 40 || 11) {
    lugares.splice(i, 1);
  }
}

console.log(lugares);

console.log("\nVersión Array Function \n");

const sitios = (lugares) => {
  for (let i = 0; i < lugares.length; i++) {
    lugares.id == 40 || lugares.id == 11 ? lugares.splice(i, 1) : null;
  }
  console.log(lugares);
};

sitios(placesToTravel);
