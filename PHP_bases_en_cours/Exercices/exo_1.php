<?php

echo meteo("hiver", 1); // Nous sommes en hiver et il fait 1 degré (ou 0 ou -1)
echo PHP_EOL;
echo meteo("hiver", 5); // Nous somme en hiver et il fait 5 degrés



// function meteo($saison, $temperature)
// {
//        if ($temperature <= 1 && $temperature >= (-1)) {
//         return "Nous sommes en $saison et il fait $temperature degré";
//     } else {
//         return "Nous sommes en $saison et il fait $temperature degrés";
//     }
// }

function meteo($saison, $temperature)
{
    $getPluriel = $temperature > 1 || $temperature < -1;
    $avecOuSansS = $getPluriel ? 's' : '';
    return "Nous sommes en $saison et il fait $temperature degré$avecOuSansS";
}
