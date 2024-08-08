// Exercice 2 :
// créer un tableau d'utilisateurs vide
// y stocker 2 ou plus utilisateurs qui possèdent un "nom" et un "service" (ex : "informatique")
// Créer une fonction qui permets de changer le service d'un utilisateur en y passant son nom, le nouveauservice
//et le tableau d'origine
//cette fonction retourne un nouveau tableau à jour
// mettre à jour le tableau de base et l'afficher pour vérifier le changement
//destructuration et spread operator
// console.log(tabUsers) du tbleau d'origine modifié
let tabUsers = [];
const User = {
  nom: "Laura",
  service: "couverture",
};
const User2 = {
  nom: "Perrine",
  service: "ressources humaines",
};
const User3 = {
  nom: "Juan",
  service: "masseur",
};
const User4 = {
  nom: "Geoffrey",
  service: "hibernation",
};

tabUsers = [...tabUsers, User, User2, User3, User4];
console.log(tabUsers);

function newService(nomUser, newService, ...args) {
  //Penser à la fuson (écrasement) des differents tableaux futurs
  let newUsers = [];
  for (const user of args) {
    const { nom, service } = user;
    if (nom == nomUser) {
      newUsers = [...newUsers, { nom: nomUser, service: newService }];
    } else {
      newUsers = [...newUsers, user];
    }
  }
  return newUsers;
}
let newtabUser = newService("Perrine", "masseuse", ...tabUsers);
let newtabUser2 = newService("Laura", "Drap", ...newtabUser);
let newtabUser3 = newService("Geoffrey", "réveil", ...newtabUser2);
let newtabUser4 = newService("Juan", "Génie du mal", ...newtabUser3);

tabUsers = [...newtabUser4];
console.log(tabUsers);
//console.log(newtabUser);
