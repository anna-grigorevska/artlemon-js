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

