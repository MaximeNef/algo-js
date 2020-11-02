const readlineSync = require('readline-sync')


let l =readlineSync.question('give me de length :  ');
let h =readlineSync.question('give me de length :  ');

calcSurface = (l, h) => {        // function calcSurface(width, lenght) {
                                 //   console.log(width * lenght);}
                                 // calcSurface(width, lenght);
    return l * h;
  }
  
  console.log(calcSurface(l, h));

