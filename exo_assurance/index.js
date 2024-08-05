let




let age = Number;
if (age < 25) {
  console.log("+1");
} else if (age > 25) {
  console.log("-1");
}

let permis = Number;
if (permis < 2) {
  console.log("+1");
} else if (permis > 2) {
  console.log("-1");
}

let accident = Number;
if (accident == 0) {
  console.log("-1");
} else if ("accident >0" && "accident <1") {
  console.log("+2");
} else if (accident >1) {
  console.log("+3");
}

switch (score) {
  case "+3":
    console.log("refus");
  case "+1":
    console.log("tarif rouge.");
    break;
  case "<=0" && ">-2":
    console.log("tarif orange.");
    break;
  case "<=-3":
    console.log("tarif vert.");
    break;
  default:
    console.log("tarif bleu.");
    break;
}



//let scrore = ["bleu", "vert", "orange", "rouge"];
//for (let i = 0; i < couleur.length; i++) {
  //console.log(couleur[i]);
//}
