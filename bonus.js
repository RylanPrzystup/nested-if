const prompt= require ('prompt-sync')();

let basebonus=1000;

let yearsOfService = parseInt(prompt("How many years have you worked here "))
if(yearsOfService>=5)
{
    let basebonus=1000;

    let performanceRating = parseInt(prompt("Enter your perfomance rating 1-5 "))

    let bonus = basebonus + (basebonus * 0.5)
        
    if(performanceRating === 5){
        let finalbonus = bonus + 2000

        console.log ("Your bonus is $" + finalbonus)
    }

    if (performanceRating === 4){
        let finalbonus = bonus + 1000
        console.log ("Your bonus is $" + finalbonus)
    }
    if (performanceRating<=3){
        finalbonus = bonus
        console.log ("Your bonus is $" + finalbonus)
    }
}
else{
    let performanceRating = parseInt(prompt("Enter your perfomance rating 1-5 "))
    let bonus = basebonus
    if(performanceRating === 5){
        let finalbonus = bonus + 2000

        console.log ("Your bonus is $" + finalbonus)
    }
    else{
        let finalbonus = bonus
        console.log("Your bonus is $" + finalbonus)
    }



}

let dephead= prompt("are ou department head? ")

if(dephead == "yes")
{
    finalbonus = finalbonus + (finalbonus * 0.25)
    console.log("Your bonus is $" + finalbonus)
}

else{
    console.log("You get no extra bonus rom being dept. head. ")
}

