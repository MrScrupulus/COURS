// Exercice 2 :
let couleur = "orange";
//Untilisez une instruction "switch" pour vérifier la valeur d'une variable "couleur".
switch (couleur) {
  case "rouge":
    console.log("rouge signifie danger");
    break;
  case "orange":
    console.log("orange signifie risque");
    break;
  case "vert":
    console.log("vert signifie sécurité");
    break;
}

//affichez la significaation correspondante (par exemple "rouge" signifie "danger", vert signifie "sécurité", etc)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rl.question(
    "Veuillez saisir une couleur ou quitter ['Au revoir'] : ",
    function (couleur) {
      if (couleur === "Au revoir") {
        console.log("Bisous");
        return rl.close(); //closing RL and returning from function.
      }
      //we need some base case, for recursion

      switch (couleur) {
        case "vert":
          console.log("sécurisé");
          break;
        case "jaune":
          console.log("attention");
          break;
        case "rouge":
          console.log("dangereux");
          break;
        default:
          console.log("couleur non reconnue! ['rouge', 'vert', 'jaune']");
          break;
      }
      recursiveAsyncReadLine(); //Calling this function again to ask new question
    }
  );
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
