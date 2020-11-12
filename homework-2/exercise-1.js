/*Переменная содержит в себе строку. 
Вывести строку в обратном порядке.*/

var str = prompt('Enter any word');;
var result = '';

for(i = str.length-1; i >= 0; i--){
  result += str[i]
}
alert(result);