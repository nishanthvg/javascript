//Check whether the given two digits have same no of frequency of digits 
function sameFrequency(n1,n2){
    let str1 = n1.toString();
    let str2 = n2.toString();
    let frequencyOfstr1 = [];
    let frequencyOfstr2 = [];
    if(str1.length !== str2.length){
        return false;
    }
    for(let val of str1){
        frequencyOfstr1[val] = ++frequencyOfstr1[val] || 1;
    }
    for(let val1 of str2){
        frequencyOfstr2[val1] = ++frequencyOfstr2[val1] || 1;
    }

    for(let key of str1){
        if(frequencyOfstr1[key] !== frequencyOfstr2[key]){
            return false;
        }
        if(!(key in frequencyOfstr2)){
            return false;
        }
    }
    
    return true;
}

console.log(sameFrequency(208,218));