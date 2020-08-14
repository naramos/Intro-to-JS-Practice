var total = prompt('How much money do you have in your pocket?');

// Your code below:
function moneyamount(a){
    let result;
    if (a > 100){
        result = 'Give me your money!';
    }
    else if (a > 50){
        result = 'Buy me some coffee, you cheapskate!'
    }
    else {
        result = 'You are a poor guy, go away!'
    }
        return result;
}
    console.log(moneyamount(parseInt(total)));
