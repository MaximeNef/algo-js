const readlineSync = require('readline-sync');
let a1 = readlineSync.question("x1? ");
let b1 = readlineSync.question("y1? ");
let a2 = readlineSync.question("x2? ");
let b2 = readlineSync.question("y2? ");


function diff (num1, num2) {
    if (num1 > num2) {
      return (num1 - num2);
    } else {
      return (num2 - num1);
    }
  };
  
  function dist (x1, y1, x2, y2) {
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
  };
  console.log(dist(a1,b1,a2,b2));