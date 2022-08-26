'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let result = 0;
num = num.split("").reverse();
for (let i = 0; i < num.length; i++) {
  result = result + ((Math.pow(2,i)*parseInt(num[i])));
    }
 return result;


}
function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  while (num > 0) {
    binario.unshift(num % 2);
    num = Math.floor(num / 2)
  }
  return binario.join("");
}







module.exports = {
  BinarioADecimal,
  DecimalABinario,
}