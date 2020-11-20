/*Написать рекурсивную функцию которая выводит абсолютно все 
элементы ассоциативного массива (объекта) - любого уровня вложенности */

function destructuring (obj){
    for(key in obj){
        if(typeof obj[key] === "object"){
            destructuring(obj[key]);
        }else{
            console.log(key + ': ' + obj[key]);
        }
    }
}


var user = {
    firstName: 'Kasper',
    lastName: 'Cat',
    years: 1,
    props: {
        paws: 4,
        speed: 100,
        test: {
            some: 'some'
        }
    }
};

destructuring(user);