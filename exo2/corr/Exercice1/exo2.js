var readline = require("readline-sync");

var voiture1 = {
    plaque : "AX 33333 BF",
    marque : "Yaris",
    annee : 2002
}
var voiture2 = {
    plaque : "DD 09090 TT",
    marque : "Yaris",
    annee : 2004
}
var voiture3 = {
    plaque : "EE 43423 FF",
    marque : "Auris",
    annee : 2012
}

var parc = [voiture1,voiture2,voiture3];

var saisie = 1;
while (saisie !==0){
    afficherMenu();
    saisie = parseInt(readline.question("Votre choix ?"));
    switch(saisie){
        case 1 : afficherVoitures();
            break;
        case 2 : ajouterVoiture();
            break;
        case 0 : 
            console.log("A +");
            break;
        default : 
            console.log("Je n'ai pas compris");
            break;
    }
}

function afficherMenu(){
    var txt = "1/ Afficher les voitures \n";
    txt += "2/ ajouter une voiture \n";
    txt += "0/ Quitter";
    console.log(txt);
}

function afficherVoitures(){
    for(var i = 0 ; i < parc.length; i++){
        var txt = "";
        txt += "Plaque : " + parc[i].plaque + "\n";
        txt += "Marque : " + parc[i].marque + "\n";
        txt += "Annee : " + parc[i].annee + "\n";
        console.log(txt);
    }
}

function ajouterVoiture(){
    var voiture = {};
    voiture.plaque = readline.question("Quelle plaque ? : ");
    voiture.marque = readline.question("Quelle marque ? : ");
    voiture.annee = parseInt(readline.question("Quelle annee ? : "));
    parc.push(voiture);
}