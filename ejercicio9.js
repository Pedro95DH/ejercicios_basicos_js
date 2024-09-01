// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log (`la suma de todos los números del array es ${sum} \n`)
}

sumNumbers(numbers);

//Versión optimizada

const sumatorio = numbers.reduce((acumulador, number) => 
 acumulador += number
)

console.log(sumatorio);