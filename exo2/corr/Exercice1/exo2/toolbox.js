var readline = require("readline-sync");

var toolbox = {
    saisirTexte : function(laQuestion){
        return readline.question(laQuestion);
    },
    saisirEntier : function(laQuestion){
        return parseInt(readline.question(laQuestion));
    },
    genererAleatoire : function(nbMin, nbMax){
        return Math.floor(Math.random() *  (nbMax - nbMin) + nbMin);
    },
    afficherUnTableau : function(tab){
        for (var i = 0 ; i < tab.length ; i++){
            tab[i].toString();
        }
    }
}
module.exports = toolbox;