// Exercice 3 : Grouper les personnes par tranche d'âge (moins de 25, 25 à 35, plus de 35)
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 },
];

// votre code ici .... //
let ageGroups = {
  lessThan25: [],
  between25And35: [],
  moreThan35: [],
};
for (let person of people) {
  if (person.age < 25) {
    ageGroups.lessThan25.push(person.name);
  } else if (person.age >= 25 && person.age < 35) {
    ageGroups.between25And35.push(person.name);
  } else {
    ageGroups.moreThan35.push(person.name);
  }
}
console.log(ageGroups);
//console.log(ageGroups);
// {
//   lessThan25: ["Bob"],
//   between25And35: ["Alice", "Charlie", "David"],
//   moreThan35: ["Eve"]
// }
