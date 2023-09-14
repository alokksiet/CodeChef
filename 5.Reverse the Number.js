//You are given an integer N. Your task is to reverse the digits of N and print the resulting number.
function reverseNumber(num) {
    var revNum = 0;
    while(num>0){
        revNum = 10*revNum+num%10;
        num = Math.floor(num/10);
    }
    return revNum;
}
