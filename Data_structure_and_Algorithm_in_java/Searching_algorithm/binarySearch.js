function binarySearch(array,n){
    let left = 0;
    let right = array.length -1 ;
    /*if(array.length %2 == 0){
        let middle = array.length / 2;
    } else {
        middle = (array.length -1) / 2;
    }*/
    let middle = Math.floor((left + right)/2);
    while (array[middle] !== n && left <= right){
        if(array[middle] > n)  right = middle -1 ;
        else left = middle +1 ;
        middle = Math.floor((left + right)/2) ;
    }
    /*if(array[middle] == n) return middle ;
    else return -1;*/
    return array[middle] == n ? middle : -1;
  }

  console.log(binarySearch([1,2,3,4,5,6,7,8,9],6));