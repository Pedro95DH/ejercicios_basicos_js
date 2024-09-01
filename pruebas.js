
const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
  ];

console.log(avengers.find(avenger => avenger.charAt(0) === 'S'));
console.log(avengers.filter(avenger => avenger.charAt(0) === 'C'));
console.log(avengers.findIndex(avenger => avenger.charAt(0) === 'S'));
console.log(avengers.map(avenger => avenger.toUpperCase()));
