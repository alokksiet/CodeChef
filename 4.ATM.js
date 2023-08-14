/*
You are given the balance in a bank account and the amount you want to withdraw. 
Transaction fee = 0.50
Your task is to determine whether the withdrawal is possible and, if so, calculate the new balance after the withdrawal.
*/
function withdraw(balance, amount) {
    const transactionFee = 0.50;
    if(balance<amount+transactionFee)
        return balance.toFixed(2);
    else 
        return (balance-amount-transactionFee).toFixed(2);
}
