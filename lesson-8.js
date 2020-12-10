//this 

function f(){
  console.log(this === window); //this указывает на глобальный window
}
f(); //true

//

function f1(){
  function add($a, $b){
    return $a + $b;
  }
  function div($a, $b){
    return $a / $b;
  }
  return{
    a: 7,
    b: 8,
    function() {
      return this.a + this.b;
    },
    add: add,
    div: div
  };
}

let t = f1();

let res = t.add(2, 3);
let res2 = t.div(6, 3);

console.log(res); //5
console.log(res2); //2

//функция коструктор

function f3(par) {
 
  this.par = 9;
  console.log(this); // f3 {a: 9}

  this.add = function(a, b) {
    return a + b + par;
  }

  console.log(this); // f3 {par: 9, add: ƒ}
}

let a = new f3(3);  //выделение памяти для перемеенных, значений которые будут находиться и выполняеться функция 

let reult = a.add(2, 6);
console.log(reult); //11

//тернарный оператор (condinio) ? true : false;

let a1 = 2;
let b = 3;
let c = 0;

let res3 = (a1 < b) ? ((c + 1 > b - a1) ? c : (a1 - b)) : 0; //(true) ? ((false) ? c : -1 : 0)



console.log(res3); //-1 


//континью  сумируем уникальные числа, но не 2

let h = [1, 7, 2, 3, 5, 7, 6, 7];
let mas = [];
let sum = 0;


for(let i = 0; i < h.length; i++){
  if(a[i] === 2){
    continue;
  }
  if(mas.indexOf(h[i]) === -1){
    sum += h[i];
    mas.push(h[i]);
  }
}

console.log(sum); //24

//правильный вариант без континью -  сумируем уникальные числа, но не 2

let h1 = [1, 7, 2, 3, 5, 7, 6, 7];
let mas1 = [];
let sum1 = 0;


for(let i = 0; i < h1.length; i++){
  if(mas1.indexOf(h1[i]) === -1 && h1[i] !== 2){
    sum1 += h1[i];
    mas1.push(h1[i]);
  }
}

console.log(sum1); //22

//масив с 5 рандомных чисел исключая 2 и 3, с помошью континью

function rand(n, m) {
  let mas = [];

  for (;;){
    if(mas.length >= n){
      break;
    }

    let r = parseInt(Math.random() * 10);

    if(m.indexOf(r) !== -1 || mas.indexOf(r) !== -1){
      continue;
    }
    mas.push(r);
  }
  return mas;
}

a = rand(5, [2, 3]);

console.log(a);