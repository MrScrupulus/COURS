// Exercice 22 : Supprimer les personnes mineures du tableau
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 16 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
adults = people.filter((person) => person.age >= 18).map((person) => person);

//adults = (people.filter(person)=> person.age<18)
//people.map : person.age
// résultat attendu :
console.log(adults);
// [
//   { name: "Alice", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Eve", age: 40 }
// ]
