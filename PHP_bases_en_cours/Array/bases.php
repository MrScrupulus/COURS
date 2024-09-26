<?php

# array
// $prenom = "Nicolas, Marie, Grégoire, Sylvain, Céline";
// echo $prenom;

$listePrenoms = array("Nicolas", "Marie", "Grégoire", "Sylvain", "Céline");
// print_r($listePrenoms2);  // affiche le tableau


echo $listePrenoms[2]; // afficher un objet du tableau


$listePrenoms2[] = 'tito'; // ajouter des objets

var_dump($listePrenoms2); // affiche le tableau avec type, valeurs etc 

$listePrenoms2 = [
    "Nicolas",
    "Marie",
    "Grégoire",
    "Sylvain",
    "Céline"
];
array_push($listePrenoms2, 3.1416, "Albert"); // ajouter des objets
$getCount = count($listePrenoms2);
$isPoint = $getCount - 1;

for ($i = 0; $i < $getCount; $i++) {
    if (!is_numeric($listePrenoms2[$i]) && strlen(($listePrenoms2) > 4)) {
        if ($isPoint) {
            print_r("$listePrenoms2[$i]. ");
        } else {
            print_r("$listePrenoms2[$i], ");
        }
    }
}
foreach ($listePrenoms2 as $cle => $val) {
    $isPoint = count($listePrenoms2) - 1 === $cle;
    if (!is_numeric($val) && strlen(($listePrenoms2) > 4)) {
        print_r("$val" . (!$isPoint ? ', ' : '.'));
    }
}
$lastDot = implode(",\n", $listePrenoms2) . '.';
echo "$lastDot";
