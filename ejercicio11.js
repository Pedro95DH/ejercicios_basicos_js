// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

// Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    let sumatorio = 0;
  for (let i = 0; i < list.length; i++) {
    if(typeof list[i] === "string"){
        sumatorio += list[i].length;
    }
    else{
        sumatorio += list[i];
    }
  }
  const promedio = sumatorio / list.length;

  console.log(`el promedio es ${promedio}`);
}

averageWord(mixedElements);

//Versión Array Function

const promedio2 = (lista) =>
{
  let sumatorio = 0;
  for (const element of lista){
  typeof element === "string" ? sumatorio += element.length : sumatorio += element;
}
 const promedio = sumatorio / lista.length;

 console.log(promedio);
};

promedio2(mixedElements);