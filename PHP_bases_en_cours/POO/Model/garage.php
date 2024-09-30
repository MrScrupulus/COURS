<?php


class Garage
{
    private string $nomGarage;
    private array $tabVoiture = [];



    public function __construct($nomGarage = "Chez Bernard")
    {
        $this->nomGarage = $nomGarage;
    }


    /**
     * Get the value of nomGarage
     *
     * @return string
     */
    public function getNomGarage(): string
    {
        return $this->nomGarage;
    }

    /**
     * Set the value of nomGarage
     *
     * @param string $nomGarage
     *
     * @return self
     */
    public function setNomGarage(string $nomGarage): self
    {
        $this->nomGarage = $nomGarage;

        return $this;
    }

    /**
     * Get the value of tabVoiture
     *
     * @return array
     */
    public function getTabVoiture(): array
    {
        return $this->tabVoiture;
    }

    /**
     * Set the value of tabVoiture
     *
     * @param array $tabVoiture
     *
     * @return self
     */
    public function setTabVoiture(array $tabVoiture): self
    {
        $this->tabVoiture = $tabVoiture;

        return $this;
    }
}
