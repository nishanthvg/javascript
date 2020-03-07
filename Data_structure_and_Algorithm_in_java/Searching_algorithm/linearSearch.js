function linearSearch(array,n){
    // add whatever parameters you deem necessary - good luck!
    for(let i = 0;i<array.length;i++){
        if(array[i] == n){
            return i;
        }
    }
    return -1;
  }
  console.log(linearSearch([1,2,3,4,5],5));