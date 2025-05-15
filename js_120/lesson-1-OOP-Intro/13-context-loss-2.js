let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;

    let bar = function () {
      console.log(self.a + ' ' + this.b);
    }.bind(this);

    bar();
  },
};

a = 'hi';
b = 'foo';

obj.foo(); // => hello foo (self refers to the object the 'foo' method is stored in) (this refers to the global object due to how 'bar' is invoked)



let newFoo = obj.foo;

newFoo();

let extraFoo = () => console.log(this);

extraFoo();

let obj2 = {
  a: 5,

  foo: {
    b: () => {
    console.log(this.a);
    console.log(this);
  }},
};

obj2.foo.b(); // => undefine