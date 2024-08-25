// Exercice 11 : Ajouter un suffixe "_Jr" aux noms des personnes de moins de 30 ans
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
updatedPeople = people.map((person) => {
  if (person.age < 30) {
    return { name: person.name + "_Jr" };
  } else {
    return person;
  }
});
// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob_Jr", age: 20 },
//   { name: "Charlie", age: 35 },
//   { name: "David_Jr", age: 25 },
//   { name: "Eve", age: 40 }
// ]
