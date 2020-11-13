/*Найти номер столбца двумерного массива сумма которого является 
максимальной (аналогично для строки)*/

function findColumn(c){

    var a = 0,b = 0;
    for(var i = 0; i < c.length;i++){
        var sum = 0;
        for(var j = 0; j < c[i].length; j++){
            sum += c[i][j];
        }
        if(a < sum){
            a = sum;
            b = i;
        }
    }
    return b;
}

function findRow(c){

    var a = 0,b = 0;
    
    for(var i = 0; i < c.length;i++){
        var sum = 0;
        for(var j = 0; j < c[i].length; j++){
            sum += c[j][i];
        }
        if(a < sum){
            a = sum;
            b = i;
        }
    }
    return b;
}