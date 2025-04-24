const rlSync = require('readline-sync');
/**
Keeping score
Right now, the game doesn't have any dramatic flair.
It would be more interesting if we were playing up to, say, 5 points.
Whoever reaches 5 points first wins. Can you build this functionality?
We have a new noun -- a score.
Is that a new object type, or a state of an existing class?
Explore both options and see which works better.
 */
/**
 * Score could be part of 'createPlayer' state passed to each subType
 * Player type (move, score) --> human and computer
 */
/**
 * Keep track of a history of moves
As long as the user doesn't quit, keep track of a history of moves by both the human and computer.
Which data structure will you use? Will you use a new object or an existing object?
How will you display it?

Nouns:
1. Moves
2. 
 */
function createPlayer() {
  return {
    move: null,
    moves: [],
    score: 0,
    wins: 0,

    resetScore() {
      this.score = 0;
    }
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject =  {

    choose() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let choice;
      while (true) {
        choice = rlSync.question(`Please choose ${choices.join(', ')}:\n`);
        if (choices.includes(choice.toLowerCase())) break;
        console.log('Invalid choice, pick again');
      }
      this.move = choice;
      this.moves.push([choice]);
    },
  };

  return Object.assign(playerObject, humanObject);

}

function createComputer() {
  let playerObject = createPlayer();
  const choicesArr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  let computerObject = {
    choiceWeights: choicesArr.reduce(
      (acc, el) => {
        acc[el] = (1 / choicesArr.length);
        return acc;
      }, 
      {}),
    choose() {
      this.adjustWeights();
      const choices = [...choicesArr];
      let randomIndex = Math.floor(Math.random() * choices.length);
      let choice = choices[randomIndex]
      this.move = choice;
      this.moves.push([choice]);
    },
    adjustWeights() {
      if (this.moves.length % 5 === 0) {
        //If 5 moves have passed, adjust the weights based on below formula
        //One amendment is, if length of filtered array is > 15, only evaluate last 15 moves
        //
      }
    }
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  maxScore: 2,
  roundWinner: null,

  displayWelcomeMessage() {
    console.log('Welcome to RPS!');
  },
  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`Computer chose: ${this.computer.move}`);
    console.log('choice weights: ', this.computer.choiceWeights);

    let winner = this.whichMoveWon(humanMove, computerMove);

    if (winner === 'move1') {
      console.log('You win this round!');
      this.roundWinner = 'human'
    } else if (winner === 'move2') {
      console.log('Computer wins this round!');
      this.roundWinner = 'computer'
    } else {
      console.log("It's a tie");
      this.roundWinner = null;
    }
  },
  updatePlayerScores() {
    if (this.roundWinner === 'human') this.human.score += 1;
    if (this.roundWinner === 'computer') this.computer.score += 1;
  },
  updatePlayerHistory() {
    let movesArrayHuman = this.human.moves;
    let movesArrayComputer = this.computer.moves;
    if (this.roundWinner === 'human') {
      movesArrayHuman[movesArrayHuman.length - 1].push(2);
      movesArrayComputer[movesArrayComputer.length - 1].push(0);
    } else if (this.roundWinner === 'computer') {
      movesArrayHuman[movesArrayHuman.length - 1].push(0);
      movesArrayComputer[movesArrayComputer.length - 1].push(2);
    } else {
      movesArrayHuman[movesArrayHuman.length - 1].push(1);
      movesArrayComputer[movesArrayComputer.length - 1].push(1);
    }
    console.log(movesArrayHuman);
  },
  whichMoveWon(move1, move2) {
    if (move1 === move2) return 'tie';
    if ((move1 === 'rock' && (move2 === 'scissors' || move2 === 'lizard')) ||
        (move1 === 'paper' && (move2 === 'rock' || move2 === 'spock')) ||
        (move1 === 'scissors' && (move2 === 'lizard' || move2 === 'paper')) ||
        (move1 === 'lizard' && (move2 === 'paper' || move2 === 'spock')) ||
        (move1 === 'spock' && (move2 === 'rock' || move2 === 'scissors'))) {
      return `move1`;
    } else return `move2`;
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing RPS! Goodbye!');
  },
  playAgain() {
    console.log('Start new game? (y/n)');
    let answer = rlSync.question();
    return answer.toLowerCase()[0] === 'y';
  },
  playNextRound() {
    console.log('Play next round? (y/n)');
    let answer = rlSync.question();
    return answer.toLowerCase()[0] === 'y';
  },
  checkGameWinner() {
    if (this.human.score === this.maxScore) return 'Human';
    if (this.computer.score === this.maxScore) return 'Computer';
    return '';
  },
  updateWinner() {
    if (this.human.score === this.maxScore) {
      this.human.wins += 1;
    } else if (this.computer.score === this.maxScore) {
      this.computer.wins += 1;
    }
  },
  displayScore() {
    console.log(`Player Score: ${this.human.score} | Computer Score: ${this.computer.score}`);
  },
  resetPlayerScore() {
    this.human.resetScore();
    this.computer.resetScore();
  },
  displayGameWinner() {
    console.log(`\n${this.checkGameWinner()} wins!\n`);
    console.log(`Your wins: ${this.human.wins} | Computer wins: ${this.computer.wins}`);
  },
  displayMoveHistory() {
    console.log(`\nHuman move history: ${this.human.moves.join(', ')}`);
    console.log(`Computer move history: ${this.computer.moves.join(', ')}\n`);
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayRoundWinner();
      this.updatePlayerScores();
      this.displayMoveHistory();
      this.updatePlayerHistory();
      this.displayScore();
      if (this.checkGameWinner() || !this.playNextRound()) {
        this.updateWinner();
        this.displayGameWinner();
        this.resetPlayerScore();
        break;
      }
    }
    if (this.playAgain()) {
      this.play();
    } else {
      this.displayGoodbyeMessage();
    }
  }
};

RPSGame.play();

/**
 * I: History of moves, win rate with move
 * O: Adjusted weights
 * //[move, win/loss/tie] (0 === loss, 1 === tie, 2 === win)
 * [[r, 0], [r, 1], [p, 1]]
 * 
 * rock, paper, scissors, lizard, spock (default weight: 0.2 for all)
 * After move history >= 5, assess win/loss rate
 * 
 * if win rate >= 60%, add 4, subtract 1 from other weights
 * if win rate <= 40%, subtract 4, add 1 to other weights
 * 
 * r: .2
 * p: .2
 * s: .2
 * 
 * r >= 60% so r --> .24, p --> .19, s --> .19
 * 
 * What if weight for something is at 0?
 * 
 * How about a minmimum weight of .05
 * 
 * So if a weight === .05, don't subtract from it, and add amount goes down by 1
 * 
 * 1. Evaluate moves array length
 * 2. If length < 5 ignore
 * 3. If length % 5 === 0 //Every 5 moves, re-evaluate
 * 4. Get a filtered list of wins and loss moves
 * 5. From the filtered list, evaluate win/loss rate for each move
 * 6. If win rate for a move >= 60%
 * -----Check weights for others
 * ------If above .05, subtract .01 and add .01 to bank
 * ------Add banked amount to starting move
 * 7. if win rate for a move <= 40 %
 * -----Check weight of current move
 * -------If below .09, skip
 * -------Otherwise, subtract 0.4 and add 0.1 to other moves
 * 8. Return amended weight object
 * 
 */