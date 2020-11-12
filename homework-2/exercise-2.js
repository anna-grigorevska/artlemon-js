/*Переменная содержит в себе число.
 Написать скрипт который посчитает факториал этого числа.
*/

var inputNumber = prompt('Enter any number');
var number = 1;

for (i = 0; i < inputNumber; i++){
  number *= (inputNumber - i);
}
alert(inputNumber + '! = ' + number);