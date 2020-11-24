/*Написать функцию которая возвращает true/false в зависимости от того -
 все ли уникальные значения в массиве или есть не уникальные*/

function isArrayUniq (array){
  var result = true;
  for(item of array){
    var count = 0;
    for(x of array){
      if(x === item){
        count++;
      }
    }
    if(count > 1){
      result = false;
    }
  }
  return result;
}
