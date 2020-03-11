// Exercice 4

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
