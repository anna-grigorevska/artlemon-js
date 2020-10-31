 //ПЕРЕМЕННЫЕ

 var a = 10;
 var b = 9;
 var str = "It is result:"

 var res = a; // res = 10
 var sum = a + b; //sum = 19
 var sumStr = str + sum; //lessen-1.js:13 It is result:19

 console.log("it is result: ");
 console.log(sum);
 console.log(sumStr);
 console.log("it is result: " + sum);

 console.log(a + " + " + b + " = " + sum); //10+9=19

//переменная БУЛИАН
var c = true;
var d = false;

var e = a == 9; //false
var f = a == 10; //true

//ОПЕРАТОРЫ СРАВНЕНИЯ
// ===  - строгое сравнение
// !== - не равно
//  == - равно
//  != - не равно
//  > - больше, строгое сравнение
//  < - меньше, строгое сравнение
//  >= - больше или равно, не строгое сравнение
//  <= - меньше мли равно, не строгое сравнение

var g = a != 9; //true
var h = a > b; //true
var i = b > 45; //false
var j = "10";

var rovnoStrogoe = a === j; //false
var rovnoNoStrogoe = a == j; //true

console.log(j == a); //true
console.log(j != a); //false
console.log(j === a); //false
console.log(j !== a); //true

// && логическое и
var k = 2;
var l = 3;

var m = (l > k) && (l > 0); //true && true = true
var n = (l > k) && (l < 0); //true && false = false
console.log(m);
console.log(n);

// || или
var o = (l > k) || (l < 0); //true && false = true
var p = (l < k) || (l < 0); //false && false = false

var q = ((l > k) || (l < 0)) && (j == k); //true && false = false

// ! - знак отрицания НЕ, переобразовывает на обратное
var r = ((l > k) || (l < 0)) && !(j == k); //true && true = true 

// конструкция сравнения
var s = 0;
var t = 10;

if(s + t > 10) {
  console.log("yes");
}else{
  console.log("not")
}; //not

if((s + t >= 10)) {
  console.log("yes");
}else{
  console.log("not")
}; //yes

if(!(s + t > 11)) {
  console.log("yes");
}else{
  console.log("not")
}; //yes

//switch - ветвление

var val1 = 10;
var val2 = 2;
var val3 = "*";
var resultat = 0;

switch (val3) {
  case "+": resultat = val1 + val2; break;
  case "-": resultat = val1 - val2; break;
  case "*": resultat = val1 * val2; break;
  case "/": resultat = val1 / val2; break;
  default: resultat = 0;
}

console.log(resultat);