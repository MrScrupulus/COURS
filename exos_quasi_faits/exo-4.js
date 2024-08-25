// Exercice 4 : Trouver la personne avec le plus grand âge
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
oldestPerson = people[0];
for (let i = 0; i < people.length; i++) {
  if (people[i].age > oldestPerson.age) {
    oldestPerson = people[i];
  }
}
console.log(oldestPerson);

// résultat attendu :
//console.log(oldestPerson);
// { name: "Eve", age: 40 }
