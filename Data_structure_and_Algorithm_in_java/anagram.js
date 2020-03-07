/*
function anagram(str1,str2){
    let frequencyOfstr1 = {} ;
    let frequencyOfstr2 = {} ;
    for(let val of str1){
        frequencyOfstr1[val] = ++frequencyOfstr1[val] || 1 ;
    }
    for(let val of str2){
        frequencyOfstr2[val] = ++frequencyOfstr2[val] || 1 ;
    }
    console.log(frequencyOfstr1);
    console.log(frequencyOfstr2);
    for(let key of str1){
        if(!(key in frequencyOfstr2)){
            return false;
        }
        if(frequencyOfstr2[key] !== frequencyOfstr1[key]){
            return false;
        }
    }
    return true;
}

console.log(anagram('nisahnrh','hasdvc'));
*/


function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let frequencyOfstr1= {} ;
    for(let val of str1){
        frequencyOfstr1[val] = ++frequencyOfstr1[val] || 1 ;
    }
    for(let key of str2){
        if(!(frequencyOfstr1[key])){
            return false;
        } else {
            frequencyOfstr1[key]--;
        }
    }
    console.log(frequencyOfstr1);
    return true;
}

console.log(anagram('czz','zzc'));
