<?php


require('lib/functions.php');
require('lib/utils.php');
$tab = [];
$fileName = __DIR__ . "\\" . "sauv.csv";
csvToArray($tab, $fileName);


$personne = (object)["prenom" => "tata", "nom" => "toto", "age" => 16];
$personne2 = (object)["prenom" => "Emile", "nom" => "Deballon", "age" => 34];
array_push($tab, $personne, $personne2);
// $tab = [$personne, $personne2];
// print_r($tab);

$header = ["prenom", "nom", "age"];
arrayToCsv($fileName, $tab, ",", $header);
change_color("blue");
print_r($tab);
change_color('green');
change_color(''); //couleur par défaut

change_color("blue");
print_r($tab);
change_color('purple');
echo (PHP_EOL . PHP_EOL .
    "----------------------------" . PHP_EOL .
    "1. Chercher une personne" . PHP_EOL .
    "2. Supprimer une personne" . PHP_EOL .
    "3. Pour quitter" . PHP_EOL);
change_color("");

while (true) {
    $saisie = readline('veuillez choisir un menu ou 9 pour quitter : ');
    switch ($saisie) {
        case 1:
            require_once('personnes/lister_personnes.php');
            break;

        case 2:
            require_once('personnes/supprimer_personnes.php');
            break;
        case 3:
            exit;
            break;
    }
}
