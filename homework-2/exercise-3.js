var givenNamber = +prompt('Enter any number');
var result = [];

for(var i = 1; i <= givenNamber; i++){
  if(givenNamber % i === 0){
    result.push(i);
  }
}
alert(result);