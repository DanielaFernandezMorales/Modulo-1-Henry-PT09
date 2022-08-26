'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 var factores =[1];
var divisor = 2;
  while(num !== 1) {
    if (num % divisor === 0){
    factores.push(divisor)
  num /= divisor;}
  else {
    divisor ++;
  }}
   return factores}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;
  for( let i = 0;  i < array.length; i++ ){
    for( let j = i+1; j < array.length; j++ ){
      if( array[i] > array[j ] ){
          aux = array[i];
          array[i] = array[j];
          array[j] = aux;
      }
    }
  }
   return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for (let i = 1; i < array.length; i++){
  //guarda posicion anterior
  let x = i - 1;
  //guarda valor actual
  let temp= array[i];
  while (x >=0 && temp < array[x]){
// el valor actual es menor al anterior?
array[x+1] = array[x];
  x--}
  array[x+1] = temp;
}
return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //identifixcar el numero mas chico
  for (let i = 0; i < array.length; i++) {
    //asumo que el numero más chico esta en el i
    let min = i;
    //recorre el array buscando el numero mas chico
    for (let x = i+1; x < array.length; x++) {
      if(array[min]>array[x])
        min=x;
        //actualizamos el indez del numero mas chico
      }
      //intercambiamos valores entre el numero mas chico y el valor
      if(i!==min){
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp; 
      }

    }
    
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
