// pas de const si spread operator utilisé
let user = {
  nom: "test",
  prenom: "toto",
  age: 120,
  taille: "très petit",
};

const { age, taille, ...rest } = user;

//user.ville = "Arras";
//user = { ...user, ville: "Arras" };

//console.log(user);
console.log(age, taille, rest);
