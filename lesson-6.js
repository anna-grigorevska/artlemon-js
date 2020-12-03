/*
1.Создать массив объектов блюд.
2.Заполнить массив объектов всех блюд с ингредиентами
3.Посчитать сколько  раз встречается каждый ингредиент на одно блюдо */

let ingredients = {
  1:{
    id: 1,
    title: 'ingredient1',
    protein: 22.5,
    carbohydrates: 12.3,
    fats: 3.0,
    kilocalories: 112,
  },
  2:{
    id: 2,
    title: 'ingredient2',
    protein: 22.5,
    carbohydrates: 12.3,
    fats: 3.0,
    kilocalories: 112,
  },
  3:{
    id: 3,
    title: 'ingredient3',
    protein: 22.5,
    carbohydrates: 12.3,
    fats: 3.0,
    kilocalories: 112,
  },
  4:{
    id: 4,
    title: 'ingredient4',
    protein: 22.5,
    carbohydrates: 12.3,
    fats: 3.0,
    kilocalories: 112,
  },
  5:{
    id: 5,
    title: 'ingredient5',
    protein: 22.5,
    carbohydrates: 12.3,
    fats: 3.0,
    kilocalories: 112,
  },
};

let dishes = [
  {
    id: 1,
    title: "Name dishes 1",
    gram: 350,
    ingredients: [
      {
        id: 1,
        gram: 25,
      },{
        id: 2,
        gram: 23,
      }
    ]
  },
  {
    id: 2,
    title: "Name dishes 2",
    gram: 350,
    ingredients: [
      {
        id: 1,
        gram: 25,
      },{
        id: 2,
        gram: 23,
      },{
        id: 3,
        gram: 50,
      }
    ]
  },
  {
    id: 3,
    title: "Name dishes 3",
    gram: 150,
    ingredients: [
      {
        id: 1,
        gram: 5,
      },{
        id: 2,
        gram: 3,
      }
    ]
  }
];

let counter = {};

for(var i in ingredients){
  counter[i] = 0;
}

let index = 0;
let minKKal = false;

for(let i = 0; i < dishes.length; i++){
  let allProtein = 0;
  let allCarbohydrates = 0;
  let allFats = 0;
  let allKKal = 0;

  for(let j = 0; j < dishes[i].ingredients.length; j++){
    let id = dishes[i].ingredients[j].id;
    let gram = dishes[i].ingredients[j].gram;
    let protein = ingredients[id].protein;
    let carbohydrates = ingredients[id].carbohydrates;
    let fats = ingredients[id].fats;
    let kilocalories = ingredients[id].kilocalories;

    counter[id]++;

    allProtein += (gram/100) * protein;
    allCarbohydrates += (gram/100) * carbohydrates;
    allFats += (gram/100) * fats;
    allKKal += (gram/100) * kilocalories;
  }

  if(!minKKal){
    minKKal = allKKal;
  }

  if(minKKal > allKKal){
    index = i;
    minKKal = allKKal;
  }

  console.log(dishes[i].title + "-"  + allProtein + " - " + allCarbohydrates +" - " + allFats + " - " + allKKal);
}
console.log(counter);
console.log(dishes[index]);


//Найти блюда с наименьшей и с наибольшей калорийностью





//Посчитать сколько  раз встречается каждый ингредиент на одно блюдо
// let counter = {};

// for(var i in ingredients){
//   counter[i] = 0;
// }

// for(let i = 0; i < dishes.length; i++){
//   for(let j = 0; j < dishes[i].ingredients.length; j++){
//     let id = dishes[i].ingredients[j].id;
//     counter[id]++;
//   }
// }
