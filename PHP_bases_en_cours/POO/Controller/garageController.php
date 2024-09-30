<?php

require ROOT_PATH . 'Model/garage.php';
require ROOT_PATH . 'LIB/init.php';

class GarageController
{
    private object $garage;


    public function __construct()
    {
        $this->garage = new Garage();
    }
    public function enregistrerVoiture($nouvelleVoiture)
    {
        $tab = $this->garage->getTabVoiture();
        $tab[] = $nouvelleVoiture;
        $this->garage->setTabVoiture($tab);
    }

    public function afficherVoiture()
    {
        // echo "Concession: " . $this->garage->getNomGarage() . "\n";
        // echo "Vehicules: ";
        return $this->garage->getTabVoiture();
        // echo $voiture->getNom() . ", ";
        // echo $voiture->getPuissance() . ", ";
        // echo $voiture->getVitesse() . ", ";

    }
}
