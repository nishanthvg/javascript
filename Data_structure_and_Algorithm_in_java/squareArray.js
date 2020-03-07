let array1 = [1,1,3,4];
let squareArray1= [16,9,1,1];
/*
function squareCheck(array,squareArray){
    if(array.lenght!== squareArray.lenght){
        return false;
    }
    for (let i = 0; i < array.lenght;i++){
        index = squareArray.indexof(array[i]**2); // Incase of repetition of numbers 
        // -1 simply means the index is not present 
        if(index === -1 ){
            return false;   
        }  
        console.log(squareArray);
        squareArray.splice(index,1)
    }
    //return squareArray
    return true;
}
console.log(squareCheck(array1, squareArray1));
*/
//refactored code of above 
// the problem is solved using frequency calculation beacuse before one had a O(n^2)
function squareCheck(array,squareArray){
    if(array.lenght!== squareArray.lenght){
        return false;
    }
    let frequencyOfarray = {};
    let frequencyOfsquarearray = {} ;
    //frequency calculation
    for(let val of array){
        frequencyOfarray[val] = ++frequencyOfarray[val] || 1 ;
    }
    for(let val of squareArray){
        frequencyOfsquarearray[val] = ++frequencyOfsquarearray[val] || 1 ;
    }
    console.log(frequencyOfarray);
    console.log(frequencyOfsquarearray);
    //check whether the array has a square array
    for(let key of array){
        //to check whether the squarearaay has the squared element of array
        if(!(key**2 in frequencyOfsquarearray)){
            return false;
        }
        //To check the whether the frequency are equal in the both arrays 
        if(frequencyOfsquarearray[key**2] !== frequencyOfarray[key]){
            return false ;
        }
    }
    return true;
}
console.log(squareCheck(array1, squareArray1));
