function averagePair(array,avg){
    let left = 0;
    let right = array.length -1;
    while(left < right){
        let tempavg = (array[left] + array[right] )/ 2;
        if(tempavg == avg){
            return true;
        }
        else if(avg>tempavg){
            left++;
        } else {
            right++;
        }
    }
    return false ;
}
console.log(averagePair([1,2,3],2.5));

