const prompt= require ('prompt-sync')();
let premium = 1000
let age = parseInt(prompt("Enter your age: "))
let status = prompt("Have you been in an accident(yes/no): ")
if (age < 25){
    premium+=500
    if (status == "yes"){
                status = "yes"
                premium += 300
            }
}
else{
    let xp = prompt("Do you have 5 or more years of experience driving(yes/no): ")
    if (xp == "yes"){
        if (status != "yes"){
        premium -= 150
        }
    }
    else{
        premium+=200
    }
}
if (premium>1500){
    let vehichle = prompt("Do you have multiple vehichles(yes/on): ")
    if (vehichle == "yes"){
        premium = premium-(premium*0.1)
    }

}
console.log("Your premium is: $"+premium)
