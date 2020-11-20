//область видимости функции

    var b = 9;
    function f(){
        var b = 7;
        function f3(a){
            return a + b;
        }
        return f3;
    }

    var c = f();

    console.log(c(2)); //9

//значение сначала ищется в самой функци,  если его там нету, переходит выше до тех пор пока его не найдет
// в верхней функции нашло нужную переменную в f()
// в нижней функции нашло необходимую переменную в глобальной области видимости 

    var d = 9;
    function f2(){
        function f4(e){
            return d + e;
        }
        return f4;
    }

    var i = f2();

    console.log(i(2)); //11

//const - мы не можем заменить переменную, но можем заменять значение своства
    const name = {
        firstname: "Alex",
    };
    name.firstname = "Aleksandr";

    console.log(name); //{firstname: "Aleksandr"}


//переменная x не проиницилизирована, поэтому сделаем проверку undefined

var z = -45;
let x;

if(x === undefined){
    console.log('Not undefined')
} //Not undefined

x = 9;

if(x !== undefined){
    console.log('Yes')
}//Yes  - после того как переменной x присвоили значение выводиться другой консоль


//function f(){} -декларирование фунции

//рекурсивная функция - функция которая вызывает сама себя

function v (){
    v();
}

function q(w){
    if(w > 0){
        console.log(w);
        w--;
    }else if(w === 0){
        return;
    }
    return q(w);
}
q(3); //3, 2, 1+


// если убрать else if
//w = 3  ,  w > 0 - true  ,  w = 2; return f(2) ->
//w = 2  ,  w > 0 - true  ,  w = 1; return f(1) ->
//w = 1  ,  w > 0 - true  ,  w = 0; return f(0) ->
//w = 0  ,  w > 0 - false  ,  w = 0; return f(0) -> бесконечная работа функции
// с помощью else if мы получаем 
//w = 3  ,  w > 0 - true  ,  w = 2; return f(2) ->
//w = 2  ,  w > 0 - true  ,  w = 1; return f(1) ->
//w = 1  ,  w > 0 - true  ,  w = 0; return f(0) ->
//w = 0  ,  w > 0 - false  ,   else if w === 0 - true  , return  -> заканчивается работа функции