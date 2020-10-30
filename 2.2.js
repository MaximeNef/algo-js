const readlineSync = require('readline-sync')

let min = readlineSync.question("enter a min number:");
let current = readlineSync.question("enter a current number:");
let max = readlineSync.question("enter a max number:");


if (min > max){
    console.log( "you are stupid");
} else if (min < current < max){
    console.log( "your current num is " + current);
}
    



