// VARIABLES & DOM
////////////////////

// NOEUDS DOM
var bouton = document.getElementById("bouton-cerise");
var multi = document.getElementById("multiplicateur"); /* ATTENTION a la casse */
var noeudScore = document.getElementById("nombreScore");
var autoClick = document.getElementById("auto-click"); /* TRES ATTENTION au nom des variable DOM et ici */

// VARIABLES
var Score = 0;
var nbMultiplicateur = 1;
var prixAutoClick = 1000;


// AFTER PAGE LOADING
///////////////////////

afficherScore();
afficherNbMultiplicateur();
afficherAutoClick();

// LISTENER
///////////////

bouton.onclick = clic;
multi.onclick = acheterMultiplicateur;
autoClick.onclick = autoClick;

// FUNCTIONS
///////////////

/*** Cette fonction affiche le score courant***/
function afficherScore() {
    noeudScore.innerHTML = Score++;
}

/*** Cette fonction affiche le nombre multiplicateur***/
function afficherNbMultiplicateur() {
    var abeille = '<img src="assets/images/IconAbeille.png" width="10%">';

    multi.innerHTML = abeille + "Multiplicateur x " + nbMultiplicateur + " (Multiplicateur suivant = " + prixMulti() + " cerises)";

    /* innerHTML remplace le contenu, si tu veux afficher l'abeille il faut l'ajouter à chaque fois*/
}


/*** Cette fonction affiche l'auto-click***/
function afficherAutoClick () {
    var oiseau = '<img src="assets/images/Iconoiseau.png" width="15%"/>';

    autoClick.innerHTML = oiseau + "Auto-Click";
}

/*** Cette fonction affiche une mini cerise***/
function afficherMiniCerise() {

    var div = document.createElement('div');
    div.className += "thumbnail-cerise";
    div.innerHTML = "<img src=\"assets/images/IconCerise.png\" />";

    document.getElementById("bouton-cerise").appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 900);

}



/*** Cette fonction effectue l'action d'un clic***/
function clic() {
    Score = Score++ * nbMultiplicateur;

    afficherScore();
    afficherMiniCerise();
}

/*** Cette fonction retourne le prix multi***/
function prixMulti() {
    return 20 * nbMultiplicateur;
}

/*** Cette fonction effectue un clic tout seul***/
function autoClick() {
    // Definis une fonction qui s'execute tout les 900 ms
    setInterval(function() {

        clic();
    }, 900);
}


/*** Cette fonction achete un multiplicateur***/
function acheterMultiplicateur() {
    if (Score >= prixMulti()) {
        Score = Score - prixMulti();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de cerises !");
    }
}

/*** Cette fonction achete un auto click***/
function acheterAutoClick() {
    if (Score >= prixAutoClick()) {
        Score = Score - prixAutoClick();
        afficherScore();
        opacity(0.5);
    } else {
        alert("Vous n'avez pas assez de cerises !");
    }
}
