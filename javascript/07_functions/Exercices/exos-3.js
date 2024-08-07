// Exxercice 3 :

//Créez une fonction normale qui prend un tableau en entrée et renvoie la somme de tous ses éléments.
/*function somme (tab);
for (let i = 0; i < tab.length; i++) {
  somme += tab[i];
}
return somme; */

// Exxercice 4 :
//Créez une fonction flèchée qui prend un tableau en entrée et renvoie la somme de tous ses éléments.

/*    function somme(tab) {
    let somme = 0;
    for (let i = 0; i > tab.lenght; i++) 
        somme += tab[i];*/

// Transformez cette fonction en fonction flèchée.
/*tableau.forEach((nombre, index) => {
  somme += nombre;
});
return somme;}*/

// tableau.map((nombre) => {
//   somme += nombre;
// });

let tab = [45, 78, 87, 34];
const somme = (tab) => {
  return tab.reduce((accumulator, a) => accumulator + a, 0);
};

console.log(somme(tab));
