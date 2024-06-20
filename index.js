const max = 100;
const min = 50;
let ran_num=Math.floor(Math.random()*(max-min+1))+min;
let attempt = 0;
let running = true;

document.getElementById("submit").onclick = function(){
    const user_guess = Number(document.getElementById("guess_no").value);
    let feedback = document.getElementById("feedback");
    let num_attempts = document.getElementById("attempts");
    let error = document.getElementById("error"); ;
    //const max = 100;
    //const min = 50;
    
    let running = true;


    if (!running) return;
        error.innerHTML="";
        feedback.innerHTML="";
        if (isNaN(user_guess)){
            error.innerHTML="Please enter a valid number";
            return;
        }
        else if(user_guess<min || user_guess>max){
            error.innerHTML="Please enter a valid number";
            return;
        }
        else{
            attempt++;
            if (user_guess===ran_num){
                feedback.innerHTML = `Congratulations! You guessed the correct number ${ran_num} in ${attempt} attempts.`;
                feedback.style.color = 'green';
                running = false;
            }
            else if(user_guess<ran_num){
                feedback.innerHTML = 'Too low! Try again.';
                feedback.style.color = 'red';
            }
            else{
                feedback.innerHTML = 'Too high! Try again.';
                feedback.style.color = 'red';
            }
        }
        num_attempts.innerHTML = `Number of attempts: ${attempt}`;
        
    }
