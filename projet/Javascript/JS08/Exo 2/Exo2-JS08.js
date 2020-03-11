// Exercice 2

var b = prompt("Saisir un mot");
function nombre(lettre, mot) {
    mot2 = mot.split(lettre);
    total = mot2.length - 1;
    return total;

}
document.write(nombre("a", b));
console.log(total)