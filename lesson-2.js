// ОПЕРАТОР ИНКРИМЕНТ(увеличивает на единицу) и ДИКРИМЕНТ(уменьшает на единицу )
  // ++a увеличивает значение, префиксный инкримент
  // а++ увеличивает значение, постфиксный инкримент
  // --а уменьшает значениие, префиксный дикримент
  // а-- уменьшает значениие, постфиксный дикримент

  var a = 9;
  ++a; //10

  var b = 9;
  b++;  //10

  var e = 10;
  var c = e++ + 10; //20
  console.log(c);

  var f = 10;
  var d = ++f + 10; //21

  var g = 5;
  var h = g-- + 10; //15

  var i = 1;
  var j = 2;

  var k = i++ - 2 - ++j - j-- - ++j - 1 + i + j + ++j + i++; 
  //1 - 2 = -1 -3 = -4 - 3 - 3 - 1 + 2  + 3 + 4 + 2 = 0
  // a = 2
  // b = 3
  // b = 2
  // b = 3
  // b = 4
  // a = 3
  console.log(i);
  console.log(j);
  console.log(k);


//ЦЫКЛ ОПЕРАТОР for

  // for(первый сегмент - initialization; второй сегмент - условие - conditions; третий сегмент - шаг - step){
  //   тело цыкла - тут может быть условие, операторы, цыклы и тд
  // }

  for (var l = 0; l < 3; l++){
    console.log(i);
  }

  // l = 0 -> 0<3 - true -> выполняется тело цыкла - в консоле выводится 0 -> выполняется третий сегмент l = 1 ->
  // -> l = 1 -> 1<3 - true -> выполняется тело цыкла - в консоле выводится 1 -> выполняется третий сегмент l = 2 ->
  // -> l = 2 -> 3<3 - true -> выполняется тело цыкла - в консоле выводится 2 -> выполняется третий сегмент l = 3 ->
  // -> l = 2 -> 3<3 - false -> цыкл закончен

  var m = 0;
  for (var l = 0; l < 3; l++){
    m += l;
  }
  console.log(m);
  // l = 0 -> 0<3 - true -> выполняется тело цыкла - 0 + 0 , переменная m = 0 -> выполняется третий сегмент l = 1 ->
  // -> l = 1 -> 1<3 - true -> выполняется тело цыкла - 0 + 1 , переменная m = 1 -> выполняется третий сегмент l = 2 ->
  // -> l = 2 -> 2<3 - true -> выполняется тело цыкла - 1 + 2 , переменная m = 3 ->  цыкл закончен

//ОПЕРАТОРЫ С ЗНАКОМ РАВНО
// +=
// -=
// *=
// /=

  // var a = 1;
  // var b = 2;
  // b =+ a одинаковые выражения b = b + 2
  // b = 3;


//ВЫВЕСТИ ПЕРВЫЕ 5 ЧИСЕЛ ФЕБАНАЧИ
  var n = 5;
  var preLast = 0;
  var last = 1;


  for (var o = 0; o < n-2; o++){
    var newValue = preLast + last;
    // console.log(newValue);

    preLast = last;
    // console.log(preLast);

    last = newValue;

    // console.log(last);
  }
  console.log(newValue);
  // 0 < 5-2 - true -> выполняется тело цыкла - newValue = 0 + 1 = 1 -> preLast = last = 1 -> last = newValue = 1 -> выполняется третий сегмент o = 1 ->
  // -> 1 < 5-2 - true -> выполняется тело цыкла - newValue = 1 + 1 = 2 -> preLast = last = 1 -> last = newValue = 2 -> выполняется третий сегмент o = 2 ->
  // -> 2 < 5-2 - true -> выполняется тело цыкла - newValue = 1 + 2 = 3 -> preLast = last = 2 -> last = newValue = 3 -> выполняется третий сегмент o = 3 ->
  // -> 3 < 5-2 - false -> цыкл закончен


//ЦЫКЛ ОПЕРАТОР while
    // var p = 0;

    // while(p < 10){
    //   // console.log(p);
    // }
    //0 < 10 - true -> выполняется тело цыкла - выводиться в консоль лог 0 -> после идет бесконечное повторение -> 
    // -> 0 < 10 - true -> выполняется тело цыкла - выводиться в консоль лог 0

    var q = 0;
    while(q < 10){
      console.log(q);
      q++;
    }
    //0 < 10 - true -> выполняется тело цыкла - выводиться в консоль лог 0 -> q = 1 -> 
    // -> 1 < 10 - true -> выполняется тело цыкла - выводиться в консоль лог 1 -> q = 2 ->
    // -> 2 < 10 - true -> выполняется тело цыкла - выводиться в консоль лог 2 -> q = 3 ->
    //и так до 9

    //в обратном порядке
    var r = 10;
    while(r > -1){
      console.log(r);
      r--;
    }
    //9 > -1 - true -> выполняется тело цыкла - выводиться в консоль лог 9 -> q = 8 -> 
    //8 > -1 - true -> выполняется тело цыкла - выводиться в консоль лог 8 -> q = 7 -> 
    //7 > -1 - true -> выполняется тело цыкла - выводиться в консоль лог 7 -> q = 6 -> 
    //и так до 0

//ЦЫКЛ ОПЕРАТОР do while

  var s = 1;
  do{
    console.log(s);
    s--;
  }while(s > -1);

  //выполняется тело цыкла - выводиться в консоль лог 1 -> q = 0 ->  0 > -1 - true -> 
  //-> выполняется тело цыкла - выводиться в консоль лог 0 -> q = -1 ->  0 > -1 - false -> тело цыкла больше не выполняется

  var t = -10;
  do{
    console.log(t);
    t--;
  }while(t > -1);

  //выполняется тело цыкла - выводиться в консоль лог -10 -> q = -9 ->  -9 > -1 - false -> тело цыкла больше не выполняется


// МАСИВ - множество паеременных - набор значений 

var u = [10, 7, 8, 9, 10];

var v = u[2]; //переменной присвоено значение из масива U под порядковым номером 2, которые = 8 ( порядковый номер начинается с 0)

console.log(v);
console.dir(u);


var w = [];
var x = 10;

    // w[0] = 1;
    // w[1] = -9;

    // console.log(w); // (2) [1, -9]

  for(var y = 0; y < x; y++){
    w[y] = y*2;
  }
  console.log(w); //(10) [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

  var bigMasiv = [9, 'val1', 22, [1, [], 3, [], 5, [88, 'val7']], 0, [4, 6]]
  for(var z = 0; z < bigMasiv.length; z++){
    console.dir(bigMasiv[z]);
  };
  //выведет все элементы масива - от 0 до количества элементов в масиве сколько бы их не было

//ПОСЧИТАТЬ СУМУ ВСЕХ ЭЛЕМЕНТОВ МАСИВА
  var masivElements = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
  var sumMasivElements = 0;
 
  for(var element = 0; element < masivElements.length; element++){
    sumMasivElements += masivElements[element]; // sumMasivElements = sumMasivElements + masivElements[element]
  }
  console.log(sumMasivElements); //45
  //переменной element присваивается значение 0 -> 0 сравнивается с количествои элементов масива - true -> 
  //-> выполняется тело цыкла 0 + 0 = 0 sumMasivElements -> выполняется третий сегмент element = 1 ->  1 сравнивается с количествои элементов масива - true ->
  //-> выполняется тело цыкла 1 + 0 = 1 sumMasivElements -> выполняется третий сегмент element = 2 ->  2 сравнивается с количествои элементов масива - true ->
  //-> выполняется тело цыкла 2 + 1 = 3 sumMasivElements -> выполняется третий сегмент element = 3 ->  3 сравнивается с количествои элементов масива - true ->
  //-> выполняется тело цыкла 2 + 1 = 3 sumMasivElements -> выполняется третий сегмент element = 3 ->  3 сравнивается с количествои элементов масива - true ->


// СУМА ЧИСЕЛ КОТОРЫЕ БОЛЬШЕ НУЛЯ

    var masivZero = [0, -1, 2, -3, 4, 5, 6, -7, 8, 9,];
    var sumBigZero = 0;

    for(var elementZero = 0; elementZero < masivZero.length; elementZero++){
      if(masivZero[elementZero] > 0){
        sumBigZero += masivZero[elementZero]; // masivZero = masivZero + masivZero[elementZero]
      }
    }
    console.log(sumBigZero); //34
    //переменной element присваивается значение 0 -> 0 сравнивается с количествои элементов масива - false -> if не выполняется -> 
    //выполняется третий сегмент elementZero = 1 -> -1 сравнивается с количествои элементов масива - false -> if не выполняется -> 
    //выполняется третий сегмент elementZero = 2 -> 2 сравнивается с количествои элементов масива - true -> if выполняется 2 > 0  и sumBigZero = 2 ->
    //выполняется третий сегмент elementZero = 3 -> и тд

// СКОЛЬКО НУЛЕВЫХ ЭЛЕМЕНТОВ В МАСИВЕ

  var masivAmountZero = [0, -1, 2, 0, -3, 4, 5, 6, -7, 0, 8, 9,];
  var amountZero = 0;

  for(var elementNull = 0; elementNull < masivAmountZero.length; elementNull++){
    if(masivAmountZero[elementNull] == 0){
      amountZero ++;
    }
  }
  console.log(amountZero);

//НАЙТИ МАКСИМАЛЬНЫЙ ЭЛЕМЕНТ МАСИВА

  var maxElementMasiv = [-1, -2, -3, 4, -5, 6, 7, -8, 9,];
  var max = maxElementMasiv[0];

  for(var elementMax = 0; elementMax < maxElementMasiv.length; elementMax++){
    max = maxElementMasiv[elementMax];
    if(max < maxElementMasiv[elementMax]){
      max = maxElementMasiv[elementMax];
    }
  }
  console.log(max); //9

//НАЙТИ ВТОРОЕ ПО ВЕЛИЧИНЕ МИНИМАЛЬНОЕ ЧИСЛО
  var minTwoElementMasiv = [-1, 2, -3, 4, -5, -6, 7, -8, 9,];
  var min = minTwoElementMasiv[0];
  var lastElement = minTwoElementMasiv[0];

  for(var elementMin = 0; elementMin < minTwoElementMasiv.length; elementMin++){
    if(min > minTwoElementMasiv[elementMin]){
      lastElement = min;
      min = minTwoElementMasiv[elementMin];
    }
  }
  console.log(lastElement); //-6

//ЧИСЛО КРАТНОЕ ДВУМ
  var value1 = 8;
  var value2 = 4;

  var resultPositiv = value1 % value2;
  if((value1 % value2) === 0){
    console.log(resultPositiv);//0
  }

//СУМА ЗНАЧЕНИЙ КОТОРЫЕ КРАТНЫЕ ДВУМ
  var value3 = [-2, 1, 3, 4, 7, 6];
  var sumCratnoeTwo = 0;

  for(var cratnoe = 0; cratnoe < value3.length; cratnoe++){
    if((value3[cratnoe] % 2) === 0){
      sumCratnoeTwo += value3[cratnoe];
    }
  }
  console.log(sumCratnoeTwo);//8

//СУМА ПОЛОЖИТЕЛЬНЫХ ЗНАЧЕНИЙ КОТОРЫЕ КРАТНЫЕ ДВУМ
  var value4 = [-2, 1, 3, 4, 7, 6, 10];
  var sumCratnoeTwoPositiv = 0;

  for(var cratnoePositiv = 0; cratnoePositiv < value4.length; cratnoePositiv++){
    if((value4[cratnoePositiv] % 2) === 0 && value4[cratnoePositiv] > 0){
      sumCratnoeTwoPositiv += value4[cratnoePositiv];
    }
  }
  console.log(sumCratnoeTwoPositiv);//20
  
  

