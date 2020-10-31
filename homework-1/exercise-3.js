var value = 5;
var type = 'GB';

if(type === 'GB'){
  value = value * 1024;
  type = 'MB';
}
if(type === 'MB'){
  value = value * 1024;
  type = 'KB';
}
if(type === 'KB'){
  value = value * 1024;
  type = 'B';
}
console.log(value);