/*Написать функцию которая генерирует массив случайных значений, 
таким образом что все элементы результирующего массива являются уникальными. 
Генерациями происходит в рамках чисел от N до M, где N,M -
 могут быть как положительные так и отрицательными,
  и еще одним параметром количество значений которые нужно сгенерировать. 
  Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.
*/

function randomInteger(n, m) {
    var rand = n - 0.5 + Math.random() * (m - n + 1);
    return Math.round(rand);
}

function uniqNumberGeneration(n, m, array){
    var rand = randomInteger(n, m);
    var isUniq = array.find(function(number){
        return rand === number;
    });
    if(typeof isUniq !== "undefined"){
        rand = uniqNumberGeneration(n, m, array);
    }
    return rand;
}

function arrayGeneration(n, m, count){
    var options = [];
    var result = [];
    for(var i = n; i <= m; i++){
        options.push(i);
    }
    if(options.length < count){
        return result;
    }
    for(var i = 0; i < count; i++){
        result.push(uniqNumberGeneration(n, m, result));
    }
    return result;
}

var n = +prompt('enter min: ');
var m = +prompt('enter max: ');
var count = +prompt('enter count: ');

var result = arrayGeneration(n, m, count)

/*Использовать функцию из предыдущего задания чтобы получить массив 
из нужного количества значений. Найти процентное соотношение отрицательных, 
положительных и нулевых элементов массива.
*/ 

function calculatePercentages(result){
    var zero = 0, positive = 0, negative = 0;
    for(var i = 0; i < result.length; i++){
        if(result[i] === 0){
            zero++;
        }else if(result[i] > 0){
            positive++;
        }else{
            negative++;
        }
    }
    var zeroPercentages = (zero / result.length) * 100;
    var positivePercentages = (positive / result.length) * 100;
    var negativePercentages = (negative / result.length) * 100;
    return {
        zeroPercentages: zeroPercentages + ' %',
        positivePercentages: positivePercentages + ' %',
        negativePercentages: negativePercentages + ' %'
    }
}

console.log(result);
console.log( calculatePercentages(result));