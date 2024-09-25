<?php

echo date('d/m/Y') . PHP_EOL; // => 25/09/2024

# strlen()
$phrase = ' Mettez la phrase que vous voulez ';
echo strlen($phrase) . PHP_EOL; //34


#substr()
$paragraphe = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Accusantium cum itaque suscipit quae cupiditate doloremque tenetur magnam natus inventore iure, 
ut porro temporibus consequatur quibusdam, dolore error? Odit, possimus reprehenderit!";
$excerpt = substr($paragraphe, 0, 22);
echo $excerpt;
