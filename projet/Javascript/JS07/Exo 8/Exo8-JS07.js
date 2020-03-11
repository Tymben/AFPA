// Exercice 8

var m = parseInt(Math.random() * 10);
var nbm;
do {
        nbm = parseInt(prompt("Trouver le nombre magique"));

        if (nbm < m) {
                alert("Plus grand");
        }
        else if (nbm > m) {
                alert("Plus petit");
                console.log(m);
        }
        else {
                alert("Bonne réponse")
        }
} while (nbm != m)