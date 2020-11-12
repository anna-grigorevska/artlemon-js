/*Переменная хранит в себе значение,
напишите скрипт которое выводит информацию о том,
что число является нулевым либо положительным либо отрицательным.
*/

var x = +prompt('enter a number');;

if(x > 0){
  console.log('positive');
}else if(x < 0){
  console.log('negative');
}else if(x === 0){
  console.log('zero');
}