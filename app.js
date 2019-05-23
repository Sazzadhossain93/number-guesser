//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

    //ul elements

    const game = document.querySelector('#game'),
          minNum = document.querySelector(".min-num"),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector("#guess-btn"),
          guessInput = document.querySelector("#guess-input"),
          message = document.querySelector(".message");

          //asign ui min and max
          minNum.textContent = min;
          maxNum.textContent = max;

          //play again event listener

          game.addEventListener('mousedown', function(e){
              if(e.target.className === 'play-again'){
               window.location.reload();
              }
          })

          // listen for guess

         guessBtn.addEventListener("click", function(){
             let guess = parseInt(guessInput.value);

             //validate

             if(isNaN(guess) || guess < min || guess > max){
                  setMessage(`Please enter a number between ${min} and ${max}`, "red");
             }

            //check if won
            if(guess === winningNum){
               
            gameOver(true, `${winningNum} is correct, You win!!`)

            } else{
                //wrong number
                guessesLeft -=1;

               if(guessesLeft === 0){
                gameOver(false, `game over, you lost, The correct number was ${winningNum}`, "red")

               }else{
                  guessInput.style.borderColor = "red";

                  guessInput.value = '';

                  setMessage(`${guess} is not correct , ${guessesLeft} guesses left`, "red");
               }
                

                

                

            }

         });

         //game over

         function gameOver(won, msg){
             
            let color;
            won === true ? color = 'green' : color = 'red';
          //disable the input
          guessInput.disabled = true;

          //make the border green

          guessInput.style.borderColor = color;

          //set text color
          message.style.color = color;

          //user won
          setMessage(msg);

          //play again
          guessBtn.value = 'Play Again';
          guessBtn.className += 'play-again';
         }

         //get winning number

         function getRandomNum(min, max){
         return Math.floor(Math.random()*(max-min+1)+min);
         }

          function setMessage(msg, color){
             message.textContent = msg
             message.style.color = color;
         }
