



// kilometerToMeter

function kilometerToMeter(meter){
    if(meter < (0)){
        return "input cannot be less than zero";
    }
    else{
        return (meter * 1000);
    }
}


// budgetCalculator

 function budgetCalculator(watch, phone, laptop){
     var watchBudget = watch * 50;
     var phoneBudget = phone * 100;
     var laptopBudget = laptop * 500;
     var totalBudget = watchBudget + phoneBudget + laptopBudget;
     return totalBudget;
 }

 var cost = budgetCalculator(2, 3, 1);
 console.log(cost);


    
//  megaFriend

function megaFriend(name){
    var mega = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length > mega.length){
            mega = currentName;
        }
    }
     return mega;
}
var result = megaFriend(["Moomtahina", "Prerona", "Raisa", "Mahajaben"]);
console.log(result);



// hotelCost

function hotelCost(cost){
    var stay = 0;
    if (cost <= 10){
        stay = cost * 100;
    }
    else if(cost <= 20){
        var firstNight = 10 * 100;
        var remaining = cost - 10;
        var secondNight = remaining * 80;
        stay = firstNight + secondNight;
    }
    else{
        var firstNight = 10 * 100;
        var secondNight = 10 * 80;
        var remaining = cost - 20;
        var thirdNight = remaining * 50;
        stay = firstNight + secondNight + thirdNight;
    }
    return stay;
}

var result = hotelCost(25);
console.log(result);
