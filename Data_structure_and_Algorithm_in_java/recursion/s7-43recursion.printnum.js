function printNumber(num){
    if(num<=0){
        console.log("All done !");
        return ;
    }
    console.log(num);
    return printNumber(num-1);
}
printNumber(5);