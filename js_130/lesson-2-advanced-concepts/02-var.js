function hi() {
  console.log(a);
  if (false) {
    var a = 5;
    (() => {var b = 6; console.log(b)})();
  }

  console.log(a); //logs undefined
  // console.log(b);


}

hi();

var bar = 42;
// bar = 42
console.log(global.bar);
bar += 1;
console.log(global.bar);

let foo = 86;
console.log(global.foo);