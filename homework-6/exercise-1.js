/*Посчитать количество ссылок на странице, вывести их содержимое*/

let links = document.querySelectorAll("a");
let amount = document.getElementById('🔢');
let valuesEl = document.getElementById('🔠');

amount.innerText = `Количество ссылок на странице - ${links.length}`;

let values = '';
for (link of links){
  values += `${link.innerText}, `;
}
valuesEl.innerText = `Содержимое ссылок - ${values}`;