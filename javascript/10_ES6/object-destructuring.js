const user = {
  nom: "test",
  prenom: "toto",
  age: 120,
  taille: "très petit",
};

// destructuring
//const { nom, prenom, age, taille } = user;
const { nom, age } = user;

//affichage des valeurs
console.log(user.nom);
//console.log(user.prenom);
console.log(user.age);
//console.log(user.taille);
