/**
 * Question 1
 */
{
  let numbers = [1, 2, 3, 4];

  {//Method 1
    let numbersArray = [...numbers];

    while (numbersArray.length != 0) {
      numbersArray.pop();
    }
    console.log(numbersArray);

  }

    {//Method 2
      let numbersArray = [...numbers];

      numbersArray.length = 0;

      console.log(numbersArray);
  
    }

    {//Method 3
      let numbersArray = [...numbers];

      for (let elements = numbersArray.length; elements > 0; elements--) {
        numbersArray.shift();
      }

      console.log(numbersArray);
    }

    //Method 4
    numbers.splice(0, numbers.length);
    console.log(numbers);
}

/**
 * Question 2
 */
{
  console.log([1, 2, 3] + [4, 5]);

  //[1, 2, 3, [4, 5]];

  //Correct answer: 1,2,34,5
  //This is because JavaScript coerces both arrays into strings first before concatenating them

}

/**
 * Question 3
 */
{
  let str1 = "hello there";
  let str2 = str1;
  str2 = "goodbye!";
  console.log(str1);

  //hello there

}

/**
 * Question 4
 */
{
  let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
  let arr2 = arr1.slice();
  arr2[0].first = 42;
  console.log(arr1);

  //[{ first: 42 }, { second: "value2" }, 3, 4, 5]

}

/**
 * Question 5
 */
{
  {//Solution 1
  function isColorValid(color) {
    return (color === "blue" || color === "green");
  }

  console.log(isColorValid('red'));
  }

  {//Solution 2
    function isColorValid(color) {
      let validColors = ['blue', 'green'];

      return validColors.includes(color);
    }
  
    console.log(isColorValid('green'));
    } 
}

/**
 * Question 6
 */
{

  //` = variables, (primitive values), \ = objects
  let arr = [1, 2, 3]; //`arr, (1, 2, 3), \[1, 2, 3]
  let newArr = arr; //`newArr, arr 
  
  const num = arr[0];
  let newNum = num;
  
  function double(num) {
    return num * 2;
  }
  
  double(newNum);

  //Variables: arr, newArr, num, newNum, double, num
  //Primitive values: 1, 2, 3, 2 (returned by double), 0, 2, num contains primitive 1, newNum contains primitive 1, num as a parameter contains a copy of 1 due to pass by value
  //Objects: [1, 2, 3], function object 'double'
}