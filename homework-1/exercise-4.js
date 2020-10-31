var percent = +prompt('Введите процент кредита');
var credit = +prompt('Введите сумму кредита');
var years = +prompt('Введите длительность кредита в годах');

var oneYear = credit * percent / 100;
var allTime = oneYear * years;
var sum = allTime + credit;

console.log('Процент за один календарный год - ', oneYear);
console.log('Процент за все время - ', allTime);
console.log('Общее количество денежных средств которое клиент банка выплатит за все года - ', sum);


