function Personne(nom, prenom, age) {
  // constructor tjrs avec une majuscule
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
}

// Création d'un instance de Personne => objet
let personne1 = new Personne("Hendrix", "Jimi", "27"); // Construction d'un objet personne
let personne2 = new Personne("Young", "Neil", "78");
console.log("personne1 :", personne1);
console.log("personne2 :", personne2);
