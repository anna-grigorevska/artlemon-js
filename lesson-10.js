function f(){

}

let p = {
  d: 5,
};

let o = {
  p: 9,
  __proto__: p,
}

console.log(o.p); //9

//

function Car(){
  this.move = function f(){
    return "moving...";
  };
}

function Sedan(marka){
  this.marka = marka;
}

function Sedan2(marka){
  this.marka = marka;
}

let carObj = new Sedan("sed");
carObj.__proto__ = new Car();

console.log(carObj.move()); //moving...

//

function Rectangle(width, height){
  this.width = width;
  this.height = height;
}

Rectangle.prototype.square = function(){  //square - функции в объекте = метод
  return this.width + this.height;
}

Rectangle.prototype.perimetr = function(){  //perimetr - функции в объекте = метод
  return(this.width + this.height) * 2;
}

let rect = new Rectangle(2, 5);
let rect2 = new Rectangle(12, 15);

console.log(rect.perimetr());  //14
console.log(rect.square());  //7
console.log(rect2.square()); //27

Rectangle.prototype.getMaxPerimeters = function(rectangles){
  
}

function getMaxPerimeters(rectangles){
  let maxRectangle = rectangles[0];
  for(let i = 0; i < rectangles.length; i++){
    if(rectangles[i].perimetr() > maxRectangle.perimetr()){
      maxRectangle = rectangles[i];
    }
  }

  return maxRectangle;
}

function createRectangles(count){
  let rectangles = [];

  for(let i = 0; i < count; i++){
    let rand1 = parseInt((Math.random() * 100));
    let rand2 = parseInt((Math.random() * 100));
    rectangles.push(new Rectangle(rand1, rand2));
  }
  return rectangles;
}

let rectangles = createRectangles(5);
console.log(getMaxPerimeters(rectangles)); //Rectangle {width: --, height: --}  -  width и height - рандомные числа
console.log(rectangles); //5 oбъектов в масиве с рандомными значениями

//

let phone = "38(050)123-45-67";
console.log(phone.match(/[0-9]/)); //["3", index: 0, input: "38(050)123-45-67", groups: undefined]
console.log(phone.match(/[5-9]/)); //["8", index: 1, input: "38(050)123-45-67", groups: undefined]


//регулярное выражение - объект реджекс - метод тест

console.log(/^[0-9]/.test("a")); //false

console.log(/^[0-9]/.test("3")); //true

console.log(/^[0-9]{4, 10}$/.test("3")); //false

console.log(/^[0-9]{4,10}$/.test("3746")); //true
console.log(/^[0-9]{4, 10}$/.test("12345678901")); //false

console.log(/^[0-9][a-z]$/.test("1w")); //true 

console.log(/^[0-9]{4,10}[a-z]$/.test("567868a")); //true

console.log(/^[0-9]{4,10}[a-z]{4}$/.test("4567868aqqq")); //true

console.log(/^([0-9]{4,10}[a-z]{4}){2}$/.test("4567868aqqq4567868aqqq")); //true

console.log(/^[a-zA-Z]/.test("rE")); //TRUE

console.log(/^[a-zA-Z0-9]/.test("rE56")); //TRUE

console.log(/^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/.test("anna grigorewska")); //TRUE

console.log(/^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/.test("anna grigorewska alex")); //false

console.log(/^\d/.test("34")); //TRUE d - заменяет [0-9]
console.log(/^\d{2,30}$/.test("3445")); //TRUE d - заменяет [0-9]
console.log(/^\w/.test("344reth5")); //TRUE w - заменяет [a-zA-Z0-9]

console.log(/^(\(){3}$/.test("(((")); //true

console.log(/^https:\/\/[a-z]{2,10}\.[a-z]{1,4}$/.test("https://google.com")); //true

console.log(/^\+[0-9]{1,}\([0-9]{3}\)[0-9]{3}\-[0-9]{2}-[0-9]{2}$/.test("+38(050)123-45-67")); //true


window.onload = function(){
  let span = document.getElementById("txt");

  span.onclick = function(event){
    spanEvent(event.target);
  };

  function spanEvent(spanElement){
    spanElement.outerHTML = "";

    let input = document.createElement("input");
    input.type = "text";
    input.value = spanElement.innerHTML;

    input.onkeypress = inputEvent;

    let form = document.querySelector("form");
    form.innerHTML = "";
    form.appendChild(input);

    input.focus();
  }

  function inputEvent(event){
    if(event.keyCode === 13){
      let span = document.createElement("span");
      span.onclick = function(event){
        spanEvent(event.target);
      };
      span.innerHTML = event.target.value;
      
      event.target.outerHTML = "";

      let form = document.querySelector("form");
      form.innerHTML = "";
      form.appendChild(span);
    }
  }
};
