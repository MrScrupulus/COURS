// initialiser 3 variables mot1, mot2 et mot3
// savoir si ils sont dans l'ordre alphabétique

let mot1 = "Anthéa";
let mot2 = "Iris";
let mot3 = "Callipyge";

if (mot1 < mot2 && mot2 < mot3) {
  console.log(
    "${Anthéa}, ${Iris}, ${Callipyge} Les mots sont dans l'ordre alphabétique"
  );
} else {
  console.log(
    "${Anthéa}, ${Iris}, ${Callipyge} Les mots ne sont pas dans l'ordre alphabétique"
  );
}
