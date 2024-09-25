<?php

# '=' (simple égal)
$fruit = 'Pomme';

# '==' (doucle égal)
$test = '123';
$test2 = 123;
// #echo $test == $test2; //true =1

// # '===' (triple égal)
// echo !($test === $test2); // true
// if (!($test === $test2)) {
//     echo 'test échoué!';
// } else {
//     echo 'Même valeur et type';
// }

# '!=' | '<>' (< + >)
// if ($test != $test2) {
//     echo 'Valeurs différentes';
// } else {
//     echo 'Même valeurs!';
// }

# '>' (strictement supérieur) | '<' (strictement inférieur)
$nombre1 = 10;
$nombre2 = 100;

// if ($nombre1 >= $nombre2) {
//     echo 'le nombre 1 est strictement supérieur au nombre 2';
// } else if ($nombre1 < $nombre2) {
//     echo 'le nombre 1 est strictement inférieur au nombre 2';
// } else {
//     echo 'le nombre 1 est égal au nombre 2';
// }
// if ($nombre1 > $nombre2 && $nombre2 < $nombre3) {
//     echo "$nombre1,  $nombre2 et $nombre3 sont dans l'ordre décroissant";
// } else {
//     echo "$nombre1,  $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";
// }

# 'AND' ou '&&' (et)| 'OR' ou '||' (ou) | 'XOR' 
$nombre1 = 34;
$nombre3 = 67;
$nombre2 = 56;
$nombre4 = 10;
// terniaire + passage par un test (true ou false)
$test = $nombre1 > $nombre2 && $nombre2 > $nombre3 || $nombre4 === 10;
$texte = "$nombre1 et $nombre2 et $nombre3";
$texte2 = "dans l'ordre décroissant";


echo $texte . (!$test ? " ne sont pas " : " sont ") . $texte2;
