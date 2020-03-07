function countUniquenumber(array){
    let val = 0;//One kept constant to check with the moving one 
    let move = 1;
    if(array.length == 0){
        return 0;
    }
    while(move < (array.length)){
        if(array[val] !== array[move]){
            val++;
            array[val] = array[move];
            move++;
        } else {
            move++;
        }
        console.log(array);
        
    }
    return val+1;
}
console.log(countUniquenumber([9,90,90,100]));
