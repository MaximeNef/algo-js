const readlineSync = require('readline-sync');
let fac = readlineSync.question("quel nombre veux tu ? ");

function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
  console.log(factorial(fac));