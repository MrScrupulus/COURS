//fetch APi

const user = {
  nom: "test",
  prenom: "toto",
  age: 120,
  taille: "très petit",
};

//récupération des champs
const nom = "tata";
const age = 122;

//renvoyer l'objet modifié à l'APi
//const newUser = {
//name: name,
//prenom: "toto",
//age: age,
//taille: "très petit",
//};

const newUser = {
  //objet d'origine destructuré
  ...user,
  // attributs modifiés
  //  nom: name,
  //  age: age,
  nom, // Si le nom de la variable et de l'attribut sont identiques
  age, // age: age
};

console.log(newUser);
