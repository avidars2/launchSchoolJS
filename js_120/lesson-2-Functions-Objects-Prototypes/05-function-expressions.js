const foo = function(el, gi) {
  el.forEach(element => {
    console.log(element);
  });
}

foo(undefined); //Will throw error at anonymous object

// console.log(foo.length)