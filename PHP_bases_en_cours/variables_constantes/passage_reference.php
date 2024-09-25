<?php

$fruit1 = 'mangue';
$fruit2 = 'kiwi';
// echo "Fruit1 : $fruit1\n"; // mangue
// echo "Fruit2 : $fruit2"; // kiwi
$fruit2 = &$fruit1; // passage par référence 
// echo "Fruit1 : $fruit1\n"; // mangue
// echo "Fruit2 : $fruit2"; // mangue
$fruit1 = 'banane';
echo "Fruit1 : $fruit1\n"; // banane
echo "Fruit2 : $fruit2"; // banane
