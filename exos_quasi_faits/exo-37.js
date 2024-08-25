// Exercice 37 : Grouper les personnes par âge
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 30 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
groupedByAge = people.filter(
  (person) => (person.age = 20 || 30 || 35 || 40),
  people.map(person)
);
// résultat attendu :
console.log(groupedByAge);
// { 30: ["Alice", "David"], 20: ["Bob"], 35: ["Charlie"], 40: ["Eve"] }
