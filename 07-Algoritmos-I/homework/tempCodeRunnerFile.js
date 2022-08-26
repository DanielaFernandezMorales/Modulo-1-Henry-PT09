function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 var factores =[];
var numero;
 function esPrimo (num){ 
  for (var i = 2; i <= num; i++) {
  if (num % i === 0) {
    return false;
  }
} return true;
}

  while(num >= 1) 
  {num % esPrimo(num) === 0;
    factores.push(esPrimo(num))
  num /= esPrimo(num)}
   return factores.sort();}
   console.log(factorear(15))