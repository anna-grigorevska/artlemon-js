//next()

let ob = {
  to: 5,
  [Symbol.iterator]: function(){
    let current = 0;
    let max = this.to + 1;
    return{
      next(){
        if(current < max){
          return{
            done: false,
            value: current++,
          };
        }else{
          return {
            done: true,
          }
        }
      }
    }
  }
};

for(let key of ob){
  console.log(key); //0, 1, 2, 3, 4, 5
}

//  генератор

function* f(){
  yield 12;
}

let a = f();
let r = a.next();

console.log(r);//{value: 12, done: false}

//

let b = 0;

function* f2(){
  let t = yield 'text';
  let r = yield 10;
  b += r;
}

let b2 = f2();
r = b2.next(23);
let result = b2.next(r + 1);
console.log(result); //{value: 10, done: false}

//

let h = 0;
function* fGe(){
  yield 1;
  yield 12;
  yield 13;
  yield 15;
}

let generator = fGe();

for(let key of generator){
  console.log(key); //1 12 13 15
}

//

h = 0;
function* fGeTwo(){
  for(let i = 0; i < 5; i++){
    yield i * 2;
  }
}

generator = fGeTwo();

for(let key of generator){
  console.log(key); //0 2 4 6 8
}

//

h = 0;
function* fPr(){
  for(let i = 0; i < 5; i++){
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 200);
    });
  }
  
}

generator = fPr();

for(let key of generator){
  key.then((success) => {
    console.log(success * 2); //4 4 4 4 4
  });
}

//

let container = document.querySelector(".container");
container.style.padding = "40px";  //стили css в js
container.style.background = "#f3eba6";

// setInterval(() => {
//   let width = container.clientWidth;
//   width -= 10;
//   container.style.width = width + "px";
// }, 200);

function event(e){
  console.log(1);
}

let topText = document.querySelector(".topText");
topText.style.marginBottom = "40px";
topText.addEventListener("click", function(event){
  console.log(2);
});

container.addEventListener("mouseover", event);

setTimeout(() => {
  container.removeEventListener("mouseover", event);
}, 5000);  //принаведении на выбраный элемент срабатывает счетчмк, через 5000 мс он удалиться