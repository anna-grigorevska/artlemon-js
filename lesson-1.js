var a = 1000;
var b = 9;

var res = a + b;

console.log("it is result: " + res);
console.log(a + " + " + b + " = " + res);

var t = "1000";
//булевые

var e = true;
var f = false;

//  операторы сравнения
// == - сравнение, при сравнении не учитывает тип переменной
// !=
// >
// <
// >=
// <=
// === при сравнении учитывает тип переменной
// !==


var c = 0;
var d = 10;

if(!a + b > 11) {
  console.log("yes");
}else{
  console.log("not");
};

//оператор switch

// switch(value) {
//   case val1: ...;
//   case val2: ...;
//   default: ...:
// }

var ab = 10;
var ac = 2;
var ad = "*";

var res = 0;

switch(c) {
  case "+": res = a + b; break;
  case "-": res = a - b; break;
  case "*": res = a * b; break;
  case "/": res = a / b; break;
  default: res = 0;
}
console.log(res);

//инкримент и дикримент

var n = 9;
var m = ++a + 10;

console.log(m);

//цыкл
var s = 0;

for(var i = 0; i < 10; i++){
  s += i;
}