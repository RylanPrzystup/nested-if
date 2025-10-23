const prompt= require ('prompt-sync')();
let gpa = parseInt(prompt("Enter your GPA: "))
if (gpa >= 3.0){
    let sat = parseInt(prompt("Enter your SAT score: "))
    if (sat >= 1200){
        let extra = prompt("Did you participate in any Extracurricular activities(yes/no): ")
        if (extra === "yes"||extra === "Yes"||extra === "YES"){
            let leader = prompt("Did you hold a leader ship role(yes/no): ")
            if (leader === "yes"||leader === "Yes"||leader === "YES"){
                console.log("Admitted with Honors")
            }
            else{
                console.log("Admitted")
            }
            
        }
        else{
            console.log("Admitted on probation")    
        }
    }
    else{
        console.log("SAT score to low for admittion")
    }
}
else{
    console.log("GPA to low for admittion")
}