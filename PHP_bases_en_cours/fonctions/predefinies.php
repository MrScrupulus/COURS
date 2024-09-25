<?php

echo date('d/m/Y') . PHP_EOL; // => 25/09/2024

# strlen()
$phrase = ' Mettez la phrase que vous voulez ';
echo strlen($phrase) . PHP_EOL; //34


#substr()
// $paragraphe = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
// Accusantium cum itaque suscipit quae cupiditate doloremque tenetur magnam natus inventore iure, 
// ut porro temporibus consequatur quibusdam, dolore error? Odit, possimus reprehenderit!";
// $excerpt = substr($paragraphe, 0, 22) . '...<a href="#">Lire la suite.</a>';
// echo $excerpt;

# isset()
$pseudo = 'toto';
//if ($pseudo)  // erreur si $pseudo n'existe pas
if (isset($pseudo)) {
    echo 'la variable $pseudo existe ';
} else {
    echo 'la variable $pseudo n\'existe pas ';
}

# empty()
$pseudo = 'toto';
//if ($pseudo)  // erreur si $pseudo n'existe pas
if (empty(trim($pseudo))) {
    echo 'la variable $pseudo est vide';
} else {
    echo 'la variable $pseudo n\'est pas vide';
}
