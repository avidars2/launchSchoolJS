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