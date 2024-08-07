let tab = [56, 78, 67, 89];

//const newTab = tab.map((val) => val * 2);
// const newTab = tab.reduce((a, b) => a * b, 1);
//const newTab = tab.slice(2);
//tab.reverse(); // tableau origine référencé
//tab.shift();
const newTab = tab.filter((nombre) => nombre > 70);
console.log(tab);
console.log(newTab);
