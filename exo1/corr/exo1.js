var tab1=[2, 5, 6, 8, 9];
var tab2=[];

remplirTableau2();
afficherTableau(tab1);
afficherTableau(tab2);
var resultat = Math.round(calculMoyenne(tab1) * calculMoyenne(tab2) * 10)/10;
console.log("Le résultat de la moyenne du tableau 1 * la moyenne du tableau 2 est : ",resultat);

function remplirTableau2(){
    for(var i=0;i<tab1.length;i++){
        tab2.push(Math.round((tab1[i]*2/3)*10)/10);
    }
}

function afficherTableau(t){
    var txt="";
    for(var i=0;i<t.length;i++){
        if(i!==0) txt += " - ";
        txt += t[i];
    }
    console.log(txt);
}

function calculMoyenne(t){
    var somme = 0;
    for(var i=0;i<t.length;i++){
        somme += t[i];
    }
    return somme / t.length; 
}
