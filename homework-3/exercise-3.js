function sumMatrix(a, b)
{   
    var c = [];
    for (var i = 0; i <  a.length; i++){ 
        c[i] = [];
        for (var j = 0; j < a[0].length; j++){
            c[i][j] = a[i][j] + b[i][j];  
        } 
    }
    return c;
}