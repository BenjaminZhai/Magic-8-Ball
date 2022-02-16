// MAGIC 8 BALL PROJECT

// ELEMENT NAMES
let ansEl=document.getElementById("ans");

// EVENT LISTENER
document.getElementById("ball").addEventListener("click", answerq)

// EVENT FUNCTION
function answerq(){
    // Input
    let quest = document.getElementById("ask").value;

   
    

    // Check Question
    if(quest === "Does a magic 8 ball actually work?"){
        ansEl.innerHTML = "HOW DARE YOU DOUBT ME"
    } else if(quest === "Is JavaScript awesome?"){
        ansEl.innerHTML = "OF COURSE IT IS"
    } else if (quest === ""){
        ansEl.innerHTML = "Please ask a question..."
    } else {
        let ranum = Math.random();
        if(ranum <0.2){
        console.log(ranum)
        ansEl.innerHTML = "Without a Doubt."
    } else if (ranum < 0.4){
        console.log(ranum)
        ansEl.innerHTML = "As I see it, yes."
    } else if (ranum < 0.6){
        console.log(ranum)
        ansEl.innerHTML = "Concentrate and ask again."
    } else if (ranum < 0.8){
        console.log(ranum)
        ansEl.innerHTML = "Don't count on it."
    } else {
        console.log(ranum)
        ansEl.innerHTML = "Outlook not so good."
    }
}

}
