class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/**
 * A constructor call is invoked on line 15 to the 'Something' class
 * This creates a new object, sets the object prototype to the object referenced
 * by the function prototype of 'Something', aka the object referenced 
 * by 'Something.prototype'. The execution context is set to this new object
 * Then the function is invoked
 * Once the function is finished executing, the new object is returned and
 * assigned to 'thing'
 * 
 * During the function invocation, the 'data' proprerty is added to the new object
 * and is associated with the string 'Hello'.
 * 
 * On line 16, the static method, dupData is invoked which returns 'ByeBye', which
 * logs 'ByeBye' to the console as the string is passed as an argument to the log method.
 * 
 * On line 17, the instance has the 'dupData' method invoked, which is not found directly on
 * the instance, so JS looks up the prototype chain and finds it on the object pointed to
 * by 'thing' object prototype. On it is the 'dupData' method which returns the evaluates
 * the 'data' property of the execution context, which due to the method being invoked as a
 * method, is the containing object, aka the instance. So, 'this.data' evaluates to "Hello" and
 * it is concantenated with "Hello" before being returned.
 * 
 * So the outputs in order are:
 * 
 * 1. ByeBye
 * 2. HelloHello
 */