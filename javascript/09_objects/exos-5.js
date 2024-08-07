// Exercice5 :
// Créez un objet "cercle" avec la propriété "rayon".

// Ajoutez une méthode "calculerPerimetre" qui calcule et renvoie le prérimètre du cercle.

// Ajoutez une méthode "calculerArea" qui calcule et renvoie l'aire du cercle.

let cercle = {
  rayon: 20,

  calculerPerimetre: function () {
    perimetre = 2 * Math.PI * this.rayon;
    console.log(
      "Le périmètre du cercle est: " + Number.parseFloat(perimetre).toFixed(2)
    );
  },
  calculerSurface: function () {
    surface = 2 * Math.PI * this.rayon * this.rayon;
    console.log(
      "Lasurface du cercle est :" + Number.parseFloat(surface).toFixed(2)
    );
  },
};

cercle.calculerPerimetre(20);
cercle.calculerSurface();
