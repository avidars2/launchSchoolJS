/**1. What method can we use to bind a function permanently to a particular execution context?
 * The 'bind' method of the function constructor will return
 * a new function with the execution context's 'this binding'
 * permanently bound to the passed object.
 */

/**2. What will the following code log to the console?
 * Nothing will be logged as 'bind' does not call the function
 * the method is used on. It just returns a new function object
 * which has it's 'this binding' bound to a particular execution context.
 * 
 */
{
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
}
/** 3. What will the following code output?
 * logging foo() will return 'NaN'
 * logging bar() will return 5
 * 
 * This is because when foo is executed, foo is implicitly
 * bound to the global object, where it's 'a' and 'b' property does
 * not exist so it evaluates to 'undefined + undefined' which
 * evaluates to NaN
 * 
 * For bar, because the execution context of the function object
 * assigned to it is the 'obj' reference, 'this' refers to 'obj' and
 * will access the values of the 'a' and 'b' keys of 'obj'.
 * 
 * Which will evaluate to Numbers '2  + 3' and return 5
 * 
 */
{
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());
}

/**
 * 4. What will the code below log to the console?
 * 
 * The bind method is used on the 'foo' function declaration
 * with the object 'positivity' reference passed as an argument.
 * 
 * As a result the execution context of the returned functions this is 
 * bound to is the object 'positivity' points to.
 * 
 * Even though the function object returned by the 'bind' method
 * is assigned a property of 'negativity' and called as a method, which
 * would typically result in the 'this binding' being the 'negativity' object,
 * because the 'bind' method is used, the execution context is permanently set
 * to the object 'positivity' points to.
 * 
 */
{
  let positivity = {
    message: 'JavaScript makes sense!',
  };
  
  let negativity = {
    message: 'JavaScript makes no sense!',
  };
  
  function foo() {
    console.log(this.message);
  }
  
  let bar = foo.bind(positivity);
  
  negativity.logMessage = bar;
  negativity.logMessage();
}

/**
 * 5. What will the code below output?
 * 
 * 'bar' is initialized to the returned function object of the
 * 'bind' method called on the object reference of 'foo'.
 * 
 * When 'bind' is invoked, the object reference of 'obj' is passed
 * as an argument and used as the execution context for the returned 
 * function object.
 * 
 * As a result, the 'this binding' of 'bar' is permanently the object reference
 * of 'obj'. So even when the call method is invoked on 'bar' to call 'bar' with
 * 'otherObj' as the execution context, the execution context is still 'obj',
 * and 'Amazebulous!' is logged.
 * 
 */

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);