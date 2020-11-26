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