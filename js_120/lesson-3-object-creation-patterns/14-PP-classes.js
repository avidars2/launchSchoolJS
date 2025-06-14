/** 1) What do we mean when we say that classes are first-class values?
 * It means that classes have the following features of 
 * first-class values:
 * 
 * 1. They can be assigned as values of variables and properties
 * 2. They can be passed into and returned by functions
 * 
 * Essentially they are just like any other JavaScript value
 */

/** 2) Consider the following class declaration:
 * What does the static modifier do? 
 * How would we call the method manufacturer?


The 'static' modifier or keyword adds the method as a property
of the class constructor. This means it is invokable from the
Class directly. For the below example it can be invoked with syntax
such as 'Television.manufacturer()'

This differs from the model method within the class body.
The model method will get added to the prototype of the
constructor function which JavaScript will translate the
class into during runtime. 'Television.prototype.model'

 */

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

function createObj() {
  return {
    method1() {
      
    },
  }
}