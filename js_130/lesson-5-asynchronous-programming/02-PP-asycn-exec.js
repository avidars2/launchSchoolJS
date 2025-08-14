{//1
function delayLog() {
  let delay = (wait, action) => setTimeout(() => {action()}, (() => wait * 1000)());
  let logNum = (num) => console.log(num);
 
  for (let num = 1; num <= 10; num++) {
    delay(num, logNum.bind(this, num));
  }
  console.log('Loop finished');

}

// delayLog();
}
{//2
  function delayLog() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

// delayLog();
/**
 * In our solution for the previous problem, what do you think would happen if you replaced let delay with var delay? 
 * Go ahead and try it and see if you can explain the difference in behavior.

If 'let' was replaced with 'var', it would still take 10 seconds to complete, however  it would print '11' 10 times.

This is because 'delay' on each iteration of the for loop would still get incremented by 1. However execution of the function does not
occur until the synchronous code finishes running and the timer (delay) is complete. By that time, 'delay' will have already been incremented
to 11. Due to closure, 'delay' will be pointing to the variable it enclosed on due to it's definition and will log the evaluation of 'delay',
which is 11.
 */
}

{//3
function problem3() {
setTimeout(function() {   //1
  console.log('Once');    //5
}, 1000);

setTimeout(function() {   //2
  console.log('upon');    //6
}, 3000);

setTimeout(function() {   //3
  console.log('a');       //7
}, 2000);

setTimeout(function() {   //4
  console.log('time');    //8
}, 4000);
}

// problem3();
}

{//5

/**In what sequence does the JavaScript runtime run the functions 
 * q(), d(), n(), z(), s(), f(), and g() in the following code?

1. g() //Executed first as a synchronous operation
2. f() //Once stack is cleared, event loop takes async operation from task queue onto stack which invokes f()
3. d() //Event loop moves actions from task queue onto stack and invokes d 
4. z() //Event loop moves actions from task queue onto stack and invokes z
5. n() //setTimeout for 'n' was put onto web api before setTimeout for 's' so it is invoked first on stack
6. s() //s is invoked after 'n'
7. q()//q is invoked last
 * 
 */
// setTimeout(function() {//1
//   setTimeout(function() {
//     q();
//   }, 15);

//   d();

//   setTimeout(function() {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function() { //2
//   s();
// }, 20);

// setTimeout(function() { //3
//   f();
// });

// g();


/**
 * 
 */
}

{//6
  function afterNSeconds(callback, timer) {
    setTimeout(callback, timer * 1000);
  }

  afterNSeconds(() => console.log('hi'), 0.5);

}