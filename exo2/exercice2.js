let readline = require('readline-sync')
const MINUS= "-";

// 1 - create cars obj 

  let firstCar = {
    immatriculation: "AX 33333 BF",
    brand: "Yaris",
    year: 2002
  }
   let secondCar = {
    immatriculation: "DD 09090 TT",
    brand: "Yaris",
    year: 2004
  }
  let thirdCar = {
    immatriculation: "EE 43423 FF",
    brand: "Auris",
    year: 2012
  }
// 2 add to an array 
let carArray = [firstCar, secondCar, thirdCar]

//  3 main : create the app 
let chooseActions = 1; 
  while(chooseActions !== 0){
    displayMenu()
    chooseActions = readline.questionInt("Votre choix ? ")
      switch(chooseActions){
        case 1: splitLine(30, MINUS), displayCars(), splitLine(30, MINUS);
          break;
        case 2: addACar()
          break;
        case 0: leave()
          break;
        default: console.log("error")
          break;
      }
  }

  // functions

  function displayMenu(){
    let menu = "";
  
    menu += "1/ Afficher les voitures" + "\n"
    menu += "2/ Ajouter une voiture" + "\n"
    menu += "0/ Quitter" + "\n"
    console.log(menu)
  }


function displayCars(){
  for(let i = 0; i < carArray.length; i++){
    let cars = "";
      cars += "Plaque: " + carArray[i].immatriculation + "\n";
      cars += "Brand: " + carArray[i].brand + "\n";
      cars += "Year: " + carArray[i].year  + "\n";
      console.log(cars)
  }
}

function addACar(){
 let newCar = {}
    newCar.immatriculation = enterString("Quelle plaque ?"),
    newCar.brand = enterString("Quelle marque ?"),
    newCar.year = enterInt("Quelle année ?")
 
  if(newCar.hasOwnProperty("immatriculation") || newCar.hasOwnProperty("brand") || newCar.hasOwnProperty("year")){
    carArray.push(newCar)
  }
  splitLine(10, MINUS)
}


// support 

function splitLine(num, separator){
  let something = ""; 
  for(let i = 0; i < num; i++){
    something += separator; 
  }
  console.log(something);
}
splitLine(30, MINUS)

function enterString(question){
  return readline.question(question);
}
function enterInt(question){
  return readline.questionInt(question);
}
function leave(){
  console.log("A+");
}

