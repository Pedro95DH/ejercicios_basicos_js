// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayores = [];
const menores = [];

for (const user of users) {
  if (user.years < 18) {
    menores.push(user.name);
  } else {
    mayores.push(user.name);
  }
}

console.log("Usuarios menores de edad:", menores);
console.log("Usuarios mayores de edad:", mayores);

console.log("\nVersión Array Function \n");

const menor = [];
const mayor = [];

const clasificacionEdad = (usuarios) => {
  for (const user of usuarios) {
    user.years < 18 ? menor.push(user.name) : mayor.push(user.name);
  }
  console.log("Usuarios menores de edad:", menor);
  console.log("Usuarios mayores de edad:", mayor);
};

clasificacionEdad(users);
