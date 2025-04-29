/** Question 1
 * 2 will be logged.
 * 
 * This is because the object 'qux' references is the prototype object
 * that gets passed as an argument to the 'create' method of the
 * Object constructor. This returns a new object where the internal
 * prototype [[Prototype]] is set to the the reference qux points to.
 * 
 * So when 'baz.foo' is summed with 'qux.foo', 'qux.foo' evaluates to 1
 * since JavaScript will search for it's own property first and finds 'foo'
 * 
 * Whereas 'baz.foo', JavaScript will search it's own property first then
 * up the prototype chain until it gets to the object 'qux' points to
 * which also contains the 'foo' property and will evaluate the value of 'foo's'
 * associated value 1.
 * 
 * As a result, 'baz.foo' and 'qux.foo' both evaluate to 1 and sum to 2.
 */

/** Question 2
 * 3
 * 
 * The code will log 3 to the console. This is because although baz's
 * internal prototype property is set to the object 'qux' references,
 * on line 3 when the 'foo' property is assigned 2, it leads 'baz.foo' to
 * evaluate to 2 instead.
 * 
 * This is because when a property assignment is done, the property is assigned
 * to the object, not it's prototype. And when JavaScript searches for the property
 * referenced, it will start with the actual object before searching up the prototype chain
 * for a matching property name.
 * 
 * As a result, baz has it's own property 'foo' set to 2, and qux's property remains unaffected
 * and still set to 1. So the operation passed as an argument to the log method on line 5
 * evaluates to 3.
 */

/**Question 3
 * 
 * The code will log 4 to the console.
 * 
 * This is because 'qux.foo' is set to 2 on line 3.
 * Because the object reference 'qux' points to delegates
 * it's properties to the object reference 'baz' points to,
 * which occurs because the object reference 'baz' points to
 * is created with the prototype object reference 'qux',
 * when 'qux.foo' is set to 2, the 'foo' property 'baz' references
 * is the current value the 'qux' object reference is set to.
 * 
 * So baz.foo evaluates to 2, as does qux.foo, which sums to 4.
 * 
 * Becaause prototypes are stored as references and not copies,
 * any mutation to the prototype will reflect when it's property is
 * accssed by an object which inherits it.
 * 
 */

/** Question 4
Write a function that searches the prototype chain of an 
object for a given property and assigns it a new value. 
If the property does not exist in any of the prototype 
objects, the function should do nothing. 
The following code should work as shown:
 */
// question4();

function question4() {

  /**
   * I: Object, property name, new value
   * O: None/Mutate object
   * 
   * Explicits:
   * 1. Search prototype chain of an object for a given property
   * 2. If property doesn't exist in any prototype object, do nothing
   * 
   * Implicits:
   * 1. I'll need to loop up a prototype chain
   * 
   * Ideas:
   * 1. This could be done recursively. Base case === prototype null
   * 
   * Tools:
   * 1. Object.prototype
   * 2. Object.hasOwnProperty
   * 3. Object.getPrototypeOf
   * 
   * fooC {} --> fooB {} --> fooA { bar: 1 }
   * Input: fooC, 'bar', 2
   * 
   * fooC {}, has 'bar' ? No, check prototype and pass as argument
   * fooB {}, has 'bar ? No, check prototype and pass as argument
   * fooA { bar: 1 }, has 'bar' ? Yes, set to 2
   * 
   * If no, check prototype and pass as argument
   * 
   * If prototype === null, do nothing
   * 
   * DS:
   * 1. Objects
   * 
   * Algorithm:
   * 1. 
   * 
   */

function assignProperty(obj, property, newValue) {
  if (obj.hasOwnProperty(property)) {
    obj[property] = newValue;
    return;
  } else if (Object.getPrototypeOf(obj) === Object.prototype) {
    return;
  } else {
    assignProperty(Object.getPrototypeOf(obj), property, newValue);
  }
}
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
}

/** Question 5
 * These loops won't always log the same result and this is
 * because 'for/in' will iterate over all enumerable properties
 * including properties of prototypes. So if 'foo' has a
 * prototype with enumerable properties, then those properties
 * will be iterated over as well by for/in, where as Object.keys
 * will only return the keys of foo's 'own' properties.
 * 
 */

function question5() {
  let hi = {a: 1};
  let foo = {b: 2, c: 3};
  Object.setPrototypeOf(foo, hi);

for (let property in foo) {
  // if (!foo.hasOwnProperty(property)) continue; //This will lead to same output
  console.log(`${property}: ${foo[property]}`);
} //Will log the property b, c, and inherited 'a'
//If a filter of Object.hasOwnProperty(property) was used
//then it would only log b and c

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
}); //Will only log 'own' property 'b' and 'c'

}
// question5();

/** Question 6
 * You can create an object without a prototype by using the
 * 'setPrototypeOf' method of the Object constructor on an object
 * to 'null', or using Object.create(null). This will set the internal
 * prototype property to 'null' which will lead to it resembling a regular
 * key/value data structure
 * 
 * You can determine if an object has a prototype by checking it's prototype.
 * If it is null, it has no prototype. This can be checked via Object.getPrototypeOf(obj)
 */

