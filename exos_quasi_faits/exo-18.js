// Exercice 18 : Vérifier si au moins une personne est mineure
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
anyMinor = true;
for (let person of people) {
  if (person.age < 18) {
    return true;
  }
}

// résultat attendu :
console.log(anyMinor); // true
