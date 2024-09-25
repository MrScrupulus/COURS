<?php

$bonjour = 'Bonjour';
$tout = 'tout ';
$leMonde = 'le monde';
// $bonjour .= " $tout ";
// $bonjour .= "$leMonde\n"; // $bonjour = $bonjour . leMonde

echo $bonjour;
echo $bonjour . ' ' . $leMonde . PHP_EOL; //Bonjour le monde
echo "$bonjour $leMonde\n" . PHP_EOL; //Bonjour le monde

# $jour = 'aujourd'hui'; // erreur d'interprétation
$jour2 = 'aujourd\'hui'; // échappement ok
#$jour3 = "aujourd'hui"; // ok
