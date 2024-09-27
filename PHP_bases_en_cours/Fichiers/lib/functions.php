<?php
//Foncrtion qui crée ou modifie une sauvegarde en fichier '.csv'
// à partir d'un tableau d'objet

function arrayToCsv($fileName, &$donnee, $delimiter = ",", $header = array())
{
    $file = fopen($fileName, 'w');
    fputcsv($file, $header, $delimiter);
    foreach ($donnee as $row) {

        $row = (array) $row;

        fputcsv($file, $row, $delimiter);
    }

    fclose($file);
}

function csvToArray(&$donnee, $fileName, $delimiter = ",")
{
    if (!file_exists($fileName) || !is_readable($fileName)) return FALSE;
    $header = NULL;
    if (($handle = fopen($fileName, 'r')) !== FALSE) {
        while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE) {
            if (!$header) {
                $header = $row;
            } else
                $donnee[] = array_combine($header, $row);
            var_dump($donnee);
        }
    }
    fclose($handle);
}
