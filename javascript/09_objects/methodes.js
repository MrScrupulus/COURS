let personne = {
  // clé => valeur
  nom: "Hendrix",
  prenom: "Jimi",
  age: "27",
  parler: function () {
    console.log(`Bonjour je m'appelle ${this.nom}`);
  },
};

personne.parler(); // => Bonjour
