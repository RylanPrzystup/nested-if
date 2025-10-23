const prompt= require ('prompt-sync')();
let bill = parseInt(prompt("Enter the bill total: "))
let tip = 0
if (bill>50){
    let party = parseInt(prompt("Enter the # of people in your party: "))
    if (party<6){
        let tip2 = parseInt(prompt("Select Gratuity(15%, 18%, or 20% w/out % symbol): "))
        tip+=tip2
    }
    else{
        tip += 18
    }
}
else{
    let tip1 = parseInt(prompt("Enter gratuity (15% recommended w/out % symbol): "))
    tip+=tip1
}
let rewards = prompt("Are you a rewards card holder(yes/no): ")
if (rewards === "yes"||rewards === "Yes"||rewards === "YES" ){
    bill -=(bill*0.1)
}
let finalBill = bill-(bill*(tip/100))
console.log("Your total is: $"+finalBill)