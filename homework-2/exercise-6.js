/*Заданы две переменные для двух целых чисел, 
найти максимальное общее значение которое
нацело делит два заданных числа.*/

var integerOne = +prompt('Enter the first integer ');
var integerTwo = +prompt('Enter second integer ');

while(integerOne != 0 && integerTwo != 0){
  if(integerOne >  integerTwo){
    integerOne %= integerTwo;
  }else{
    integerTwo %= integerOne;
  }
}
alert(integerOne + integerTwo);