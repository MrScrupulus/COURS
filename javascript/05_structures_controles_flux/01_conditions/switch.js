let couleur = "vert";

/*if (couleur === "vert") {
    console.log("vous pouvez souscrire une assurance chez nous.");
} else if (couleur === "rouge") {
    console.log("vous ne pouvez pas souscrire une assurance chez nous.")
}else {
    console.log("Besoin d'informations supplémentaires.")
}*/

switch (couleur) {
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
    break;
}
