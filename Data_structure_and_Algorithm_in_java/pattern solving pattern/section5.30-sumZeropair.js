//T0 find the first pair only!! and accept only sorted array
function sumZero(array){
    for(let i = 0;i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i] + array[j] == 0){
                return [array[i],array[j]];
            }
        }
    }
}

console.log(sumZero([-1,0,1]));

//refactored version 
//Multiple pointer version
//that is one iteration starts from left and one from right 
function sumZero1(array){
    let left = 0;
    let right = array.length - 1 ;
    while(left<right){
        let sum = array[left] + array[right] ;
        if(sum === 0){
            return [array[left],array[right]];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
}
console.log(sumZero1([-4,-2,-1,0,1,4,8,9]));