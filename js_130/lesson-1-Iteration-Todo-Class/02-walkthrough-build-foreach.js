let arr = [1, 2, 3, 4];


function forEach(arr, callback, thisArg) {
/**
 * Iterate through array (first param)
 * invoke callback (second param) for each element of array
 * 
 * Each iterationg of array, pass current element as argument to
 * callback
 * 
 * Once finished iterating, return undefined 
 * 
 * */  
  callback = callback.bind(thisArg);

  for (let element in arr) {
    callback(arr[element], element, arr);
  }

}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});