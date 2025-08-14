function test() {
  console.log(hi);

{
  console.log(hi());
  function hi() {
    return 'hi';
  }
  }
}

test();
let [left, right] = [1, 2];

let a = (() => left + right)(3, 5);
console.log(a);

let array = [1,2,3]
let [ ...newArray ] = array;
console.log(newArray)
