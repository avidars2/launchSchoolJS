  /**
   * Get prototype name
   * If prototype name !== null
   * 
   * I: Object
   * O: Array with name properties of prototype objects
   * 
   * qux --> object prototype === baz, baz.name === 'baz
   * 
   * Look at qux, get object prototype, get name of object prototype and
   * push to array
   * 
   * Repeat until object prototype === null
   * 
   * Invoke ancestors
   * Get object prototype of 'this'
   * If null, return array
   * Else
   * Push name property of object prototype to array
   * invoke function again, passing array
   */
  
Object.prototype.ancestors = function(arr=[]) {

  let proto = Object.getPrototypeOf(this);
  if (proto === null) return arr;
  arr.push(proto.name ?? 'Object.prototype');
  return Object.prototype.ancestors.call(proto, arr);
}





// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']