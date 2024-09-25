<?php



# for ()

for ($i = 0; $i < 1000; $i++) {
    echo "$i\n";
}


for ($i = 0; $i >= -1000; $i--) {
    echo "$i\n";
    if ($i === 5) exit; // on conditionne
}
