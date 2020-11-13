/*Удалить из массива все столбцы которые 
не имеют ни одного нулевого элемента и 
сумма которых положительна - 
оформить в виде функции*/

function deliteColumn(c){
    var result = [];
    for(var i = 0; i < c.length;i++){
        var sum = 0, haveZero = false;
        for(var j = 0; j < c[i].length; j++){
            sum += c[i][j];
            if(c[i][j] === 0){
                haveZero = true;
            }
        }
        if(sum <= 0  && haveZero){
            result.push(c[i]);
        } 
        
    }
    return result;
}

