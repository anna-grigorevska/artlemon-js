let o = {};

o.a = 9;
o.__proto__.d = 8;
for(let i in 0){
  console.log(i);
}

function f(a){
  return a * a;
}

let res = f.call({}, 2);

console.log(res); //4

function User(firstname){
  this.firstname = firstname;

  this.getFirstname = function(){
    return this.firstname;
  }
}

function Student(firstname, course){
  User.call(this, firstname);
  this.course = course;

  this.gerCourse = function(){
    return this.course;
  }
}

let student = new Student("Alex", 2);

console.log(student.gerCourse()); //2
console.log(student.getFirstname()); //Alex


//обработка ошибок

function div(a, b){
  if(b === 0){
    throw new Error('Div by zero');
  }
  return a / b;
}

try{
  let a = div(10, 2);
  let a2 = div(10, 0);

  console.log(a2);  //Infinity
}catch(e){
  console.log(e);
}

/* Error: Div by zero
    at div (lesson-12.js:44)
    at lesson-12.js:51 */

//

function div2(a, b){
  if(b === 0){
    throw new Error('Div by ...');
  }
  return a / b;
}

function f1(a){
  let r = -1;
  try{
    r = div2(2, a);
  }catch(e){
    console.log(e); 
  }
  return r;
}
/* Error: Div by ...
    at div2 (lesson-12.js:61)
    at f1 (lesson-12.js:69)
    at lesson-12.js:76 */

let a4 = f1(0);
console.log(a4); //-1

//

function div3(a, b){
  if(b === 0){
    throw new Error('Div by ...');
  }
  return a / b;
}


function f2(a){
  let r = -1;
  try{
    r = div3(2, a);
    return 1;
  }catch(e){
    console.log(e); 
  }finally{
    console.log('finally'); //finally
  }
  return r;
}
/* Error: Div by ...
    at div2 (lesson-12.js:61)
    at f1 (lesson-12.js:69)
    at lesson-12.js:76 */

let a5 = f2(10);
console.log(a5); //1

function f2(a){
  let r = -1;
  try{
    r = div3(2, a);
    return 1;
  }catch(e){
    console.log(e); 
  }finally{
    console.log('finally'); //finally
  }
  return r;
}
a5 = f2(10);
console.log(a5); //1

//

function f3(a){
  let r = -1;
  try{
    r = div3(2, a);
    return 1;
  }catch(e){
    console.log(e); 
  }finally{
    console.log('finally'); //finally
  }
  return r;
}
/*Error: Div by ...
    at div3 (lesson-12.js:92)
    at f3 (lesson-12.js:138)
    at lesson-12.js:147
 */
let a6 = f3(0);
console.log(a6); //1

//

// function duvCustom(a, b){
//   if(b === 0){
//     throw new CustomError("error");
//   }
//   return a / b;
// }

// function CustomError(message){
//   this.name = "CustomError";
//   this.message = message;
// }

// function fCustom(a){
//   let r = -1;
//   r = duvCustom(2, a);
//   return r;
// }

// let aCoustom = fCustom(0);
// console.log(aCoustom);

/*lesson-12.js:159 Uncaught 
CustomError {name: "CustomError", message: "error"}
message: "error"
name: "CustomError"
__proto__: Object*/

//

// function div(a, b){
//   if(b === 0){
//       throw new CustomError("Div by zero");
//   }
//   return a / b;
// }

// function CustomError(message){
//   this.name = "CustomError";
//   this.message = message;
// }

// function f(a){
//   let r = -1;
//   r = div(2, a);

//   return r;
// }

// let a2 = f(0);
// console.log(a2);

//

try{
  let t = JSON.parse("proverka");
}catch(e){
  console.log(e.message); //Unexpected token p in JSON at position 0
  console.log(e.name); //SyntaxError
}


setTimeout(function(){
  console.log('появлюсь через 2 сек');
}, 2000);

// let id = setInterval(function(){
//   console.log('буду снова и снова появляться через 2 сек');
// }, 2000);



//промисы - позволяют сразу указывать код который будет выполняться синхронно

let promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("promise done");
    resolve(2);
  }, 3000);
});

promise.then(resolve => {
  console.log(resolve);
}, reject => {});

//promise done
//2

promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("promise done");
    resolve(2);
  }, 3000);
});

promise.then(resolve => {
  return resolve * 2;
}, reject => {}).then(resolve => {
  console.log(resolve+1);
});

//promise done
//5

let promise1 = new Promise(function(resolve, reject){
  setTimeout(() => {
      resolve(2);
  }, 2000);
}).then(r => {
  return new Promise((resolve, reject) => {
      setTimeout(function() {
          resolve(r * r);
      }, 3000);
  });
}).then(function(resolve) {
  return ++resolve;
}); //promise done - 2

let promise2 = new Promise(function(resolve, reject){
  setTimeout(() => {
      resolve(3);
  }, 2000);
}).then(r => {
  return new Promise((resolve, reject) => {
      setTimeout(function() {
          resolve(r * r);
      }, 3000);
  });
}).then(function(resolve) {
  return --resolve;
}); //promise done - 5


Promise.all([promise1, promise2]).then((value) => {
  console.log(value);

}, reject => {});  //(2) [5, 8]

//сторедж

localStorage.setItem("kayStor", 3); //добавление

let s = localStorage.getItem("kayStor") //просмотр
console.log(s); //3

localStorage.removeItem("kayStor");//удаление

//

let students = [];
let valueStorage = localStorage.getItem("student")
if(valueStorage !== null){
  students = JSON.parse(valueStorage);
}else{
  localStorage.setItem("students", JSON.stringify(students));
}

students.push({name: "Ivan", course: 2});
localStorage.setItem("students", JSON.stringify(students));
console.log(students); 
/*[{…}]
0: {name: "Ivan", course: 2}
length: 1
__proto__: Array(0)*/


