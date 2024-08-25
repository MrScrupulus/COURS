// Exercice 17 : Vérifier si toutes les personnes dans un tableau sont adultes
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
if (people.every((person) => person.age <= 18)) {
  allAdults = true;
} else {
  allAdults = false;
}
// résultat attendu :
console.log(allAdults); // false
