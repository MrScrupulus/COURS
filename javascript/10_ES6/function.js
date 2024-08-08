/**
 * fonction qui prend une liste de nombres non limitée
 * et qui renvoie l'addition de ces nombres
 * @author Mr_Scrupulus <mr.scrupulus@gmail.com>
 * @param {number []} args
 * @returns {number}
 *
 */
function add(...args) {
  let result = 0;
  for (const nombre of args) result += nombre;
  return result;
}

const result = add(1, 7, 69, 34, 27, 67, 83);
console.log(result);
