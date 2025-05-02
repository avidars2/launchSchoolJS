{
// function foo() {
//   console.log("this refers to: " + Object.keys(this.console));
// }

// foo();
// // this refers to: [object global]
}
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

let peach = {
  poach: {
    bare() {
      console.log(this);
    }
  }
}

peach.bare = peach.poach.bare;

peach.bare(); //'this' Should refer to the 'peach' object
