//Setting initial variables
let wins = 0
let losses = 0
let random = Math.floor(Math.random() * 26) + 65
    console.log(random) //for letter reference; delete later
let gLeft = 10
let gSoFar = ``


for (let games = 0; games < 10; games++) {
    //*NEW GAME STARTS HERE*
    random = Math.floor(Math.random() * 26) + 65
         console.log(random) //for letter reference; delete later
    gLeft = 10
    gSoFar = ``
    document.getElementById('wins').textContent='Wins: ' + wins
    document.getElementById('losses').textContent='Losses: ' + losses
    document.getElementById('gLeft').textContent='Guesses left: ' + gLeft
    document.getElementById('gSoFar').textContent='Guesses so far: ' + gSoFar
    
    //LISTENING FOR INPUTS
    document.onkeyup = function guess (event) {
        if (event.keyCode >=65 && event.keyCode <= 90) {
        
            if (event.keyCode === random) { //RIGHT GUESS
                wins = wins + 1
                console.log("wins: " + wins) //checking if wins is changing to 1
                alert(`Congratulations! Let's play again!`)
            }

            else{   //WRONG GUESS
                if(gLeft!==1) {  //still have more guesses
                    gLeft = gLeft - 1
                    document.getElementById('gLeft').textContent='Guesses left: ' + gLeft
                    gSoFar = gSoFar + event.key
                    document.getElementById('gSoFar').textContent='Guesses so far: ' + gSoFar
                }

                else{ //no more guesses: user lost game
                    losses = losses + 1
                    console.log("losses: " + losses) //checking if wins is changing to 1
                    alert(`Sorry! Your letter was wrong!`)
                }    
            }
        }
    }
}