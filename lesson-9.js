function f(){
  return this;
}

let res = this.f();

console.log(res === window); //true

//сравнение значений
let a ={
  a: 4,
  b: 2,
}

let b = {};

for(let key in a){
  b[key] = a[key];
  
}

console.log(a); //{a: 4, b: 2}
console.log(b); //{b: 4, b: 2}
console.log(b === a); //false

//

a ={
  a: 4,
  b: {
    d: 10,
  }
}

b = {};

for(let key in a){
  b[key] = a[key];
  
}

b.a++;
a.a--;
b.b.d++;

console.log(a); //{a: 3, b: {…}}
console.log(b); //{a: 5, b: {…}}
console.log(b.b === a.b); //true


//

a = {
  a: 4,
  b: {
    d: 10,
  },
};

b = {};

for(let key in a){
  if(typeof a[key] === "object"){
    b[key] = {};
    for(let key2 in a[key]){
      b[key][key2] = a[key][key2];
    }
  }else{
    b[key] = a[key];
  }
}

console.log(b.b === a.b); //false

//object.assign()

a = {
  a: 4,
  b: {
    d: 10,
  },
};

b = {};

Object.assign(b, a);
b.a++;

console.log(b); //{a: 5, b: {…}}
console.log(a); //{a: 4,b: {…}}
console.log(b === a); //false

//use strict

function f2(){
  "use strict"
  console.log(this); //undefined
}
f2();

//функция конструктор

function f3(){
  console.log(this); //f3 {}
}

var obj = new f3();
var obj2 = new f3();

console.log(obj == obj2); //false

obj = new f3();
obj2 = obj;

console.log(obj == obj2); //true

//

function f4(){
  console.log(this); 

  this.f5 = function(){
    return this.a * 2;
  };
}

obj = new f4();
obj2 = new f4();

obj.a = 3;
obj2.a = 4;

console.log(obj.f5());  //6
console.log(obj2.f5()); //8


//


function q(){
  console.log(this);

  this.a = 3;

  this.q2 = function(){
      return this.a * 2;
  };
}

var obj = new q();
var obj2 = new q();

obj.a++;
console.log(obj.q2()); //8

obj.a++;

console.log(obj.q2()); //10
console.log(obj2.q2()); //6

//

function k(){
  function add(a, b){
    return a + b;
  }

  function minus(a, b){
    return a- b;
  }

  return{
    add, //add: add
    m: minus,
  };
}

var ob = k();
res = ob.add(3, 2);

console.log(res); //5

//apply

function c(a, b){
  this.c2 = function(){
    return (a + b) / this.div;
  }
  console.log(this.c2()); //2.5
}

let m = [2, 3];
let o = {div: 2};
c.apply(o, m);  //let o = new c(2, 3); + {div: 2}

console.log(o); //{div: 2, c2: ƒ}

//call

function s(a, b){
  this.s2 = function(){
    return (a + b) / this.div;
  }
  console.log(this.s2()); //1.5
}

m = [2, 3];
o = {div: 2};
s.call(o, 1, 2);  //let o = new c(2, 3); + {div: 2}

console.log(o); //{div: 2, s2: ƒ}


//


let ingredients = {
  1: {
    id: 1,
    title: "ing1",
  },
  2: {
    id: 2,
    title: "ing2",
  },
  3: {
    id: 3,
    title: "ing3",
  },
  4: {
    id: 4,
    title: "ing4",
  },
};

let dishes = [
  {
    title: "dishes1",
    ingredients: [
      {
        id: 1,
        gram: 100,
      }
    ],
  }
];

function renderIngredients(){
  let ingredientsElement = document.getElementById("ingredients")
  for(let i in ingredients){
    let inputCheckbox = document.createElement("input");
    let inputGram = document.createElement("input");
    let label = document.createElement("label");
    let div = document.createElement("div");

    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "in" + ingredients[i].id;
    inputCheckbox.name = "in";
    inputCheckbox.value = ingredients[i].id;

    label.setAttribute("for", "in" + ingredients[i].id);
    label.innerHTML = ingredients[i].title;

    inputGram.type = "text";
    inputGram.value = "";
    inputGram.name = "in" + ingredients[i].id;

    div.appendChild(inputCheckbox);
    div.appendChild(label);
    div.appendChild(inputGram);
    ingredientsElement.appendChild(div);
  }
}

function renderDishes(){
  let dishesElement = document.getElementById("dishes");
  dishesElement.innerHTML = "";
  for(let i in dishes){
    let li = document.createElement("li");
    li.innerHTML = dishes[i].title;
    dishesElement.appendChild(li);
  }
  
}

renderIngredients();
renderDishes();

let submit = document.querySelector(".submit");

submit.addEventListener("click", event => {
  let form = document.getElementById("form");
  let formData = new FormData(form);

  let ingr = formData.getAll("IN")
  let title = formData.get("title_dish");

  let valueIngredients = [];

  for(let i = 0; i < ingr.length; i++){
    valueIngredients.push({
      id: +ingr[i],
      gram: +formData.get("in" + ingr[i]),
    });
  }

  let dish = {
    title,
    ingredients: valueIngredients,
  };

  dishes.push(dish);

  renderDishes()
});

document.getElementById("show").addEventListener("click", event => {console.log(dishes)});


