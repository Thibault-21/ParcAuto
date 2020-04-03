// 1

let array1 = [2, 5, 6, 8, 9];
let array2 = []

// 2
function fulfillTheSecondArray(array){
  for(let i = 0; i < array.length; i++){
    // Fill in the second array by multiplying it by 2/3 in each case.
     array2.push(Math.round(array1[i] * (2/3)*10)/10)
  }
  return array2;
}

//3
function displayAnArrayInParam(array){
  for(let i = 0; i < array.length; i++){
    // display the array 
    console.log(array[i])    
  }
}

// 4
function returnTheAverage(array){
  let average = 0;
  for(let i = 0; i < array.length; i++){
    //  return the average 
    average += array[i]
  }
  return average / array.length;
}

// 5
function programme(array){
  console.log(array1);
  console.log(fulfillTheSecondArray(array1));
  console.log("Le résultat de la moyenne du tableau 1 * la moyenne du tableau 2 est : " + Math.round(returnTheAverage(array1) * returnTheAverage(array2)*10)/10)
}
programme(array1)

