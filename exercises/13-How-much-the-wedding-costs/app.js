let guests = prompt('How many people are coming to your wedding?');

// Your code here
function getPrice(numberOfGuests){
    let price = 0;

    if (numberOfGuests <= 50){
        price = 4000;
    }
    else if (numberOfGuests <= 100){
        price = 10000;
    }
    else if (numberOfGuests <= 200){
        price = 15000;
    }
    else if (numberOfGuests > 200){
        price = 20000;
    }
    return price;
}


console.log('Your wedding will cost '+getPrice(parseInt(guests))+' dollars');
