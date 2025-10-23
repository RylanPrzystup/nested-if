const prompt= require ('prompt-sync')();

let stock = prompt("Is that item in stock? ")

if(stock == "yes"){
    let paymentMethod = prompt("Credit or PayPal? ")

    if (paymentMethod == "credit")
    {
        {
        let verify = prompt("is your account valid? ")

        if (verify == "yes"){
            let area = prompt("Are you shipping internatinally or domestically? ")
            if(area == "domestically"){
                let shippingPrice = "free"
                console.log("Your shipping price is " + shippingPrice)
            }
            if(area == "internatinally"){
                let supported = prompt ("Is your country supported? ")
                if (supported == "yes")
                {
                    console.log("There will be an extra $100 charge due to shipping")
                }
            }
        }

        else{
            console.log("If youre not verified, you must do so before ")
        }
        }
    }

    if (paymentMethod == "paypal")
    {
        let verify = prompt("is your account verified? ")

        if (verify == "yes"){
            let area = prompt("Are you shipping internatinally or domestically? ")
            if(area == "domestically"){
                let shippingPrice = "free"
                console.log("Your shipping price is " + shippingPrice)
            }
            if(area == "internatinally"){
                let supported = prompt ("Is your country supported? ")
                if (supported == "yes")
                {
                    console.log("There will be an extra $100 charge due to shipping")
                }
                else{
                    console.log("Shipping isnt supported in this country.")
                }
            }
        }

        else{
            console.log("If youre not verified, you must do so before ")
        }
    }

    else{
        console.log("Your payment method is not valid")
    }

}


    else{
        console.log("Sorry, your item is out of stock and your order can't be processed")
    }