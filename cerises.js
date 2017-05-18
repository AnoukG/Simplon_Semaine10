//Variables//

var score = 0;
var noeudScore = document.getElementById("Score");
var boutonCerise = document.getElementById('bouton-cerise');

//Score//

afficherScore();
boutonCerise.addEventListener("click", function (event) {
    score++;
    afficherScore();
    afficherMiniCerise();
});


function afficherScore() {
    noeudScore.innerHTML = score;
}

function afficherMiniCerise() {

//Div pour animation cerises//
    var div = document.createElement('div');
    div.className += "thumbnail-cerise";
    div.innerHTML = "<img src=\"images/IconCerise.png\" />";

    document.getElementById("bouton-cerise").appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 900);

}
