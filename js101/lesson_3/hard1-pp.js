/**
 * Question 1
 */
{
  function first() {
    return {
      prop1: "hi there",
    };
  }
  
  function second() {
    return
    {
      prop1: "hi there";
    }
  }
  
  console.log(first());
  console.log(second());


  //No, the return statement cuts for the second function never sees the object because of it automatically ending the statement on the line
}

/**
 * Question 2
 */
{
  let object = { first: [1] };
  let numArray = object["first"];
  numArray.push(2);
  
  console.log(numArray); //  => "[1, 2]"
  console.log(object); // => {first: [1, 2]}
}

/**
 * Question 3
 */
{

  {//A
    function messWithVars(one, two, three) {
      one = two;
      two = three;
      three = one;
    }
    
    let one = ["one"];
    let two = ["two"];
    let three = ["three"];
    
    messWithVars(one, two, three);
    
    console.log(`one is: ${one}`); //["one"]
    console.log(`two is: ${two}`); //["two"]
    console.log(`three is: ${three}`); //["three"]
    //Reassignment to a different pointer won't mutate the original array. Parameters are getting reappointed due to variable shadowing
  }

  {//B
    function messWithVars(one, two, three) {
      one = ["two"];
      two = ["three"];
      three = ["one"];
    }
    
    let one = ["one"];
    let two = ["two"];
    let three = ["three"];
    
    messWithVars(one, two, three);
    
    console.log(`one is: ${one}`); //["one"]
    console.log(`two is: ${two}`); //["two"]
    console.log(`three is: ${three}`); //["three"]
    //Reassignment of parameters won't mutate original pass by referenced arrays
  }

    {//C
      function messWithVars(one, two, three) {
        one.splice(0, 1, "two");
        two.splice(0, 1, "three");
        three.splice(0, 1, "one");
      }
      
      let one = ["one"];
      let two = ["two"];
      let three = ["three"];
      
      messWithVars(one, two, three);
      
      console.log(`one is: ${one}`); //"two"
      console.log(`two is: ${two}`); //"three"
      console.log(`three is: ${three}`); //"one"
      //Pass by reference causes the arrays the paramaters one,two,three are pointing to mutate when using the splie method
    }
}

/**
 * Question 4
 */
{
  function boo(scare) {
    let myBoo = scare.toUpperCase() + "!!!";
    console.log(myBoo);
  }
  
  const halloweenCollection = {
    greet: "Happy Halloween",
    scare: "Boo",
    wish: "May all your pumpkins be glowing",
  };
  
  let myBoo = boo(halloweenCollection["greet"]);

  //Variables: boo, scare, myBoo, halloweenCollection, myBoo [5]
  //Primitive Values: "!!!", "Happy Halloween", "Boo", "May all your pump...", "Happy Halloween" (passed by value]), "greet" [6]
    //greet, scare, wish, myBoo (evalutes to a primitive within function), myBoo (evaluates to primitive 'undefined' on line 12) [5] 
    //scare on line 2(11 total) 
  //Objects: boo, halloweenCollection [2]
}

/**
 * Question 5
 */
{
  function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    if (dotSeparatedWords.length !== 4) {
      return false;
    }
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false
      }
    }
  
    return true;
  }

  function isAnIpNumber(str) {
    if (/^\d+$/.test(str)) {
      let number = Number(str);
      return number >= 0 && number <= 255;
    }
  
    return false;
  }

  console.log(isDotSeparatedIpAddress("255.255.255.255"));
  console.log(isDotSeparatedIpAddress("20.20"));
  console.log(isDotSeparatedIpAddress("10"));
}
