const readlineSync = require('readline-sync')


let addition = 0;
let n = readlineSync.question('enter how many addition you want : ');

while (n !=0 ){
    addition = addition + Number.parseInt(readlineSync.question('enter a new number : '));
    n--;
}

console.log(addition)