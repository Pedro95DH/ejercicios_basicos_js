// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
// Puedes usar este array para probar tu función:

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const repeticiones = [];
  for (const elemento of list) {
    if (repeticiones[elemento]) {
      repeticiones[elemento]++;
    } else {
      repeticiones[elemento] = 1;
    }
  }
  console.log(repeticiones, "\n");
}

repeatCounter(words);

console.log("\nVersión Array Function \n");

const contador = (lista) => {
  const repetir = [];
  for (const elemento of lista) {
    repetir[elemento] ? repetir[elemento]++ : (repetir[elemento] = 1);
  }
  console.log(repetir);
};

contador(words);
