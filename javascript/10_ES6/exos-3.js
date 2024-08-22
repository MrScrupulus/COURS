let tabUsers = [
  {
    nom: `John`,
    age: 15,
  },
  {
    nom: `Marc`,
    age: 20,
  },
];
const rechercherUtilisateurParNom = (nomRecherche) => {
  let trouver = false; //boulean
  for (const name of tabUsers) {
    if (name.nom === nomRecherche) {
      trouver = true;
    }
  }
  if (trouver) {
    console.log(`${nomRecherche} existe`);
  } else {
    console.log(`${nomRecherche} n'existe pas`);
  }
};

rechercherUtilisateurParNom(`Marc`); // => Marc existe!
rechercherUtilisateurParNom(`Paul`); // => Paul n'existe pas!/

const modifierAge = (nom, age) => {
  for (const name of tabUsers) {
    if (name.nom == nom) {
      name.age = age;
    }
  }
};

modifierAge(`Marc`, 19);
console.log(tabUsers);
