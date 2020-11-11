//преобразование типов даных

var a = 9;
var b = 10.2;
var c = 'a';

var result = a + c;
console.log(result); //9a конткатинация - добавления строки к числу = сторока
console.log(a + b);//19.2 атомоткически переобразуется в тип дабл

//функция которой можно переобразовать с одного значения в другое
var d = parseInt(10.78);//переобразует в целое значение, на выходе будет 10

var e = '78';
var f = parseInt(e); //переобразует число в строку

var g = '65';
var h = '5';
console.log(parseInt(g) + parseInt(h)); //70 - с функцие parseInt  строки переобразуются в число и произойдет математическое исчисление
console.log(g + h); //655 - без функции parseInt произойдет конкатинация строк( их слодение )

//фунция - позволяет написать код один раз и использовать его множество раз в других местах

function show(){
  console.log(100);
}
show(); //100 - строка которая вызывает выполнение функции, в скобках пишутся параментры 

for(var i =0; i < 10; i++){
  show();
} //10 раз выведется 100 в консоле

// в функции мы можем описать еще одну функцию и вызвать другую функцию
function f(){
  show();
}

// в функию мы можем передавать параметры, их может быть множество, перечесляются через запятую
function div (j, k){
  console.log(j + " -" + k);
}
div(10, 5); //вызов функии, где в параметрах указано что j=10 k=5, в консоле будет 10-5

function division (l, m){
  var n = l / m;
  console.log('n: ' + n);
}
division(16, 2); // n: 8

// у функции может быть возвращаемое значение - return - в нем может быть указано значение, переменная, выражение и тд
function Ret(o, p){
  var q = o / p;
  return q + p;
}
function funcRet(){
  return 5;
}

var r = funcRet();
console.log(r); //5 // присвоили фунцию переменной, и то значение которое возвращает функия присвоилось переменной


function dabl (s, t){
  var u = s / t; //5
  return u + t; //8
}
var u = dabl(12, 2);

console.log(u); //8

function variant(v, w){
  var x= v / w; //5
  return x + w; //8
}
var x = variant(variant(12, 2), 2);
console.log(x); //6 

// function variant(v, w){
//   var x= v / w; //5
//   return x + w; //8
// }
// var a = variant(12, 2);
// var x = variant(a, 2); //a=8
// console.log(x); //6

//возвращение суму элемента масива
function sum(m){
  var res = 0;
  for(var i = 0; i < m.length; i++){
    res += m[i]
  }
  return res;
}

var Masiv1 = sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
var Masiv2 = sum([0, -1, -1, -5]);
console.log(Masiv1);
console.log(Masiv2);

//масимальный элемент масива
  function max(m){  //масив передается в фунцию, ищит максимальное число, 
    var a = m[0];   //в переменной а находится максимальное число 
    for(var i = 0; i < m.length; i++){
      if(a < m[i]){
        a = m[i];
      }
    }
    return a; //возвращаем максимальное число
  } 

  var m = []; //1.создали масив
  for(var i = 0; i < 10; i++){
    m[i] = parseInt(Math.random() * 100);  //2.заполнили масив случайными числами от 0 до 1 умножиними на 100 (10 ЭЛЕМЕНТОВ)
  }

  var resMax = max(m);//3.присваиваем результат выполнения фунции которая нашла масимальное число
  console.log(m); //выводим масив
  console.log(resMax); //выводим максимальное число

//максимальное значение с 10 масивов
  function max(m){
    var a = m[0];
    for(var i = 1; i < m.length; i++){
      if(a < m[i]){
        a = m[i];
      }
    }

    return a;
  }
  var m = [];

  for(var i = 0; i < 10; i++){
    m[i] = [];
    for(var j = 0; j < 3; j++){
      m[i][j] = parseInt(Math.random() * 100);
    }
  }

  var masMax = [];
  for(var i = 0; i < m.length; i++){
    masMax[i] = max(m[i]);
  }

  var maxMax = max(masMax);

  console.log(m);
  console.log(maxMax);


//создание масива по заданым параметрам

function generateMas(n, k){
  var m = [];
  for(var i = 0; i < n; i++){
    m[i] = [];
    for(var j = 0; j < k; j++){
      m[i][j] = parseInt(Math.random() * 100);
    }
  }
  return m;
}

var m = generateMas(2, 5);
console.log(m); //оздалось и вывелось два масива с 5 значениями

//возвращение фунции с помощью функии
function voz(){
  console.log(5);
}
function voz2(){
  return voz;
}
var resultVoz = voz2();
resultVoz();//5


function mm(a){
  return a+1;
}
var b = mm(112);
console.log(b);

var generate = function(n, k){
  var m = [];
  for(var i = 0; i < n; i++){
    m[i] = [];
    for(var j = 0; j < k; j++){
      m[i][j] = parseInt(Math.random() * 100);
    }
  }
  return m;
}; //переменная в которую передается фунция
 var mas = generate(5, 7);
 console.log(mas);


//фунция которая принимает по параметрам a,b
function z(){
  return 3;
}
function z2(){
  return 2;
}
function z3(a, b){
  return a() + b();
}
var i = z3(z, z2);
console.log(i);//5


// function d(a){
//   return ++a;
// }

// function d2(a, b){
//   return a - b;
// }

// function d3(a, b){
//  return a(5) + b(2, 3);
// }

// var i = d3(d, d2);
// console.log(i);


//фунция вызывает сама себя
  (function q(){
    console.log(123);
  })(); //123

//фунция взвращает другую функцию 
  var a = (function (){    //вызывается функция
    function f(){         //определение функии F
      console.log(3 + 2);
    }
    return f;  //возвращение функции которая сама вызвалась
  }) ();       //переменнной а присвоилась функия
  a();         //выведет 5  - то что выполнелось в функии и присвоилось переменной


  var b = (function (){
    function f(a){
      return a*a; //4*4
    }
    return f;
  }) ();
  var p = b(4); 
  console.log(p); //16

  //асецитивный масив - имеет свойство и значение
  var a = {
    kay1: 'value1',
    kay2: 'value2',
    kay3: 'value3',
    kay4: 'value4',
    kay5: 'value5',
  }
  console.log(a); //{kay1: "value1", kay2: "value2", kay3: "value3", kay4: "value4", kay5: "value5"}

  var student = {
    firstname: 'Ivan ',
    lastname: 'Ivanov',
    course: 3,
    estimate: 4.4,
  }
  console.log(student); //{firstname: "Ivan ", lastname: "Ivanov", course: 3, estimate: 4.4}
  console.log(student.course); //3 - получили значение по свойству
  // второй возможный вариант получения значения, если оно будет присвоено переменной
  var e = 'estimate';
  console.log(student[e]); //4.4

//масив объектов
var students = [{
    firstname: 'Ivan',
    lastname: 'Ivanov',
    course: 3,
    estimate: 4.4,
  },{
    firstname: 'Alex',
    lastname: 'Fox',
    course: 3,
    estimate: 3,
  },{
    firstname: 'Jon ',
    lastname: 'Elest',
    course: 3,
    estimate: 3.7,
  }
];
console.log(students); //(3) [{…}, {…}, {…}]


//добавление в масив 
var group = (function(){
  var result = [];
  function add(group){
    result.push(group);
  }

  function print(){
    console.log(result);
  }

  function remove(firstname){
    for( var i = 0; i < result.length; i++){
      if(result[i].firstname === firstname){
        result.splice(i, 1);
        break; //для того чтобы удалился один элемент, если есть несколько одинаковых
      }
    }
  } //функция удаляет 

  function avgEstimate(){
    var sum = 0;
    for( var i = 0; i < result.length; i++){
      sum += result[i].estimate;
    }
    return sum / result.length;
  }//средний бал

  return{
    add: add,
    print: print,
    remove: remove,
    avgEstimate: avgEstimate
  };
}) ();

var st ={
  firstname: "Dina",
  estimate: 5,
};
var st2 ={
  firstname: "Lina",
  estimate: 4.8,
};
var st3 ={
  firstname: "Dina",
  estimate: 4.8,
};
group.add(st);
group.add(st2);
group.add(st3);
group.remove("Dina");//то что удаляется 
group.print();

var srBal = group.avgEstimate();
console.log("avg: " + srBal); //средний бал - avg: 4.8
