const readlineSync = require('readline-sync')

let n = [1, 2, 3, 4, 5];
let m = [100, 101, 102];

let x= n.reduce((a, b) => a + b) / n.length ;

console.log(x);
