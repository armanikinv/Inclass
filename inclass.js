const entry = prompt('Would you like to 1. Deposit or 2. Withdrawl?');
alert(typeof entry);
let balance = 500
if (entry == 1){
    const amount = Number(prompt('How much would you like to Deposit?'));
    alert('Your new balance is ${balance + amount}!');
    if (balance + amount <= 0){
        alert('Low Funds');

    }else {
        alert('You do not have any money');
    }
} else if (entry == 2){
    const amount = Number(prompt('How much would you like to Withdrawl?'));
    alert('Your new balance is ${balance + amount}!');
    if (balance + amount >= 1){
        alert('You got monnneeyyy!!')
    }
}