// Exercice 3

var menu = prompt("1-Multiples" + "\n" + "2-Somme et moyenne" + "\n" + "3-Nombre de voyelles" + "\n" + "4-Nombre des caractères suivants");

switch (menu) {
    case "1":
        var x = parseInt(prompt("Saisissez un premier nombre"));
        var y = parseInt(prompt("Saisissez un deuxième nombre"));

        function case1(x, y) {
            {
                document.getElementById("total").innerHTML = "Résultat =" + " " + (x * y);
            }
        } case1(x, y)

        break;

    case "2":
        var n = parseInt(prompt("Saisissez un nombre" + i));
        var i = 0;
        var nbs;
        var somme = n;
        var moy = n;
        function case2(i, nbs, somme, moy) {
            do {
                nbs = parseInt(prompt("Saisissez un nombre" + (i + 1)));
                somme = (somme + nbs);
                moy = (somme / (i + 2));
                i++
                document.getElementById("s et m").innerHTML = "La somme des nombres est de" + " " + somme + " " + "et la moyenne des nombres est" + " " + moy;
                console.log("Nombre" + (i + 1) + " = " + somme)
                console.log("Moyenne" + (i + 1) + "=" + moy)
            }
            while (i <= 10 && nbs != 0) {
            }
        } case2(i, nbs, somme, moy)
        break;

    case "3":
        var mot = prompt("Saisissez un mot");
        var voyelle = 0;
        var i = 0;
        function case3(mot, voyelle, i) {
            for (i = 0; i < mot.length; i++) {

                if ((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y")) {
                    voyelle++;
                    document.getElementById("voyelle").innerHTML = "Le nombre de voyelles dans ce mot est de" + " " + voyelle;
                    console.log(voyelle);
                }
            }
        } case3(mot, voyelle, i)
        break;

    case "4":
        var mot = prompt("Saisir un mot");
        var lettre;
        function case4(lettre,mot) {
            mot2 = mot.split(lettre);
            total = mot2.length-1;
            return total;
        } 
        alert(case4("", mot))
    }
