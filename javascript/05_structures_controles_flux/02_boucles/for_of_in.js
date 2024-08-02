let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];

for (const couleur of couleurs) {
  /*switch (couleur) {
    case "vert":
      console.log("vous pouvez souscrire une assurance chez nous.");
      break;
    case "rouge":
      console.log("vous ne pouvez pas souscrire une assurance chez nous.");
      break;
    case "orange":
      console.log("Besoin d'informations supplémentaires.");
      break;
    default:
      console.log("couleur non reconnu.");
      break;*/ // Complémentaire à étudier

  console.log(couleur); // afficher tous les éléments du tableau couleurs
}

for (const indexOfCouleur in couleurs) {
  console.log(indexOfCouleur); // afficher tous les éléments du tableau couleurs
}
