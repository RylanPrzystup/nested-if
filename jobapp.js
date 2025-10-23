const prompt= require ('prompt-sync')();

let degree = prompt("Do you have the required degree? yes or no): ")
if (degree == "yes"){
    let experience = parseInt(prompt("Enter # of years of experience: "))
    if (experience>=2){
        let cert = prompt("Do you have your certifications(yes or no): ")
        if (cert == "yes"){

            let willing = prompt("Are you willing to relocate?(yes or no): ")
            if (willing == "yes"){
                console.log("Priority Review")
            }
            console.log("Strong Candidate")  
        }
        else{
            let willing = prompt("Are you willing to relocate?(yes or no): ")
            if (willing == "yes"){
                console.log("Priority Review")
            }  
            console.log("Qualified Candidate")
        }
    }
    else{
        console.log("Entry-Level consideration")
        
    }
}
else{
    console.log("Not Qualified")}
