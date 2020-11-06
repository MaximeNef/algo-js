
const readlineSync = require('readline-sync')



function rand10() {
    return Math.round(Math.random()*10) 
   }


function multirand(n) {

    for (let i = 0; i < n; i++) {
        tableau.push(rand10());
        
    }
    return tableau ;


} 
    
   
 let tableau =[];   
let n =  readlineSync.question('combien de chiffre veux tu ? :  ');
multirand(n);

console.log(tableau);