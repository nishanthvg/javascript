//consecutive set of subset only can be taken
function maxSubarray(array,n){
    if(n > array.length) return null;
    let max = -Infinity;
    for(let i = 0 ; i< array.length-n+1 ;i++){ //i's iteration can be stopped by n from end of the array 
        let temp = 0;
        for (let j = 0 ; j<n;j++){
            temp += array[i+j]; // add the comb of n numbers in an array
        }

        if(temp>max){
            max = temp;
        }
    }
    return max;
}
console.log(maxSubarray([1,2,34,4,5,6],2));

//refactord 
function maxSubarray1(array,n){
    if(n > array.length) return null;
    let max = 0;
    let temp = 0;
    for (let i = 0;i<n; i++){
        max += array[i];
    }
    temp = max ;
    for(let i =n ;i<array.length ;i++){
        temp = array[i] - array[i-n] + temp;
        max = Math.max(temp,max);
    }
    return max ;
}
console.log(maxSubarray1([1,2,3,33,5],2));