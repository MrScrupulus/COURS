//Exercice 2 :
//Créer un tableau d'objets "personne" avec au moins 3 éléments.
//Parcourir ce tableau à l'aide d'un boucle pour afficher les noms de toutes les personnes.
function Personne(nom, ville, annecdote) {
  this.nom = nom;
  this.ville = ville;
  this.annecdote = annecdote;
}
let personne1 = new Personne("Zeus", "Mont Olympe", "la foudre m'amuse"); // Construction d'un objet personne
let personne2 = new Personne(
  "Vénus",
  "Mont Olympe",
  "on m'appelle aussi Vénus la Callipyge"
);
let personne3 = new Personne(
  "Hades ",
  "les Enfers",
  "je ne vois pas trop le soleil"
);

//console.log("personne1 :", personne1);
//console.log("personne2 :", personne2);
//console.log("personne3 :", personne3);
//let push.tab = [personne1, personne2, personne3];

let tab = [personne1, personne2, personne3];
for (let i = 0; i < tab.length; i++) {
  console.log(tab[i].nom);
  console.log(tab[i].ville);
  console.log(tab[i].annecdote);
}

/*for (const personne of tab) {
  console.log(personne.nom);
  console.log(personne.ville);
  console.log(personne.annecdote);
}*/
/*tab.forEach((personne) => {
  console.log(personne.nom);
  console.log(personne.ville);
  console.log(personne.annecdote);
});*/
/*tab.map((personne) => {
  console.log(personne.nom);
  console.log(personne.ville);
  console.log(personne.annecdote);
});*/
/*const newTab = tab.filter((personne) => {
  personne.ville === "Mont Olympe";
  console.log(tab);
  console.log(newTab);
});
for (const personne of newTab) {
  console.log(personne.nom);
}*/
