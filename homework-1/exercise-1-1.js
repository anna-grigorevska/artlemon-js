/* Переменная хранит в себе значение от 0 до 9.
 Написать скрипт который будет выводить слово “один”, 
 если переменная хранит значение 1. Выводить слово “два”
- если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. */

var x = +prompt('enter a number from 0 to 9');

var resultat = '';

switch (x) {
  case 0: resultat = 'zero'; break;
  case 1: resultat = 'one'; break;
  case 2: resultat = 'two'; break;
  case 3: resultat = 'three'; break;
  case 4: resultat = 'four'; break;
  case 5: resultat = 'five'; break;
  case 6: resultat = 'six'; break;
  case 7: resultat = 'seven'; break;
  case 8: resultat = 'eight'; break;
  case 9: resultat = 'nine'; break;
  default: resultat = 'no number';
}

console.log(resultat);