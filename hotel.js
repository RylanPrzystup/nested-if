const prompt= require ('prompt-sync')();
let hotelBasePrice = 100;
let roomprice = 0
let seasonprice = 0
let dailyprice = 0
let finalprice = 0
let roomtype = prompt("What is your room type? Standard, deluxe or suite? ");
if (roomtype =="deluxe"|| roomtype=="standard"||roomtype=="suite"){

if(roomtype == "deluxe"){
     roomprice = hotelBasePrice+ 50;
     console.log("it will cost 50$ more per night. ")

}
if(roomtype == "suite"){
  roomprice= hotelBasePrice + 150;
 console.log("it will cost 150$ more per night. ")
}
if(roomtype == "standard"){
     roomprice = hotelBasePrice
    console.log("The base room price is $100")
}
}
else{
    console.log("invalid room type")
}



//new check

let season = prompt("Is it peak, regular or off-peak season? ");
if (season =="peak"|| roomtype=="regular"||roomtype=="off-peak"){
if(season == "peak"){
     seasonprice = roomprice + (roomprice * 0.5)
    console.log("There is 50% increase during peak season")
    console.log(seasonprice)


}

if(season == "regular"){
    console.log("There is no decrease or increase to your room type")
    seasonprice = roomprice
    console.log(seasonprice)


}

if(season == "off-peak"){
     seasonprice = roomprice - (roomprice * 0.2)
    console.log("There is 20% off during off-season")
    console.log(seasonprice)
}
}
else{
    console.log("Invalid season")
}

//new check

let loyalty= prompt("What is our loyalty status? None, Silver, Gold or Platinum? ")
if (loyalty =="silver"|| loyalty=="gold"||loyalty=="platinum"){

if(loyalty =="silver"){
    dailyprice=seasonprice


    
console.log("Free breakfast")
}

if (loyalty=="gold"){
    dailyprice=seasonprice
console.log("Free breakfast and room upgrade")
}

if (loyalty == "platinum"){
    dailyprice=seasonprice - (seasonprice * 0.1);
console.log("Free breakfast and free parking + 10% off")

}
}
else{
    dailyprice=seasonprice
    console.log("You get no extra benfits")
    console.log(dailyprice)
}



//new check

let lengthOfStay = parseInt(prompt("How many nights are you staying? "))

let stayprice = lengthOfStay * dailyprice;



if (lengthOfStay>=7 || lengthOfStay>=14)
{
if(lengthOfStay>=7){
     finalprice = stayprice - (stayprice * 0.15)
    console.log("The price for your whole stay is $" + finalprice)
}

if(lengthOfStay>=14){
     finalprice = stayprice - (stayprice * 0.25)
        console.log("The price for your whole stay is $" + finalprice)

}
}
else{
    console.log("Invalid stay value")
}