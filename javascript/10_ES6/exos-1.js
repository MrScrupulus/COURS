#!/usr/bin/env node
// créer quelques objets "voiture" (min3)=> 2 attributs : marque et puissance

// mettre ces objets dans un tableau

//créer une fonction qui prend en paramètre le tableau et une marque recherchée
// => nous renvoie le nombre de  voitures trouvées

//Obligation d'utiliser uniquement la destructuration et le spread operator
// pas de voiture.marque dans le code

//rechercheMarque("corvette", ??); // => nombre de voitures trouvées

//3fois (...)
let tabVoitures = [];
const voiture = {
  marque: "audi",
  puissance: 100,
};
const voiture2 = {
  marque: "audi",
  puissance: 120,
};
const voiture3 = {
  marque: "corvette",
  puissance: 150,
};
tabVoitures = [...tabVoitures, voiture, voiture2, voiture3];
console.log(tabVoitures);

function rechercheMarque(marqueRecherchee, ...args) {
  let cpt = 0;
  for (const voiture of args) {
    const { marque } = voiture;
    if (marqueRecherchee === marque) {
      cpt++;
    }
  }
  console.log(`Il y a ${cpt} voitures de marque ${marqueRecherchee}`);
}

rechercheMarque("audi", ...tabVoitures);
