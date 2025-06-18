// function joinOr(arr, delimiter=",", conjunction="or") {
//   let lastIdx = arr.length - 1;
//   if (arr.length <= 1) return `${arr[0] ?? ''}`
//   if (arr.length === 2) {
//     return arr.join(` ${conjunction} `);
//   } else {
//     return arr.slice(0, lastIdx).
//     join(`${delimiter} `) + `${delimiter} ${conjunction} ${arr[lastIdx]}`;
//   }
// }
// console.log(joinOr([]));
// console.log(joinOr([1]));
// console.log(joinOr([1, 2, 3]));
// console.log(joinOr([1, 2, 3], ';'));
// console.log(joinOr([1, 2, 3], ';', 'and'));

 function getHandValue(cards) {
    /**
     * Evaluate all cards in array
     * --face cards are 10, except A which is 11
     * If total > 21, look for any A and change value to 1,
     * then re-evaluate
     * 
     * return final value
     */

    let cardValue = cards.reduce((total, card) => {
      let faceCards = [...'JQKA'];
      if (faceCards.includes(card)) {
        if (card === "A") {
          return total + 11;
        } else return total + 10;
      } else return total + Number(card);
    }, 0);

    if (cardValue > 21) {
      let aces = cards.filter(card => card === "A").length;

      while(aces > 0) {
        console.log("Ace lowered")
        aces--;
        cardValue -= 10;
        if (cardValue <= 21) break;
      }
    }

    return cardValue;

  }

  let hand = ["A", "5", "A"];
  console.log(getHandValue(hand))