/**
 * 
 */

function createPlayer() {
    return {
        //Name?
        // Move chosen?
        //Wins?
        //Ties?
        //Losses?
        choose() {
            //Choose move
        }
    }
}

function createMove() {
    return {
        // paper?
        //
        // Scissors?
        // rock?
        //.
    }

}

function createRule() {

}

let compare = function(move1, move2) {

}
const RPSGame = {
    human: createPlayer(),
    computer: createPlayer(),

    play() {
        displayWelcomeMessage();
        this.human.choose();
        this.computer.choose();
        displayWinner();
        displayGoodbyeMessage();
    }
}

RPSGame.play();