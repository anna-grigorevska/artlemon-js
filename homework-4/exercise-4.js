/*Задано предложение - подсчитать количество вхождений
 каждого слова в предложении. Вывести список уникальных слов
  и напротив каждого слова - сколько раз встретилось*/

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function amountWords (str){
  str = str.toLowerCase();
  var words = str.split(' ');
  var words = words.filter(onlyUnique);
  for( var i = 0; i < words.length; i++){
    var count = str.split(words[i]).length - 1;
    console.log(words[i] + ' - ' + count);
  }
}

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit repellendus sunt ipsam corrupti Lorem ipsum dolor Lorem ipsum dolor';
amountWords(str);