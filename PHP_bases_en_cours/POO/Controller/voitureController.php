<?php
require ROOT_PATH . 'Model/voiture.php';
class voitureController
{

    private object $voiture;

    public function __construct()
    {
        $this->voiture = new Voiture();
    }
    public function setPuissance($nouvellePuissance)
    {
        $this->voiture->setPuissance($nouvellePuissance);
    }
    public function setVitesse($nouvelleVitesse)
    {
        $this->voiture->setVitesse($nouvelleVitesse);
    }
}
