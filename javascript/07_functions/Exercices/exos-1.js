// Exxercice 1
let nombre = 4;
// Créer une fonction normale qui prend un nombre entrée et renvoie son carré.
function carre(nombre) {
  return nombre * nombre;
}

console.log(carre(nombre)); // → 16

// Créer une fonction flèchée qui prend un nombre entrée et renvoie son carré.
// Transformez cette fonction en fonction flèchée.
//function carre(nombre) {
//return nombre * nombre;
function carre = nombre => nombre * nombre;
//résultat attendu :
console.log(carre(4)); // → 16
console.log(carre(5)); // → 25
// etc ...
