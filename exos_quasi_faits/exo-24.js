// Exercice 24 : Filtrer les personnes nées après l'année 2000
const people = [
  { name: "Alice", age: 30, birthYear: 1994 },
  { name: "Bob", age: 20, birthYear: 2004 },
  { name: "Charlie", age: 35, birthYear: 1989 },
  { name: "David", age: 25, birthYear: 1999 },
  { name: "Eve", age: 40, birthYear: 1984 },
];
bornAfter2000 = people.filter((birthYear) => birthYear.birthYear > 2000);

// votre code ici .... //

// résultat attendu :
console.log(bornAfter2000);
// [{ name: "Bob", age: 20, birthYear: 2004 }]
