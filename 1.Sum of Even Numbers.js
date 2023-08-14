
function sumOfEvenNumbers(arr){
    var sum = 0;
    arr.forEach(element => {
        if(element%2==0)    
                sum+=element;
    });
    return sum;
}
