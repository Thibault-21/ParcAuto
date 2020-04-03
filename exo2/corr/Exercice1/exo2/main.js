"use strict";
var toolbox = require("./toolbox.js");
var patient = require("./patient");

function afficherMenu(){
    var txt = "1/ Initialiser le patient \n";
    txt += "2/ Diagnostiquer maladie \n";
    txt += "3/ Afficher le patient \n";
    txt += "0/ Quitter";
    console.log(txt);
}

var monPatient = ["Gwendoline","Popieul",21];

var saisie = 1;
while (saisie !==0){
    afficherMenu();
    saisie = toolbox.saisirEntier();
    switch(saisie){
        case 1 : patient.initialiserPatient(monPatient[1],monPatient[0],monPatient[2]);
            break;
        case 2 : patient.diagnotiquerPatient();
            break;
        case 3 : patient.afficherPatient();
            break;
        case 0 : 
            console.log("A +");
            break;
        default : 
            console.log("Je n'ai pas compris");
            break;
    }
}