// Exercice 13 : Calculer l'âge moyen des personnes dont le nom commence par une lettre spécifique
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
filteredPeople = people.filter((person) => person.name.startsWith("B"));
averageAge = filteredPeople.age / filteredPeople;
// résultat attendu :
console.log(averageAge); // 20
