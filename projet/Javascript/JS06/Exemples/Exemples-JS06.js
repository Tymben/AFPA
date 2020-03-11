// Exemple 1
/*/
var temp = window.prompt("Saisissez la température");
if (temp > 38);
{
window.alert("Le patient a de la fièvre");
}

// Exemple 2

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez la tension");
if (temp > 41 && tens > 25)
{
window.alert("Le patient va perdre patience");
}

// Exemple 3

if (window.confirm("Êtes-vous patient ?") == false)
{
window.alert("Econduire l'olibrius");
}

// Exemple 4

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez la tension");
var pouls = window.prompt("Saisissez le pouls");
if (temp > 42 || (tens < 25 && pouls > 180))
{
window.alert("Prévenir la famille")
}

// Exemple 5

var temp = window.prompt("Saisissez la température");
var tens = window.prompt("Saisissez le pouls");
if (temp > 40 || tens >= 25)
{
window.alert("Hospitaliser le patient");
}
/*/
// Exemple 6

var pat = window.confirm("Patient vivant") == true;
var pouls = window.prompt("Saisissez le pouls");
if (pat == false && pouls == 0)
{
window.alert("Appeler le curé");
}