// Exercice 7

var nbp = parseInt(prompt("Saisissez un nombre"));
var prem = true;

for(i=2;i<nbp;i++) {

        if (nbp%i == 0) {
        prem = false;
        console.log(nbp + " " + "n'est pas un nombre premier");
        break;
        }
/*/
    else {
        console.log(nbp + " " + "est bien un nombre premier");        }
}
if(prem){

        console.log(nbp + " " + "est bien un nombre premier");
}
