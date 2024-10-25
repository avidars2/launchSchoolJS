/**
 * Question 1
 */
{
  for (let padding = 0; padding < 10; padding++) {
    let string = "The Flintstones Rock!";
    console.log(string.padStart(string.length + padding));
  }

}

/**
 * Question 2
 */
{
  let munstersDescription = "The Munsters are creepy and spooky.";

  let newString = [...munstersDescription].map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  }).join('');

  console.log(newString);

  {
    let newString = '';
    [...munstersDescription].forEach(letter => newString += (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()));
    console.log(newString);
  }
}

/**
 * Question 3
 */
{
  function factors(number) {
    let divisor = number;
    let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -=1;
  }
  return factors;
  }

  console.log(factors(0));

  //The conditional determines if the result is an integer
}

/**
 * Question 4
 */
{
//The difference is that push will mutate the original array that was passed by reference
//Since buffer is returned we can assume that it is being assigned to a variable after the function evaluates
//So in terms of the result, if that variable is being used as the new pointer to an object, it may not make a practical difference
//But if the original array is being used, it will make a difference since it won't get mutated
}

/**
 * Question 5
 */
{
//0.9 & 0.3 (0.3 + false = 0.3)
//Actual answer: 0.899999 & false


}

/**
 * Question 6
 */
{
  //false
  //Number.isNan(NaN);  
  
}

/**
 * Question 7
 */
{
  let answer = 42;

  function messWithIt(someNumber) {
    return (someNumber += 8);
  }
  
  let newAnswer = messWithIt(answer);
  
  console.log(answer - 8);

  //Output will be 34. Primitives are pass by value so regardless of the function, 
  //a copy of the value was passed as the argument, not the original
  
}

/**
 * Question 8
 */
{
  let munsters = {
    Herman: { age: 32, gender: "male" },
    Lily: { age: 30, gender: "female" },
    Grandpa: { age: 402, gender: "male" },
    Eddie: { age: 10, gender: "male" },
    Marilyn: { age: 23, gender: "female" },
  };
  
  function messWithDemographics(demoObject) {
    Object.values(demoObject).forEach(familyMember => {
      familyMember["age"] += 42;
      familyMember["gender"] = "other";
    });
  }
  
  messWithDemographics(munsters);

  //This will mutate the original data because the array created from the object muntsers & demoObject point to
  //will be an array of objects since all of the keys contained objects
  //The 'Object.values' is only creating a shallow copy so the objects in the array are references
  //So when the references get modified, it mutates the original object as well
}

/**
 * Question 9
 */
{

  console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

  //rps(rps("rock", "paper"), rps("rock", "scissors")) => rps(paper, rock)
  //rps(rps(paper, rock), "rock") => rps("paper", "rock")
  //rps("paper", "rock") => paper
}

/**
 * Question 10
 */
{
  function foo(param = "no") {
    return "yes";
  }
  
  function bar(param = "no") {
    return param === "no" ? "yes" : "no";
  }

  //bar(foo()); => "no"
}