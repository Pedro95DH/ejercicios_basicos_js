// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  const promedio = suma / numbers.length;
  console.log (`el promedio de los números del array es ${promedio} \n`)
}

average(numbers);

//Versión Array Function

const promedio = numbers.reduce((sumatorio, valorInicial) => 
sumatorio += (valorInicial / numbers.length),0
)

console.log(promedio);