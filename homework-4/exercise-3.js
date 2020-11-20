/*Все предыдущий задания на циклы - написать с помощью циклов for in и/или for of
*/

/*Написать функцию, которая транспонирует матрицу*/

function transposeMatrix(a){
    var b = [];
    for(item of a){
        b.push([]);
    };

    for(item of a){
        for(i in item){
            b[i].push(item[i]);
        };
    };

    return b;
}


/*Написать функцию, которая сумирует две матрицы*/

function sumMatrix(a, b)
{   
    var c = [];
    for (i in a){ //i
        c[i] = [];
        for (j in a[i]){ //j
            c[i][j] = a[i][j] + b[i][j];  
        } 
    }
    return c;
}


/*Найти номер столбца двумерного массива сумма которого является 
максимальной (аналогично для строки)*/

function findColumn(c){

    var a = 0,b = 0;
    for(i in c){
        var sum = 0;
        for(j of c[i]){
            sum += j;
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
    
    for(i in c){
        var sum = 0;
        for(j in c[i]){
            sum += c[j][i];
        }
        if(a < sum){
            a = sum;
            b = i;
        }
    }
    return b;
}

/*Удалить из массива все столбцы которые 
не имеют ни одного нулевого элемента и 
сумма которых положительна - 
оформить в виде функции*/

function deleteColumn(c){
    var result = [];
    for(i of c){
        var sum = 0, haveZero = false;
        for(j of i){
            sum += j;
            if(j === 0){
                haveZero = true;
            }
        }
        if(sum <= 0  && haveZero){
            result.push(i);
        } 
        
    }
    return result;
}
