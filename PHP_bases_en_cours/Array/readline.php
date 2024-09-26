<?php

// $prenom = readline("Veuillez saisire un nombre : "); // stop le process
// echo gettype($prenom);

// $nombre = intval(readline("Veuillez saisire un nombre : ")); // stop le process

// if ($nombre === 'toto') echo 'ok';
// echo gettype($nombre);

//$prenom = readline("veuillez saisir un prénom ou '\q' : ");

$prenom = readline("veuillez saisir un prénom ou '\q' : ");
$myTab = [$prenom];



while ($prenom != "\q") {
    $prenom = readline("veuillez saisir un prénom ou '\q' : ");
    $prenomObj = (object)['prenom' => $prenom];
    var_dump($prenomObj);
    echo gettype($prenomObj);
    if (!(strtolower($prenom) === "\q")) {
        array_push($myTab, $prenom);
    } else {
        break;
    }
}
print_r($myTab);
