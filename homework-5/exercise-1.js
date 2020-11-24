/*Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - 
только по уникальным значениям. Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], 
получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,11,6,7,21]
*/
function destruction(array){
    var result = [];
    var time = [];
    for(item of array){
        if(typeof item === 'object'){
            for(x of item){
                time.push(x);
            }
        }else{
            time.push(item);
        }
    }
    for(item of time){
        if(!result.includes(item)){
            result.push(item);
        }
    }
    return result;
}
var a = [1,2,4,[8,4,12],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3];

console.log(destruction(a));
