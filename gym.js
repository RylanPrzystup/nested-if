const prompt= require ('prompt-sync')();

let basePrice = 50
let package = prompt("Enter package you want? Basic, Premium, VIP?: ")
let age2 = prompt("Enter your age: ")
let annual = prompt("Would you like to make annual or monthly payments: ")
let student = prompt("Are you a student: ")


if(age2 >= 25){
    if (package == "premium"){
        basePrice = basePrice + 30
        console.log("and a personal trainer")
        console.log(basePrice + "is your monthly price")
            if(annual=="annual"){
                basePrice = ((basePrice*12) - (basePrice*2))
                console.log("You get 2 months free and a free gym bag")
                console.log("$"+basePrice + " is your annual price")
            }
    } else if(package=="VIP"){
    basePrice = basePrice + 70
    console.log(basePrice + "is your monthly cost")
        if(annual=="annual"){
        basePrice = ((basePrice * 12) - (basePrice * 2))
        console.log("you get 2 months free and a free gym bag")
        console.log(basePrice + "is your annual price")
   }
}
else{
    if(annual=="annual"){
        basePrice = ((basePrice*12) - (basePrice*2))
    console.log("You get 2 months free and a free gym bag")
     console.log("$"+basePrice + " is your annual price")
}
}
if(student == "yes"){
    basePrice = (basePrice-(basePrice * .2))
}
}
else{
    console.log("You are too young for this gym")
}