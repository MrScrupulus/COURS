// Exercie 1 :
// Créez un objet "personne" avec les propriétés "nom", "age" et "ville".

//Affectez des valeurs à ces propriétés.

//Affichez ces valeurs à l'aide console.log().

/*function Personne(nom, age, ville) {
  this.nom = nom;
  this.ville = ville;
  this.age = age;
}*/

let personne = {
  nom: "Vénus",
  age: "beaucoups de siècles",
  ville: "mont Olympe",
  parler: function () {
    console.log(
      `Bonjour je m'appelle ${this.nom}, j'ai ${this.age} et je vis au ${this.ville}`
    );
  },
};
personne.parler();
console.log(personne);
