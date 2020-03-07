/*
function charCount(str){
    let result = {};
    for (let i = 0; i<str.length ; i++){
        let char = str[i];
        if (result[char] > 0){
            result[char]++;
        }
        else {
            result[char] = 1;
        }
        console.log(result[char]);
    }
    console.log(result);
} 

charCount("Hello hi!"); */


function charCount(str){
    let result = {};
    for (let char of str){
        result[char] = ++result[char] || 1 ; // or result[char] = (result[char] || 0) + 1 does the same as the before one 
    }
    console.log(result);
} 

charCount("Hello hi!");
