//Given an array of integers, your task is to find the sum of all even numbers present in the array.
function sumOfEvenNumbers(arr){
    var sum = 0;
    arr.forEach(element => {
        if(element%2==0)    
                sum+=element;
    });
    return sum;
}
