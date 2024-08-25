// Exercice 16 : Trouver le plus jeune et le plus vieux dans chaque ville
const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 20, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" },
  { name: "David", age: 25, city: "New York" },
  { name: "Eve", age: 40, city: "Los Angeles" },
];

// votre code ici .... //
youngestAndOldest = people.reduce((gpe, person) => {
  gpe[person.city] = gpe[person.city] || {};
  gpe[person.city].youngest = gpe[person.city].youngest || {
    name: person.name,
    age: person.age,
  };
  gpe[person.city].oldest = gpe[person.city].oldest || {
    name: person.name,
    age: person.age,
  };
  if (person.age > gpe[person.city].youngest.age) {
    gpe[person.city].youngest = person;
  }
  if (person.age < gpe[person.city].oldest.age) {
    gpe[person.city].oldest = person;
  }
  return gpe;
}, {});

// résultat attendu :
console.log(youngestAndOldest);
// {
//   "New York": { youngest: { name: "David", age: 25 }, oldest: { name: "Alice", age: 30 } },
//   "Los Angeles": { youngest: { name: "Bob", age: 20 }, oldest: { name: "Eve", age: 40 } },
//   "Chicago": { youngest: { name: "Charlie", age: 35 }, oldest: { name: "Charlie", age: 35 } }
// }
