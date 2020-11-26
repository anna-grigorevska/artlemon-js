/*Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое*/

let paragraphs = document.querySelectorAll("p");
let amountEl = document.getElementById('amount');
let valuesEl = document.getElementById('values');

let values = '';
let amount = 0;

for (paragraph of paragraphs){
  if(paragraph.classList.contains('phrase')){
    values += `<p>${paragraph.innerText} </p>`;
    amount++;
  }
}

amountEl.innerText = `Количество тегов “p” с  классом “phrase” на странице - ${amount}`;
valuesEl.innerHTML = `Содержимое тегов - ${values}`;