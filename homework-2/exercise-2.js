var inputNumber = prompt('Enter any number');
var number = 1;

for (i = 0; i < inputNumber; i++){
  number *= (inputNumber - i);
}
alert(inputNumber + '! = ' + number);