const readlineSync = require('readline-sync')


let fav = readlineSync.question("what's your favorite number?");

while(fav != 42 ){
    console.log("Are you sure?")
    fav = readlineSync.question("what's your favorite number?");
}


 console.log("YEEAHHH AWSOME CHOISE");
