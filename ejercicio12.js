// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Pista: puedes generar un nuevo array y devolverlo.

// Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  const noDuplicate = [];
  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(list[i]) === i) {
      noDuplicate.push(list[i]);
    }
  }
  console.log(noDuplicate);
}
removeDuplicates(duplicates);

console.log("\nVersión Array Function \n");

let result = duplicates.filter((item, index) => {
  return duplicates.indexOf(item) === index;
});

console.log(result);
