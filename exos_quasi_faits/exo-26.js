// Exercice 26 : Calculer la somme des âges des personnes
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
totalAge = 0;
for (let person of people) {
  totalAge += person.age;
}

// résultat attendu :
console.log(totalAge); // 150
