/*Найти сумму цифр числа которые кратны двум*/

var givenNamber = prompt('Enter any number');
var result = 0;

for(var i = 0; i <= givenNamber.length; i++){
  if(givenNamber[i]%2 === 0){
    result += +givenNamber[i];
  }
}
alert(result);
console.log(result);