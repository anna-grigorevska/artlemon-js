let a = 8;

function f2(){
  a = 10;
  a++;
  function f3(){
    a++;
  }
  f3();
}
f2();

console.log(a); //12


let b = 8;

function f4(){
  let b = 10;
  b++;
  function f5(){
    b++;
  }
  f5();
}
f4();

console.log(b); //8

//window

var obj = {
  a: 5
};

window.obj.a++;

console.log(window.obj.a); //6

function w (){
  return{
    b: 7,
    c: {
      b: 8    //window.a.c.d - 8
    }
  };
}

var o = window.w();
console.log(o); //{b: 7, c: {…}}


//Math - объект с множеством функция для работы с числами

//минимальное значения

console.log(Math.min(1,2,-5,4,6,8)); //-5

//округление к большему

console.log(Math.ceil(23.09)); //24

//округление к меньшему
console.log(Math.floor(23.09)); //23

//округление по матиматическим правилам, если меншье чем 0.5 то уменьшает, если больше то увеличивает
console.log(Math.round(23.34)); //23
console.log(Math.round(23.56)); //24

//функции массива

//добавление в массив элеметов
var m = [];

m.push(1);
m.push(2);
m.push(3); 
m.push(4);

console.log(m.pop()); //4 - выевли последний элемент массива и удалили его
console.log(m); //[1, 2, 3]

m.reverse(); //переварачивает массив - последняя цифра становиться в начало и тд

console.log(m.pop()); // - выевли последний элемент массива и удалили его
console.log(m); //[ 3, 2]


console.log(m.shift()); // 3 - выевли первый элемент массива и удалили его
console.log(m); //[ 2]


// find - находит первый отрицательный элемент

var m = [3, 4, 7, -1, 5, -9, 8];

// for(var i = 0; i < m.length; i++){
//   if(m[i] < 0){
//     res = m[i];
//     break;
//   }
// }  - как можно найти первое отрицательное значение

function search (el, index, arr){
  return el < 0;
}

// function find(m, callback){
//   for(var i = 0; i < m.length; i++){
//     var res = callback(m[i], i, m);
//     if(res){
//       return m[i];
//     }
//   }
// }  = m.find(search); - как работает функция find

// console.log(find(m, search)); //-1

var el = m.find(search);
console.log(el); //-1

//строки

var str = 'Hello my friends';

var s2 = 'my';

console.log(str.indexOf(s2)); //6 - индекс начала где начинается подстрока в переменной s2 в строке str

var s3 = 'qqqq';
console.log(str.indexOf(s3)); //-1 - если не нашло строку

if(str.indexOf(s2) !== -1){
  console.log('yes');
}else{
  console.log('no');
} //yes


if(str.indexOf(s3) !== -1){
  console.log('yes');
}else{
  console.log('no');
} //no

//инвертирование

var inv = 2;

console.log(~inv); //-3 = -(inv + 1)

//поиск элемент html
var p = document.querySelector("p");
console.dir(p); //p#text.text

//удаление элемента со стораницы

// p.outerHTML = ""; //весь элемент

console.log(p.innerHTML); // 111 -- содержимое элемента


var data1 = parseInt(p.innerHTML);
var data2 = parseInt(p.innerHTML);
var result = data1 + data2;
p.innerHTML = '<span class="result"> result: ' + result + '</span>'; //result: 222

p = document.querySelectorAll("p");

for(var i = 0; i < p.length; i++){
  var spans =  p[i].querySelectorAll("span");
  console.log(spans.length); //3 элемента - 0 спанов, 1 элемент со спаном
}


//ПОИСК ПО ID
pId = document.getElementById("text");
console.log(pId); //<p id="text" class="text"> 111</p>

//поиск по атрибуту

p = document.getElementById("text");

var num = p.getAttribute("data-number");
console.log(num); //2

num *= 10;
p.setAttribute("data-number", num); //перезаписали значение атрибута
