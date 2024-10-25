/**
 * Question 1
 */
{
  let advice = "Few things in life are as important as house training your pet dinosaur.";

  let newAdvice = advice.replaceAll('important', 'urgent');
  console.log(newAdvice);
}

/**
 * Question 2
 */
{
  let numbers = [1, 2, 3, 4, 5];
  let numbersCopy = numbers.map( (_) => _);
  numbersCopy.reverse();
  console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]
  
  numbers = [1, 2, 3, 4, 5];
  numbersCopy = [];
  numbers.forEach((num) => numbersCopy.push(num));
  numbersCopy.sort((num1, num2) => num2 - num1);
  console.log(numbersCopy); // [ 5, 4, 3, 2, 1 ]

  numbers = [1, 2, 3, 4, 5];
  numbers = [...numbers].sort((num1, num2) => num2 - num1);
  console.log(numbers);

  numbers = [1, 2, 3, 4, 5];
  numbersCopy = [];
  numbers.forEach((num) => {
    numbersCopy.unshift(num);
  })

  console.log(numbersCopy);
}

/**
 * Question 3
 */
{
  let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

  let number1 = 8;  // false
  let number2 = 95; // true

  function hasNumber(array, num) {
    return array.includes(num);
  }

  console.log(hasNumber(numbers, number2));
}

/**
 * Question 4
 */
{
  let famousWords = "seven years ago...";

  let sentenceComplete1 = "Four Score and " + famousWords;
  let sentenceComplete2 = "Four Score and ".concat(famousWords);

  console.log(sentenceComplete1, sentenceComplete2);

}

/**
 * Question 5
 */
{

  let array = [1, 2, 3, 4, 5];

  array.splice(2, 1);

  console.log(array);
}

/**
 * Question 6
 */
{
  let flintstones = ["Fred", "Wilma"];
  let newFlinstones = [].concat([], ...flintstones, ["Barney", "Betty"], ["Bambam", "Pebbles"]);

  console.log(newFlinstones);

  flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
  newFlinstones = [].concat(...flintstones);
  console.log(newFlinstones);

}

/**
 * Question 7
 */
{
  let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

  console.log(Object.entries(flintstones)[2]);

  console.log(Object.entries(flintstones).filter(keyValueArray => keyValueArray[0] === 'Barney')[0]);
}

/**
 * Question 8
 */
{
  let numbers = [1, 2, 3, 4]; // true
  let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

  Array.isArray(numbers);
  Array.isArray(table);
}

/**
 * Question 9
 */
{
  let numbers = [1, 2, 3, 4]; // true
  let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
 
  let title = "Flintstone Family Members";

  let tableLength = 40 / 2;
  let titleLength = title.length / 2;

  let padAmount = Math.floor(tableLength - titleLength);
  console.log(padAmount, tableLength, titleLength);
  console.log(tableLength - Math.floor(titleLength));


  let newTitle = title.padStart((padAmount + title.length));
  let newerTitle = title.padStart(Math.floor(20 - (title.length / 2)) + title.length);

  console.log(title);
  console.log(newTitle);
  console.log(newerTitle);


}

/**
 * Question 10
 */
{
  let statement1 = "The Flintstones Rock!";
  let statement2 = "Easy come, easy go.";

  let x = [...statement1, ...statement2].filter((char) => char === 't').length;

  console.log(x);


}