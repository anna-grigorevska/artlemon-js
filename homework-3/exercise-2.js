function transposeMatrix(a){
    var b = [];
    for(var i = 0; i < a.length; i++){
        b.push([]);
    };

    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a[0].length; j++){
            b[j].push(a[i][j]);
        };
    };

    return b;
}