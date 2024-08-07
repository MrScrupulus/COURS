let personne = {
  // clé => valeur
  nom: "Hendrix",
  prenom: "Jimi",
  age: "27",
  //méthodes
  parler: function () {
    console.log(`Bonjour je m'appelle ${this.nom}`);
  },
};

console.log(personne.prenom);
personne.prenom = "Legolas"; // ok
console.log(personne.prenom);
personne.prenom = []; //! écrasement !
console.log(personne.prenom);
personne.taille = "60cm"; // à éviter
console.log(personne);
