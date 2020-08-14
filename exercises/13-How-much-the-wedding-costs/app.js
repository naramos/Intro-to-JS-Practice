let input = prompt('How many people are coming to your wedding?');

// Your code here
function calculatePriceFor(numberOfGuests){
    let price = 0;

    if (numberOfGuests <= 50){
        price = '$4,000';
    }
    else if (numberOfGuests <= 100){
        price = '$10,000';
    }
    else if (numberOfGuests <= 200){
        price = '$15,000';
    }
    else if (numberOfGuests > 200){
        price = '$20,000';
    }
    return price;
}


console.log('Your wedding will cost '+calculatePriceFor(parseInt(input))+' dollars');