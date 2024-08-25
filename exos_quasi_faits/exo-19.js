// Exercice 19 : Trouver les personnes ayant un certain âge
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 30 },
];

// votre code ici .... //
peopleAge30 = people.filter((person) => person.age === 30);

// résultat attendu :
console.log(peopleAge30); // ["Alice", "Eve"]
