<?php
// function calculTva()
// {
//     return 100 * 1.2;
// }
// echo calculTva();

function calculTva($prix, $tauxTva)
{
    return $prix * $tauxTva;
}
echo calculTva(100, 1.2);

//valeur par défaut

// define("TVAVINGTPOURCENT", 1.2);
// define("TVAVINGTCINQPOURCENT", 1.25);

// function calculTva($prix, $tauxTva = 1.2)
// {
//     $prixCalcule = $prix * $tauxTva;
//     return $prixCalcule;
// }

// echo calculTva(100, 1.25);
