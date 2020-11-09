


const readlineSync = require('readline-sync');


function askTvSerie(){
let tvSerie = {
name: readlineSync.question("quel nom de serie ? "),
"production": readlineSync.question("année de production de ta serie pref : "),
"Artist": []
};
 let userNumber = Number.parseInt(readlineSync.question("nombre d'acteurs de la serie : "));
for ( let n=0; n<userNumber; n++){
    tvSerie["Artist"].push(readlineSync.question("Nom d'un acteur : "))
}
console.log(tvSerie);

}

askTvSerie()

function randomizeCast(tvSerie){
   for(let i in tvSerie){
       let randomIndex= Math.floor(Math.random() * tvSerie.leght);
   }
}