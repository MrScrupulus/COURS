// Exercice 3 :
//Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année".

//Ajoutez une méthode "afficher" à cet objet qui affiche toutes les propriétés de l'objet dans la console
/*this.marque = marque;
this.modele = modele;
this.annee = annee;*/

let Voiture = { 
    marque: "Corvette", 
    modele: "C1", 
    annee: "1962"};

afficher function(marque, modele, annee) {
    console.log(`Voiture de marque ${this.marque}, modèle ${this.modele} et année ${this.annee}`);
   
};

