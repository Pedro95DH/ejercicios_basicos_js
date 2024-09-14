// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

// Puedes usar este array para probar tu función:

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, name) {
  if (nameList.indexOf(name) !== -1) {
    console.log(true, nameList.indexOf(name));
  } else {
    console.log(false);
  }
}

nameFinder(names, "Peter");

//Versión Array Function

let nombrecito = (nameLista, nombre) => {
  nameLista.indexOf(nombre) !== -1
    ? console.log(true, nameLista.indexOf(nombre))
    : console.log(false);
};

nombrecito(names, "Bruce");
