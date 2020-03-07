function collectOdds(array){
    let result = [];
    //This function helps in avoiding reassigning of result array again and again if the collectodds fucntion used as recursive function  
    function helperFunction(input){
        if(input.length == 0) return ;
        if(input[0] % 2 !==0 ){
            result.push(input[0]);
        }
        return helperFunction(input.slice(1));
    }
    helperFunction(array);
    return result;
}
console.log(collectOdds([1,2,3,4,5,6,7,8,9]));
