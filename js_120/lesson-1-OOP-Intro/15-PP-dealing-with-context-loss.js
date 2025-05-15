/**1
 * The code below should output "Christopher Turk is a Surgeon". 
 * Without running the code, what will it output? 
 * If there is a difference between the actual and desired output, 
 * explain the difference.
 * 
 * The output of the below will be 'undefined undefined is a undefined.'
 * 
 * This is because the function object which turk.getDescription evaluates to is
 * passed as an argument to logReturnVal.
 * 
 * Because execution context is determined by how a function is invoked
 * The invocation of 'getDescription' as 'func()' causes the execution
 * context to be implicitly bound to the global object. And because
 * when the method is passed by reference as a function object to
 * logReturnVal, it does not bring it's 'object' with it.
 */
{
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);
}
/**2
 *Modify the program from the previous problem so that 
 logReturnVal accepts an additional context argument. 
 If you then run the program with turk as the context 
 argument, it should produce the desired output.
 */
{
 let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  },
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

}

/**3
 * Suppose that we want to extract getDescription from turk, 
 * but we always want it to execute with turk as its execution context. 
 * How would you modify your code to do that?
 */
{
  let turk = {
   firstName: 'Christopher',
   lastName: 'Turk',
   occupation: 'Surgeon',
   getDescription() {
       return this.firstName + ' ' + this.lastName + ' is a '
                                   + this.occupation + '.';
   },
 };
 
 turk.getDescription = turk.getDescription.bind(turk);
 
 function logReturnVal(func) {
   let returnVal = func();
   console.log(returnVal);
 }
 
 logReturnVal(turk.getDescription);
 
 }

 /** 4
  * Will the below code produce: (Why or why not?)
The Elder Scrolls: Arena
The Elder Scrolls: Daggerfall
The Elder Scrolls: Morrowind
The Elder Scrolls: Oblivion
The Elder Scrolls: Skyrim

 * listGames is invoked as a method of TESgames which causes it's 'this binding' to be bound to TESgames
 * The TESGames object is accessed for it's 'titles' property, and each element is iterated over through the forEach method
 * The forEach method executes a callback function passing each 'title' as an argument to the CB function
 * The 'this' context is lost even though the callback function is lexically defined as an argument to forEach which is part of
 * the original method. This is because 'this binding' in JS is not lexically defined, but is based on invocation
 * 
 * The resulting output when accessing the seriesTitle property of the callback's execution context will be 'undefined'
 * Whereas the 'title' property will correctly be one of the elements in the array the titles property is associated with
 * 
 * undefined: Arena
 * undefined: Daggerfall
 * etc.
 * 
 * 


  */
 {
  const TESgames = {
    titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
    seriesTitle: 'The Elder Scrolls',
    listGames: function() {
      this.titles.forEach(function(title) {
        console.log(this.seriesTitle + ': ' + title);
      });
    }
  };
  
  TESgames.listGames();
 }

 /**5
  * Use let self = this; to ensure that TESgames.listGames uses 
  * TESGames as its context and logs the proper output.
  */

 {
  const TESgames = {
    titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
    seriesTitle: 'The Elder Scrolls',
    listGames: function() {
      let self = this;
      this.titles.forEach(function(title) {
        console.log(self.seriesTitle + ': ' + title);
      });
    }
  };
  
  TESgames.listGames();
 }

  /**6
   * The forEach method provides an alternative way to supply the execution context for the callback function. 
   * Modify the program from the previous problem to use that technique to produce the proper output:
  */

  {
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        this.titles.forEach(function(title) {
          console.log(this.seriesTitle + ': ' + title);
        }, this);
      }
    };
    
    TESgames.listGames();
   }

     /**7
   * Use an arrow function to achieve the same result:
  */

  {
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        this.titles.forEach((title) => {
          console.log(this.seriesTitle + ': ' + title);
        });
      }
    };
    
    TESgames.listGames();
   }
   
   /** 8
    * What will the value of foo.a be after this code runs?\
    * 
    * foo.a will be 0 still. This is because of how increment is invoked
    * 
    * increment is an inner function, and inner functions lose context unless
    * something like an arrow function is used where it would use the surrounding functions
    * context
    * 
    * Because it is not invoked this way, the inner function call implicitly binds it to
    * the global object
    * 
    * 
    */
{
   let foo = {
    a: 0,
    incrementA: function() {
      function increment() {
        this.a += 1;
      }
  
      increment();
    }
  };
  
  foo.incrementA();
  foo.incrementA();
  foo.incrementA();
}

/**9
 * Use one of the methods we learned in this lesson to invoke increment with an explicit 
 * context such that foo.a gets incremented with each invocation of incrementA.
 */

{
  let foo = {
   a: 0,
   incrementA: function() {
    //Alt 1:
    //  function increment() {
    //    this.a += 1;
    //  }
    //  increment.call(this);

     //Alt 2:
    //  (() => {
    //    this.a += 1;
    //  })()

    let increment = () => this.a += 1;

    increment();
   }
 };
 
 foo.incrementA();
 foo.incrementA();
 foo.incrementA();
 console.log(foo.a);
}

let cat = {
  name: 'Pudding',
  colors: 'black and white',
  identify() {
    let report = function() {
      console.log(`${this.name} is a ${this.colors} cat.`);
    }.bind(cat);
    report();
  },
};

cat.identify();