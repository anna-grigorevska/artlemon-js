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


//аналогично верхней функции (верхняя - рекурсивная функция)

q3(3);

function q3(w){
    if(w > 0){
        console.log(w);
        w--;
    }
    q2(w);
}

function q2(w){
    if(w > 0){
        console.log(w);
        w--;
    }
    q1(w);
}

function q1(w){
    if(w > 0){
        console.log(w);
        w--;
    }
    q0(0);
}

function q0(w){
    return;
}

//от 0 до 5

function fife(a, n){
    if(a <= n){
        console.log(a++);
    }else if(a > n){
        return;
    }
    fife(a, n);
}

fife(0, 5); //0, 1, 2, 3, 4, 5

//сумма чисел от a до n  - рекурсивная функция

function sum(a, n, s){
    if(s === undefined){
        s = 0;
    } //s = s || 0; analog
    if(a <= n){
        s +=a++;
        return sum(a, n, s);
    }else if(a > n){
        return s;
    }
}

var s = sum(0, 100);
console.log(s); //5050

//сумма чисел от a до n - аналогична верчней

function sum3(a, n){
    let s = 0;

    if(a <= n){
        s += a++;
    }
    return sum2(a, n, s);
}

function sum2(a, n, s){

    if(a <= n){
        s += a++;
    }
    return sum1(a, n, s);
}

function sum1(a, n, s){

    if(a <= n){
        s += a++;
    }
    return sum0(a, n, s);
}

function sum0(a, n, s){
    return s;
}

console.log(sum3(1, 3)); //6

//сумма чисел кратных 2

//variant-1

function kratno (a, n, s){
    if(s === undefined){
        s = 0;
    } //s = s || 0; analog
    if(a <= n){
        if((a % 2) === 0){
            s +=a++;   
        }
        return kratno(++a, n, s);
    }else if(a > n){
        return s;
    }
}

var s = kratno (1, 10);
console.log(s); //30


//variant-2

function kratno2 (a, n, s){
    if(s === undefined){
        s = 0;
    }

    if(a <= n && (a % 2) === 0){
        s += a++;
        return kratno2(a, n, s);
    }else if(a > n){
        return s;
    }

    return kratno2(++a, n, s);
}

var s = kratno2(0, 10);
console.log(s); //30


//for in / for of

let obj = {
    a: 2,
    b: 3,
    c: {
        a: 6,
        b: 'qwe'
    },
    d: 'abc'
};

for(let i in obj){
    console.log(obj[i]);
}  //2, 3, {a: 6, b: "qwe"}, abc


var p = [1, 3, 5, 6];
for(let i of p){
    console.log(i);//1, 3, 5, 6
}

// вывод значений с объекта

let object = {
    a: 7,
    b: {},
    c: {
        aaa: {
            e: 56,
            m: 'dog',
            x: [1,99, 66]
        },
        bbb: [12,{}]
    },
    d: {
        v: 77,
        tt: 'cat'
    }
};

function show (ob){
    for(let i in ob){
        if(typeof ob[i] === "object" || typeof ob[i] === "array"){
            show(ob[i]);
        }else{
            console.log(ob[i]);
        }
        
    }
}

show (object); //7, 56, dog, 1, 99, 66, 12, 77, cat


//количество нулевых элементов - рекурсивная функ

let m = [1, 0, 2, 3, 0, 4, 5, 0];

function counter(mas, i){
    if(i === undefined){
        i = 0;
    }
    if(mas.length <= i){
        return 0;
    }
    let count = 0;
    if(mas[i] === 0){
        count++;
    }
   return counter(mas, ++i) + count;
}

let count = counter(m);
console.log(count) //3
