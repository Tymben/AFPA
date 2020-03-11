// Les boucles : Exercice 1

var i = 1;
var pre;

console.log("Liste des prénoms");

while (i<=10 && pre!="")
{
pre=window.prompt("Saisissez un prénom n°" +i);
result=pre;
console.log("Prénom" +i+ " = "+result);
i++;
}
console.log("Fin de boucle");