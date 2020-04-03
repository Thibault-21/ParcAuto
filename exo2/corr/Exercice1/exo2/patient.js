var toolbox = require("./toolbox");

var patient = {
    nom : "",
    prenom : "",
    age : 0,
    estMalade : false,
    descMaladie : "",

    initialiserPatient : function (nomRecuDuMain, prenomRecuDuMain, ageRecuDuMain){
        this.nom = nomRecuDuMain;
        this.prenom = prenomRecuDuMain;
        this.age = ageRecuDuMain; 
    },

    diagnotiquerPatient : function (){
        var alea = toolbox.genererAleatoire(1,5);
        switch (alea){
            case 1: 
                this.estMalade = false;
                this.descMaladie = "";
            break;
            case 2 :
                this.estMalade = true;
                this.descMaladie = "Gastro";
            break;
            case 3 :
                this.estMalade = true;
                this.descMaladie = "Grippe";
            break;
            case 4 :
                this.estMalade = true;
                this.descMaladie = "Rhume";
            break;
            default : console.log("Erreur de nb alea");
            break;
        }
    },

    afficherPatient : function (){
        var affichage = "";
        /** on Affiche la maladie que si le patient est malade */
        if(this.estMalade){
            affichage += "------------ PATIENT MALADE ------------ \n";
            affichage += "------------" + this.descMaladie + "------------\n";
            affichage += "--------------------------------------------\n"; 
            
        }
        affichage += "Nom : " + this.nom + "\n";
        affichage += "Prenom : " + this.prenom + "\n";
        affichage += "Age : " + this.age + "\n";
        console.log(affichage);
    }
}
module.exports = patient;