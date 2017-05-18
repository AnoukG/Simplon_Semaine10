//Variables//

var score = document.getElementById('score');

var boutonCerise = document.getElementById('bouton-cerise');

//Score//

boutonCerise.addEventListener("click", function(){
    score++;
    afficherScore();
});
