const prompt= require ('prompt-sync')()

let age= parseInt(prompt("What is ur age: "))

if (age>=21)
{
    let income= parseInt(prompt("What is your income: "))
    if (income>=30000)
    {
        let credit=parseInt(prompt("Enter your credit score: "))
        if(credit>=650){
            console.log("You are eligible for a loan")
        }
        else
        console.log("You are not eligible")
    }
     
}
else
        console.log("You are not eligible")

