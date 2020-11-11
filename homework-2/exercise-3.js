var givenNamber = +prompt('Enter any number');
var counter = +prompt('Enter the number of displayed values');
var result = [];

for(var i = 1; i <= givenNamber && counter !== 0; i++){
  if(givenNamber % i === 0){
    result.push(i);
    counter--;
  }
}
alert(result);