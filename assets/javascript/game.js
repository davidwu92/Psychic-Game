//first we need to choose a random # between 65-90

let random = Math.floor(Math.random() * 26) + 65

console.log(random) //logs the answer; delete later


document.onkeyup = function (event) {
    if (event.keyCode >=65 && event.keyCode <= 90) {

        //letter is our variable for keyCode, which now is bound between 65-90.
        //change up the console logs to reflect changes in the text of index.html

        let letter = event.keyCode
        if (letter === random) {
            console.log("you did it.")
        }
        else{
            console.log(letter)
            console.log("try again.")
            console.log(random)
        }
    }
}
