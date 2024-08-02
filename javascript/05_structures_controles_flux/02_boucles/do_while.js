const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* rl.question("Saisissez votre age : ", (age) => {
   if (age >= 18) {
    console.log("Vous êtes majeur!");
  } else {
    console.log("Trop jeune !!");
  }
  rl.close();
}); */

let nombre = 10;
do {
  console.log(nombre);
  nombre--;
} while (nombre > 5);
