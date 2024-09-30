<?php


class Voiture
{
    private string $nom;
    private int $vitesse;
    private int $puissance;



    public function __construct($nom = 'BMW', $vitesse = 250, $puissance = 7)
    {
        $this->nom = $nom;
        $this->vitesse = $vitesse;
        $this->puissance = $puissance;
    }

    public function getNom()
    {
        return $this->nom;
    }
    public function getVitesse()
    {
        return $this->vitesse;
    }
    public function setVitesse($nouvelleVitesse)
    {
        $this->vitesse = $nouvelleVitesse;
    }
    public function getPuissance()
    {
        return $this->puissance;
    }
    public function setPuissance($nouvellePuissance)
    {
        $this->puissance = $nouvellePuissance;
    }
}

// $voiture1 = new Voiture('Mercedes', 280, 5);
// //echo $voiture1; //  Object of class Voiture could not be converted to string 
// echo $voiture1->getNom();
// echo "\n";

// echo $voiture1->getVitesse() . 'CV';
// echo "\n";
// $voiture1->setPuissance(7);
// echo "Nouvelle puissance : " . $voiture1->getPuissance() . "CV";
// echo "\n";
// echo $voiture1->getVitesse() . 'Km/h';
