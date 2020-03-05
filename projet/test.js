// Type de variable

// var myVar; // le type de la variable est undefined
// myVar = 324; // type number
// myVar = "Bonjour"; // type string
// myVar = true; // type boolean
// myVar = new Array(); // type object

// Affichage des valeurs dans la console

// console.log(typeof 42); // Affiche "number"
// console.log(typeof 'blubber'); // Affiche "string"
// console.log(typeof true); // Affiche "boolean"
// var myVar;
// console.log(typeof myVar); // Affiche 'undefined'

// Boîte de dialogue : méthode alert()

// var num = 1 ;
// var prenom = "Dave" ;
// alert(num);
// window.alert(nom + " " + "Dave"); 

// Méthode write()

// var age = 35
// document.write("<b>Votre âge est :</b> " + age + "ans");

// Méthode prompt()

// var reponse1 = window.prompt("Saisissez votre nom");
// var reponse2 = window.prompt("Saisissez votre prénom");

// Méthode confirm()

// if (window.confirm("Voulez-vous continuer ?") == true) {}

/*// Exercice 1
var hi ="Bonjour";
var welcome = "Bienvenue sur notre site internet";
var reponse1 = window.prompt("Entrez votre nom");
var reponse2 = window.prompt("Entrez votre prénom");
if (window.confirm("Êtes-vous un homme") == true);
{
// window.alert(hi + " " + welcome + " " + reponse1 + " " + reponse2)
}

Exercice 2
var a = "100";
var b = 100;
var c = 1.00;
var d = true;
var e = false
window.alert("Ceci est une chaîne de caractères :" + " " + a);
window.alert(b--);
window.alert(c=a);
window.alert(d=e); 

Exemple 1

var temp = window.prompt("Saisissez la température");
if (temp > 38);
{
window.alert("Le patient a de la fièvre");
}

Exemple 2

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez la tension");
if (temp > 41 && tens > 25)
{
window.alert("Le patient va perdre patience");
}
Exemple 3

if (window.confirm("Êtes-vous patient ?") == false)
{
window.alert("Econduire l'olibrius");
}

Exemple 4

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez la tension");
var pouls = window.prompt("Saisissez le pouls");
if (temp > 42 || (tens < 25 && pouls > 180))
{
window.alert("Prévenir la famille")
}

Exemple 5

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez le pouls");
if (temp > 40 || tens >= 25)
{
window.alert("Hospitaliser le patient");
}

Exemple 6

var pat = window.confirm("Patient vivant") == true;
var pouls = window.prompt("Saisissez le pouls");
if (pat == false && pouls == 0)
{
window.alert("Appeler le curé");
}

Les conditions : Exercice 1

var nb = window.prompt("Saisissez un nombre");
if (nb%2 == 0)
{
window.alert("Nombre pair");
}
else
{
window.alert("Nombre impair");
}

Exercice 2

var ddn = window.prompt("Votre année de naissance");
var year = 2020
if (year - ddn <= 18)
{
window.alert("Vous êtes mineur");
}
else
{
window.alert("Vous êtes majeur");
}

Exercice 3

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

Exercice 4

var p;
var cel = window.confirm("Etes-vous célibataire ?");
if (cel) {
        p = 20;
}
else {
        p = 25;
}
var enf = window.prompt("Combien d'enfants avez-vous ?");
if (enf >= 1) {
        p = p + (enf * 10)
}
var sal = window.prompt("Quel est votre salaire ?")
if (sal <= 1200) {
        p = p + 10
}
if (p >= 50) {
        window.alert("La participation est plafonnée à 50% donc vous avez le droit à 50%")
}
else {
        window.alert("Vous avez le droit à" + " " + p + " " + "%" + "de participation aux repas")
}

Les boucles : Exercice 1

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

Exercice 2

var n=window.prompt("Saisissez un nombre");
console.log("Liste des nombres inférieurs");

do
{
      console.log("Nombre" + " " + n);
      n--;  

} while (n>=0)
console.log("fin de la boucle");

Exercice 3

var n1 = window.prompt("Saisissez le 1er nombre");
var n2 = window.prompt("Saisissez le 2ème nombre");
var r;

do 
{

  
}
while ()

Exercice 5

var x = parseInt(prompt("Veuillez saisir un nombre (x)"));
var n = parseInt(prompt("Veuillez saisir un seconde nombre (n)"));

for(n=0;n<10;n++)
{
        result=n * x;
        console.log(n + " " + "x" + " " + x + "=" + result);
}

var tom = mot.length;
console.log(tom);
var n = mot.substr(0,tom);
console.log(n);
var x = mot.indexOf("a");
console.log(x);


var mot = prompt("Veuillez saisir un mot");
var longueurmot = mot.length;
console.log(longueurmot);

Exercice 6

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


Exercice 7

var nbp = parseInt(prompt("Saisissez un nombre"));
var prem = true;

for(i=2;i<nbp;i++) {

        if (nbp%i == 0) {
        prem = false;
        console.log(nbp + " " + "n'est pas un nombre premier");
        break;
        }
        /*else {
        console.log(nbp + " " + "est bien un nombre premier");
        }
}
if(prem){

        console.log(nbp + " " + "est bien un nombre premier");
}

Exercice 8

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

/*/
