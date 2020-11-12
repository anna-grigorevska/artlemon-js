/* Переменная хранит в себе значение от 0 до 9.
 Написать скрипт который будет выводить слово “один”, 
 если переменная хранит значение 1. Выводить слово “два”
- если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. */

var x = prompt('enter a number from 0 to 9');

if(x == 0){
  console.log('zero');
}else if(x == 1){
  console.log('one');
}else if(x == 2){
  console.log('two');
}else if(x == 3){
  console.log('three');
}else if(x == 4){
  console.log('four');
}else if(x == 5){
  console.log('five');
}else if(x == 6){
  console.log('six');
}else if(x == 7){
  console.log('seven');
}else if(x == 8){
  console.log('eight');
}else if(x == 9){
  console.log('nine');
}else{
  console.log('no number');
}