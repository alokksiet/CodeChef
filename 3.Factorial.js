//You are given an integer N. Your task is to calculate and print the factorial of N.
function factorial(n){
    var factorialNum = 1;
    if(n ==0 || n==1)
        return 1;
    for (let index = 1; index <= n; index++) {
        factorialNum *=index;        
    }
    return factorialNum;
}
