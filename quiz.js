function checkAnswer(){
    let correctAnswer = "4";
    let checkBoxes = document.querySelectorAll("input[name='quiz']");
    let userAnswer = "";

    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            
            userAnswer = checkbox.value;
        }
    });
    if (userAnswer === correctAnswer){
        document.querySelector("#feedback").textContent = "Correct! Well done.";
    }
    else{
        document.querySelector("#feedback").textContent = "That's incorrect. Try again!";
    }
}
document.getElementById("submit-answer").addEventListener("click",checkAnswer);