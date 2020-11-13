
/*Все скрипты которые писали в рамках первого и второго задания - оформить в виде функций*/


/*homework 1*/ 

/*Переменная хранит в себе значение от 0 до 9. 
Написать скрипт который будет выводить слово “один”, 
если переменная хранит значение 1. Выводить слово “два” - если переменная хранит значение 2,
и т.д. для всех цифр от 0 до 9. */ 

/*Первый вариант*/
function exersise11 (x){

    var resultat = '';

    switch (x) {
    case 0: resultat = 'zero'; break;
    case 1: resultat = 'one'; break;
    case 2: resultat = 'two'; break;
    case 3: resultat = 'three'; break;
    case 4: resultat = 'four'; break;
    case 5: resultat = 'five'; break;
    case 6: resultat = 'six'; break;
    case 7: resultat = 'seven'; break;
    case 8: resultat = 'eight'; break;
    case 9: resultat = 'nine'; break;
    default: resultat = 'no number';
    }

    return resultat;
}

/*Второй вариант*/
function exersise12 (x){

    if(x == 0){
        return 'zero';
    }else if(x == 1){
        return 'one';
    }else if(x == 2){
        return 'two';
    }else if(x == 3){
        return 'three';
    }else if(x == 4){
        return 'four';
    }else if(x == 5){
        return 'five';
    }else if(x == 6){
        return 'six';
    }else if(x == 7){
        return 'seven';
    }else if(x == 8){
        return 'eight';
    }else if(x == 9){
        return 'nine';
    }else{
        return 'no number';
    }
}


/*Переменная хранит в себе значение,
напишите скрипт которое выводит информацию о том,
что число является нулевым либо положительным либо отрицательным.
*/

function exersise2(x){
    if(x > 0){
        return 'positive';
    }else if(x < 0){
        return 'negative';
    }else if(x === 0){
        return 'zero';
    }
}


/*Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB),
Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать 
скрипт, который выводит количество байт. Для вычисления принимает счет что в каждой
последующей единицы измерения хранится 1024 единиц более меньшего измерения.*/

function exersise3(v, type){
    var value = v;

    if(type === 'GB'){
    value = value * 1024;
    type = 'MB';
    }
    if(type === 'MB'){
    value = value * 1024;
    type = 'KB';
    }
    if(type === 'KB'){
    value = value * 1024;
    type = 'B';
    }
    return value;
}


/*Переменная хранит процент кредита, вторая переменная хранит объем тела кредита,
третья переменная хранит длительность кредитного
договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года
*/

function exersise4(percent, credit, years){

    var oneYear = credit * percent / 100;
    var allTime = oneYear * years;
    var sum = allTime + credit;

    console.log('Процент за один календарный год - ', oneYear);
    console.log('Процент за все время - ', allTime);
    console.log('Общее количество денежных средств которое клиент банка выплатит за все года - ', sum);
}


/*homework 2*/ 

/*Переменная содержит в себе строку. 
Вывести строку в обратном порядке.*/
function exercise5(str){

    var result = '';

    for(i = str.length-1; i >= 0; i--){
    result += str[i]
    }
    return result;
}

/*Переменная содержит в себе число.
 Написать скрипт который посчитает факториал этого числа.
*/

function exercise6(number){
    if (number === 1) {
        return number;
    }
    return number * exercise6(number - 1);
}

/*Дано число - вывести первые N делителей этого числа нацело.*/
function exercise7(givenNamber, counter){
    var result = [];

    for(var i = 1; i <= givenNamber && counter !== 0; i++){
        if(givenNamber % i === 0){
            result.push(i);
            counter--;
        }
    }
    return result;
}


/*Найти сумму цифр числа которые кратны двум*/

function exercise8(number){
    number += '';
    if(!number.length){
        return 0;
    }
    if(number[0]%2 === 0){
        return +number[0] + exercise8(number.slice(1, number.length));
    }
    return exercise8(number.slice(1, number.length));
}


/*Найти минимальное число которое больше 300 и нацело делиться на 17*/

function exercise9(i){
    if(i % 17 === 0 && i > 300){
        return i;
    }
    return exercise9(i + 1);
}


/*Заданы две переменные для двух целых чисел, 
найти максимальное общее значение которое
нацело делит два заданных числа.*/

function exercise10(integerOne, integerTwo){
    if(integerOne === 0 || integerTwo === 0){
        return integerOne + integerTwo;
    }
    if(integerOne >  integerTwo){
        integerOne %= integerTwo;
    }else{
        integerTwo %= integerOne;
    }
    return exercise10(integerOne, integerTwo);
}