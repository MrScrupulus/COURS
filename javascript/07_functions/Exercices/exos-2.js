// Exxercice 2 :
// Créez une fonction normale qui prend deux nombres entrés et renvoie leur somme.
let nombre1 = 4;
let nombre2 = 5;

function addition(nombre1, nombre2) {
  const result = nombre1 + nombre2;
  return result;
}

//Transformez cette fonction en fonction flèchée.
const addition = (nombre1, nombre2) => nombre1 + nombre2;

console.log(addition(4, 5));

// → 9
