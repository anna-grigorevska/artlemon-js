function f(){

}

var a = 9;

var ob = {
  a: 7
};

console.log(ob.a2);  //undefined

//

function f2(){
 b++;
}
var b = 9;

f2();

console.log(b);  //10

//

function f3(){
  c++;
} 
 
f3();
 
console.log(c); 

var c = 9;  //NaN
 

// undefined + 10 = NaN
// undefined + undefined = NaN
// undefined === undefined -> true
//NaN === NaN -> false

//undefined, null, "", 0, false -> false



//infinity

console.log(Math.pow(99999999, 99999999)); //infinity
console.log(-Math.pow(-99999999, 99999999)); //-infinity

//infinity = true

if(Infinity){
  console.log(2);
} //2

//infinity - infinity = NuN


//преобразование булиан - обратное преобразование

console.log(true + 5); //6
console.log(false + 10); //10

//

console.log(undefined + 'hhhh');//undefinedhhhh

console.log(null + 'hhhh'); //nullhhhh

console.log(null + true); //1

console.log((null + true) / 0); //Infinity

console.log((null + true) / 0.1); //10

console.log(5 + parseInt("10")); //15

//

let e = 3;
let res = null + true - ++e - e + (false/Infinity) + e + true; //1 - 4 - 4 + 0 + 4 + 1 = -2 
console.log(res);

//

function fun(a){
 return a() + 2;
}

//стрелочная функция

let x = () => 2;  // let x = function(){
                  //   return 2;
                  // }


let x2 = () => () => 2;       //let x2 = function(){
                              //  return function(){
                              //    return 2;
                              //  }
                              //}
                              //x2()();


                              
let x3 = () => () => () => 3;       //let x3 = function(){
                                    //  return function(){
                                    //    function()
                                    //  }
                                    //}
                                    //x3()();

let x4 = (a, b) =>  a + b;    //let x4 = function f(a, b){
console.log(x4(3, 3)); //6    //  return a + b;
                              //}
                              //x4();

let x5 = a => a + 2;
console.log(x5(2)); //4

let x6 = (a, b) => ({a: a + b});
console.log(x6(6, 6));  //{a: 12}

let x7 = (a, b) => ({a: a + b()});
console.log(x7(6,  () => 4));  //{a: 10}


let u = (a, b) => ({a: a + b()});
console.log(u(3, () => ((a) => 4 + a())(()=>4))); //{a: 11}

//одинаковые фунцкии - вверху стрелочная - внизу обычная

function fu(a, b){
  return{
    a: a + b()
  };
}

let result = fu(3, function(){
  return (function (a){
    return 4 + a();
  })(function(){
    return 4;
  });
});

console.log(result); //{a: 11}


function n(){
  return () => 5;
}  //function() {return 5;}

n()();


// одинаковые функции

function f9(){
  let a = 9;
  a++;

  return a;
}

//стрелочная

let f10 = () => {
  let a = 9;
  a++;
  return a;
}

console.log(f9()); //10
console.log(f10()); //10

let r = () => ({a: 6}); //function r() {return (a: 6);}


//функция вызовица тогда, когда весь html прогрузиться
window.onload = function(){
  
}

//создание студента

window.onload = function(){
  let students = [
    {
      name: 'Ivan',
      course: 2,
      ball: 4.4
    },
    {
      name: 'Alex',
      course: 3,
      ball: 3.4
    },
    {
      name: 'Nil',
      course: 4,
      ball: 5
    }
  ]

  let p = document.createElement("p");  //создали пустой элемент р

  let span = document.createElement('span');  //- можно заменить на p.innerHTML = "<span class='sp'> students </span>"; //добавили в элемент тег спан с текстом
  span.className = 'sp';           //добавили класс sp
  span.innerHTML = 'students';
  p.appendChild(span);
  p.setAttribute("data-n", 5); //добавление атрибута - class, id и тд
  
  let list = document.querySelector(".list"); //получили элемент с html

  list.appendChild(p); //добавить нового ребенка внутрь элемента или так // list.innerHTML = p.innerHTML;  //добавили в див с классом list тег р

  console.log(p); //<p> <span class='sp'> students </span> </p> 
  
  //добавление студента

  function renderStudents(){
    let ul = document.createElement('ul');
    for(let i = 0; i < students.length; i++){
      var li = document.createElement('li');
      li.innerHTML = students[i].name;
      
      (function(i){
        li.addEventListener("click", function(event){ //событие для клика /удаление по 
          students.splice(i,  1);
          renderStudents();
        });
      })(i);

      ul.appendChild(li);
    }

    let list = document.querySelector('.list');  //добавление только тех студентов что есть в массиве, в  том же количестве
    list.innerHTML = "";
    list.appendChild(ul);
  }
  
  document.querySelector(".btn-create").addEventListener("click", function(event){ //при клике на кнопку отрисовуется студент
    renderStudents();  
  });

  //другой вариант добавления студентов
  // var el = "<ul>";
  // for(let i = 0; i < students.length; i++){
  //   el += "<li>" + students[i].name + "</li>"
  // }
  // el += "</ul>";
  // document.querySelector('.list').innerHTML = el;

  //клик

  let mouseClick = document.getElementById("mouse-click");

  mouseClick.addEventListener('click', function (event) {
    console.log(event.target.innerHTML);    
  });

}

