class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/**
 What would happen if we added a play method to the Bingo class, 
 keeping in mind that there is already a method of this name in 
 the Game class from which the Bingo class inherits? 
 Explain your answer. 
 What do we call it when we define a method like this?


 If we defined a play method in the body of the Bingo class,
 it would essentially do something akin to 'shadowing' the play
 method of the Game superclass. This is because when the class
 is translated to a constructor function and the methods placed
 in an object accessible via the constructors '.prototype' property

 JavaScript will look for the 'play' method first in the instance,
 then in the instance's object prototype, which would refer to
 the object the constructor's '.prototype' points to, which has
 'play' now as an available method. This method will be invoked
 rather than JavaScript continuing up the prototype chain and
 checking for every available method.

 These methods are known as instance methods.
 */

 class Greeting {
  greet(str) {
    console.log(str);
  }
 }

 class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
 }

 class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
 }

 let hi = new Hello();
 let bye = new Goodbye();
 hi.hi();
 bye.bye();