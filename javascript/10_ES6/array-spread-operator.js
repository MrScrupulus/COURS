let tabColors = ["bleu", "rouge", "vert"];
let tabColors2 = ["rose", "violet", "orange"];

let tabColors3 = tabColors.concat(tabColors2);
//même résultat avec spread operator que concat
let tabColors4 = [...tabColors, ...tabColors2];

console.log(tabColors3);
console.log(tabColors4);

//tabColors.push("jaune");
//console.log(tabColors);
//tabColors = [...tabColors, "fushia", "noir"];
//console.log(tabColors);
