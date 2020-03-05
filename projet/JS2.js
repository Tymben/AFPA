/*/
function cube(nb) {
    document.getElementById("nb").innerHTML = "Le cube de " + nb + " est égal à" + " " + Math.pow(nb, + 3);
}    
cube(3);


function produit(x,y) {
    document.getElementById("x,y").innerHTML = "Le produit de" + " " + "3 x 5"+ " " + "est égal à" + " " + x*y;
}
produit(3,5);

function afficheImg(image) {
    document.getElementById("image").innerHTML = "<img src =" + image + ">"
} 
afficheImg("papillon.jpg");
/*/

var mot = prompt("Saisir un mot");
function nombre(lettre) 
{
    lettre = mot
    
    lettre++;
}
console.log(lettre);