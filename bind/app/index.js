document.addEventListener("DOMContentLoaded", function () {
  const prise = document.getElementById("prise");

  prise.addEventListener("submit", function (event) {
    event.preventDefault();

    const espece = document.getElementById("espece").value;
    console.log(`Espèce sélectionnée : ${espece}`);

    let size = Math.ceil(document.getElementById("size").value);
    console.log(`Taille  : ${size} cm`);

    let coef;
    switch (espece) {
      case "perche":
        coef = 2;
        break;
      case "sandre":
        coef = 1.5;
        break;
      case "brochet":
        coef = 1;
        break;
      case "silure":
        coef = 0.8;
        break;
      default:
        coef = 1;
    }

    const pts = size * coef;

    console.log(`Points attribués : ${pts}`);

    const especeTab = [];
    especeTab.push({ espèce: espece, size: size, points: pts });
    console.log(especeTab);

    /*updatedScore = especeTab.filter((points) => (points.pts = points.pts).push);
    //console.log(especeTab);
TotalPts = 0;
    TotalPts = TotalPts + pts;
    TotalEsp = 0;
    TotalEsp = TotalEsp + espece;

    ScoreTab.push({ espèces: espece, size: size, Total: TotalPts });
    console.log(ScoreTab);
    console.log(`Score total : ${updatedScore}`);*/

    prise.reset();
  });
});
