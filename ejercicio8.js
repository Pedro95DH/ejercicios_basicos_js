// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

//Método Básico

function findLongestWord() {
  let Avenger = "";
  for (let i = 0; i < avengers.length; i++) {
    if (avengers[i].length > Avenger.length) {
      Avenger = avengers[i];
    }
  }

  console.log(`La palabra más larga es ${Avenger} \n`);
}

findLongestWord(avengers);

//Versión Array Function

const findLongestWord2 = avengers.reduce(
  (accumulator, currentValue) =>
    accumulator > currentValue.length ? accumulator : currentValue,
  ""
);

console.log(findLongestWord2);
