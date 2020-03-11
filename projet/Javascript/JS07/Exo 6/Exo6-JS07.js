// Exercice 6

var mot=prompt("Saisissez un mot");
var voyelle=0;
var i=0;
alert(mot);
for (i=0; i<mot.length; i++) {

        if ((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y")) {

                voyelle++;
                console.log(voyelle);
        }
}
alert(mot + " " + "contient" + " " + voyelle + " " + "voyelles")
