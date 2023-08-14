//You are given three distinct integers. Your task is to find and print the second-largest integer among the three.
function secondLargest(a, b, c) {
    if((a>=c && a<=b) || (a>=b && a<=c))
        return a ;
    else if((b>=c && b<=a) || (b>=a && b<=c))
        return b ;
    else 
        return c;
}
