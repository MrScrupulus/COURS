<?php
$personne = (object)["prenom" => "tata", "nom" => "toto", "age" => 16];
$personne2 = (object)["prenom" => "Emile", "nom" => "Deballon", "age" => 34];
$tab = [$personne, $personne2];
// print_r($tab);
// $header = array_keys($tab);

$fileName = __DIR__ . "\\" . "sauv.csv";

$header = ["prenom", "nom", "age"];
function arrayToCsv($fileName, $donnee, $delimiter, $header)
{
    $file = fopen($fileName, 'w');
    fputcsv($file, $header, $delimiter);
    foreach ($donnee as $row) {
        // var_dummp($row);
        $row = (array) $row;
        // var_dump($row);
        fputcsv($file, $row, $delimiter);
    }
    // fputcsv($file, $header, ",");
    fclose($file);
}
arrayToCsv($fileName, $tab, ",", $header);
// $file = fopen($fileName, "a");

// fwrite($file, "Bonjour");
