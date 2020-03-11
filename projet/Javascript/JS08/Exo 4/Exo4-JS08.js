// Exercice 4

var str1 = prompt("Saisissez un mot");
var str2 = prompt("Saisissez un caractère");
var n = prompt("Saisissez une valeur");

function strtok(str1, str2, n) {
    var tableau = str1.split(str2);
    alert(tableau[n - 1]);
}
strtok(str1, str2, n)