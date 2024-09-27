<?php

class Personnage
{
    //propriétés ou attributs
    /**
     * Nom du personnage
     * 
     * @var string $prenom prénom du personnage
     */

    public string $prenom;
    public int $pointsDeVie;
    public int $force;
    public int $age;
    public string $email;

    public function __construct(
        $prenom,
        $pointsDeVie,
        $force,
        $age,
        $email
    ) {
        $this->prenom = $prenom;
        $this->pointsDeVie = $pointsDeVie;
        $this->force = $force;
        $this->age = $age;
        $this->email = $email;
    }
    public function attaquer($personnage)
    {
        $personnage->pointsDeVie -= 825;
    }

    // changer le nom d'un personnage ...
    public function change($prenom)
    {
        $this->prenom = $prenom;
    }
    public function __toString()
    {
        $txt = '';
        $txt .= "Nom: $this->prenom\n ";
        $txt .= "Points de vie: $this->pointsDeVie\n ";
        $txt .= "Force: $this->force\n ";
        return $txt;
    }
}


$personnage1 = new Personnage("Christophe Le Gris", 1000, 878, 3875, 'christophe_legris@mordor.com'); //instanciation
$personnage2 = new Personnage("Perrine La Sage", 7001, 234, 27, 'perrine_lasage@mordor.com'); //instanciation
$personnage3 = new Personnage("Geoffrey La fée", 891, 34, 222, 'geoffrey_la_fee@mordor.com'); //instanciation
var_dump($personnage1);
var_dump($personnage2);
var_dump($personnage3);
echo $personnage1;
echo $personnage1->pointsDeVie . PHP_EOL;
$personnage2->attaquer($personnage1) . PHP_EOL;
$personnage1->change('Christophe Le Blanc');
echo $personnage1->pointsDeVie;
echo $personnage1;
//manipulation

//$personnage2->taille = 144; //impossible


// $personnage;
