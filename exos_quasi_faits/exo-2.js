// Exercice 2 : Calculer la moyenne des âges
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

// votre code ici .... //
totalAge = 0;
for (let person of people) {
  totalAge += person.age;
}
averageAge = totalAge / people.length;
console.log(averageAge);

// résultat attendu :
//console.log(averageAge); // 27.5
