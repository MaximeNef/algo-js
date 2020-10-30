const readlineSync = require('readline-sync')


let age = readlineSync.question("how old are you?");

if (age >= 18) {
  console.log("You are and adult");
} else {
    console.log(" your are and child!");
}