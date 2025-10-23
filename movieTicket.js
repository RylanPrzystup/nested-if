const prompt= require ('prompt-sync')();

let weekend= prompt("Is it the weekend? ")
if(weekend == "yes")
{
    let time=(prompt("Is it before or after 5pm? "))
    if(time == "before"){
        let price = 10
        console.log("The flat price is: " + price)
        let age = parseInt(prompt("What is your age? "))

        if(age>=65)
        {
        let discount= 0.2
        let finalPrice = price - (price * discount)
        console.log("$" + finalPrice)
        }
        else{
        console.log("$" + price)
        }
    }
    if (time == "after")
    {
        let price = 15
        console.log("The flat price is: " + price)
         let age = parseInt(prompt("What is your age? "))

        if(age>=65)
        {
        let discount= 0.2
        let finalPrice = price - (price * discount)
        console.log("$" + finalPrice)
        }
        else{
        console.log("$" + price)
        }
    }

}
else{
    let price=8
    console.log("The flat price is: " + price)
     let age = parseInt(prompt("What is your age? "))

        if(age>=65)
        {
        let discount= 0.2
        let finalPrice = price - (price * discount)
        console.log("$" + finalPrice)
        }
        else{
        console.log("$" + price)
        }
};





