<?php
require 'LIB/init.php';

require ROOT_PATH . 'Controller/garageController.php';
require ROOT_PATH . 'Controller/voitureController.php';

// require("POO/Model/garage.php");

// $voiture1 = new Voiture("Mercedes", 280, 5);
//$voiture2 = new Voiture("Audi", 182, 7);

$garageController = new garageController();
// $garage1->enregistrerVoiture($voiture1);
$voiture1 = new voitureController();
$voiture1->setPuissance(9);
$voiture1->setVitesse(280);
// print_r($garage1->getTabVoiture());
// $voiture2 = new Voiture("Audi", 260, 5);
$garageController->enregistrerVoiture($voiture1);
$garageController->enregistrerVoiture($voiture2);
print_r($garageController->afficherVoiture());
//print_r($garage1->getTabVoiture());
