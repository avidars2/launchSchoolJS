const rlSync = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    moves: [],
    score: 0,
    wins: 0,
    choiceObj: {
      r: 'rock',
      p: 'paper',
      sc: 'scissors',
      l: 'lizard',
      sp: 'spock',
    },
    resetScore() {
      this.score = 0;
    }
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject =  {
    choose() {
      const choices = Object.values(this.choiceObj);
      let choice;
      while (true) {
        choice = rlSync.question(`Please choose ${choices.join(', ')} or shorthand ${Object.keys(this.choiceObj).join(', ')}:\n`);
        if (choices.includes(choice.toLowerCase()) ||
        Object.keys(this.choiceObj).includes(choice.toLowerCase())) break;
        console.log('Invalid choice, pick again');
      }
      this.move = choice.length < 3 ? this.choiceObj[choice.toLowerCase()] :
        choice.toLowerCase();
      this.moves.push([this.move]);
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
    winRates: null,
    distribution: null,
    isAI: true,
    choose() {
      if (this.moves.length % 5 === 0) {
        this.updateWinRates();
        this.adjustWeights();
        this.calculateChoiceDistribution();
        // console.log('win rates:', this.winRates);
        // console.log('Choice weights: ', this.choiceWeights);
      }
      let choice;
      const choices = [...choicesArr];
      let randomPercent = (Math.random());
      //Object values of distribution [0, 16, 40, etc.]
      //find index where random percent<= distribution
      // console.log(this.distribution);
      let choiceIdx = this.distribution.findIndex((num) => randomPercent <= num);
      choice = choices[choiceIdx];
      this.move = choice;
      this.moves.push([choice]);
    },
    updateWinRates() {
      let filteredMoves = this.moves.filter((moveArr) => moveArr[1] !== 1);
      if (filteredMoves.length > 15) filteredMoves = filteredMoves.slice(-15);
      this.winRates = this.evaluateWinRate(filteredMoves);
    },
    evaluateWinRate(moveArray) {
      let moveObject = moveArray.reduce((acc, el) => {
        acc[el[0]] = (acc[el[0]] || [0, 0]);
        acc[el[0]][0] += 1;
        // console.log(acc);
        if (el[1] === 2) {
          // console.log(acc);
          acc[el[0]][1] += 1;
        }
        return acc;
      }, {});
      // console.log(moveObject);
      for (let key in moveObject) {
        moveObject[key] = moveObject[key][1] / moveObject[key][0];
      }
      // console.log(moveObject);
      return moveObject;
    },
    adjustWeights() {
      let winRates = this.winRates; //Example: {lizard: 0.33, paper: 1}
      let weights = this.choiceWeights; //Example: {lizard: 0.2, paper: 0.2}
      for (let move in winRates) {
        if (winRates[move] >= 0.6) {
          for (let otherMoves in weights) {
            if (move === otherMoves) continue;
            if (weights[otherMoves] >= 0.09) {
              weights[otherMoves] -= 0.01;
              weights[move] += 0.01;
            }
          }
        } else if (winRates[move] <= 0.4) {
          for (let otherMoves in weights) {
            if (move === otherMoves) continue;
            if (weights[move] >= 0.05) {
              weights[otherMoves] += 0.01;
              weights[move] -= 0.01;
            }
          }
        }
      }
    },
    calculateChoiceDistribution() {
      let weights = this.choiceWeights;
      let distribution = {};
      let previousMove = null;
      for (let move in weights) {
        distribution[move] = Number(distribution[previousMove] ?? 0) + weights[move];
        previousMove = move;
      }
      this.distribution = Object.values(distribution);
    },
    displayChoiceWeights() {
      let choicePercentObj = JSON.parse(JSON.stringify(this.choiceWeights));
      for (let move in choicePercentObj) {
        choicePercentObj[move] *= 100;
        choicePercentObj[move] = `${choicePercentObj[move].toFixed(2)}%`;
      }
      console.log(choicePercentObj);
    }
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  maxScore: 3,
  roundWinner: null,
  cheats: false,

  displayWelcomeMessage() {
    console.log('Welcome to RPS!');
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing RPS! Goodbye!');
  },
  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move} | Computer chose: ${this.computer.move}`);

    let winner = this.whichMoveWon(humanMove, computerMove);

    if (winner === 'move1') {
      console.log(`${this.human.move.toUpperCase()} beats ${this.computer.move.toUpperCase()}! You win this round!\n`);
      this.roundWinner = 'human';
    } else if (winner === 'move2') {
      console.log(`${this.computer.move.toUpperCase()} beats ${this.human.move.toUpperCase()}! Computer wins this round!\n`);
      this.roundWinner = 'computer';
    } else {
      console.log("It's a tie\n");
      this.roundWinner = null;
    }
  },
  displayScore() {
    console.log(`Player Score: ${this.human.score} | Computer Score: ${this.computer.score}`);
  },
  displayGameWinner() {
    console.log(`\n${this.checkGameWinner()} wins!\n`);
    console.log(`Your wins: ${this.human.wins} | Computer wins: ${this.computer.wins}`);
  },
  displayMoveHistory() {
    console.log(`\nHuman move history: ${this.human.moves.slice(-5).map(el => el[0]).join(', ')}`);
    console.log(`Computer move history: ${this.computer.moves.slice(-5).map(el => el[0]).join(', ')}\n`);
  },
  checkGameWinner() {
    if (this.human.score === this.maxScore) return 'Human';
    if (this.computer.score === this.maxScore) return 'Computer';
    return '';
  },
  updatePlayerScores() {
    if (this.roundWinner === 'human') this.human.score += 1;
    if (this.roundWinner === 'computer') this.computer.score += 1;
  },
  updateWinner() {
    if (this.human.score === this.maxScore) {
      this.human.wins += 1;
    } else if (this.computer.score === this.maxScore) {
      this.computer.wins += 1;
    }
  },
  updatePlayerHistory() {
    const WIN_NUMBER = 2;
    const LOSS_NUMBER = 0;
    const TIE_NUMBER = 1;
    let movesArrayHuman = this.human.moves;
    let movesArrayComputer = this.computer.moves;
    if (this.roundWinner === 'human') {
      movesArrayHuman[movesArrayHuman.length - 1].push(WIN_NUMBER);
      movesArrayComputer[movesArrayComputer.length - 1].push(LOSS_NUMBER);
    } else if (this.roundWinner === 'computer') {
      movesArrayHuman[movesArrayHuman.length - 1].push(LOSS_NUMBER);
      movesArrayComputer[movesArrayComputer.length - 1].push(WIN_NUMBER);
    } else {
      movesArrayHuman[movesArrayHuman.length - 1].push(TIE_NUMBER);
      movesArrayComputer[movesArrayComputer.length - 1].push(TIE_NUMBER);
    }
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
  playAgain() {
    console.log('Press enter to start new game. (Press "n" and "enter" to exit)');
    let answer = rlSync.question();
    console.clear();
    return answer.toLowerCase()[0] !== 'n';
  },
  playNextRound() {
    console.log('Press enter to play next round. (Press "n" and "enter" to exit)');
    let answer = rlSync.question();
    console.clear();
    return answer.toLowerCase()[0] !== 'n';
  },
  resetPlayerScore() {
    this.human.resetScore();
    this.computer.resetScore();
  },
  updateAndReset() {
    this.updateWinner();
    this.displayGameWinner();
    this.resetPlayerScore();
  },
  activateCheats() {
    this.human.isAI && console.log('Your AI:(Spam/hold "enter" to let it play for you!)') || this.human.displayChoiceWeights();
    this.computer.isAI && console.log('Opponent AI:') || this.computer.displayChoiceWeights();
  },
  play() {
    while (true) {
      this.displayMoveHistory();
      if (this.cheats) this.activateCheats();
      this.human.choose();
      this.computer.choose();
      this.displayRoundWinner();
      this.updatePlayerScores();
      this.updatePlayerHistory();
      this.displayScore();
      if (this.checkGameWinner() || !this.playNextRound()) {
        this.updateAndReset();
        break;
      }
    }
    if (this.playAgain()) {
      this.play();
    } else this.displayGoodbyeMessage();
  },
  start() {
    this.displayWelcomeMessage();
    this.customizeSettings();
    this.play();
  },
  validateChoice(question) {
    let result = rlSync.question(question);
    while (result.toLowerCase() !== 'y' && result.toLowerCase() !== 'n') {
      console.log('Invalid choice, pick again');
      result = rlSync.question(`Please enter 'y' or 'n': `);
    }
    return result.toLowerCase();
  },
  customizeSettings() {
    let customize = this.validateChoice('Customize settings? (y/n): ');
    if (customize === 'n') return;

    let maxScore = Number(rlSync.question('Score per round? (Enter a round number): '));
    while (!Number.isInteger(maxScore)) {
      console.log('Invalid choice, pick again');
      maxScore = Number(rlSync.question(`Please enter a round number: `));
    }
    this.maxScore = maxScore;
    let activateCheats = this.validateChoice('Activate cheats? (See what opponent is most likely to pick!) (y/n): ');
    if (activateCheats === 'y') this.cheats = true;

    let playerOrAI = this.validateChoice('Let AI play for you? (y/n): ');
    if (playerOrAI === 'y') {
      this.human = createComputer();
      console.log('\nAI INITALIZED. SPAM/HOLD "ENTER" KEY TO WATCH MOVES UNFOLD.\n');
    }
  },
};

RPSGame.start();

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