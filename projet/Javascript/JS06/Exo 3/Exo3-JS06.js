// Exercice 3

var nb1 = parseInt(window.prompt("Saisissez un premier nombre"));
var op = window.prompt("Saisissez un opérateur");
var nb2 = parseInt(window.prompt("Saisissez un deuxième nombre"));

if (op != "+" && op != "-" && op != "*" && op != "/")
{
window.alert("Entrez un opérateur valide")
}
else if (op == "/" && nb2 == 0)
{
window.alert("Erreur")
}
else
{
switch (op)
{
case"+" :
window.alert(nb1 + nb2)
break;

case "-" :
window.alert(nb1 - nb2)
break;
 
case "*" :
window.alert(nb1 * nb2)
break;

case "/" :
 window.alert(nb1 / nb2)
break
}
}