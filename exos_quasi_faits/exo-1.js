// Exercice 1 : Trouver les noms des personnes âgées de plus de 25 ans
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

// votre code ici ....
for (let person of people) {
  if (person.age > 25) {
    console.log(person.name);
  }
}

// résultat attendu :
//console.log(result); // ["Alice", "Charlie"]
