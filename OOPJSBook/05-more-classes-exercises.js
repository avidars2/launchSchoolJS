// {/** Ex 1
//  * Rewrite the following Person class to use private fields 
//  * for the name and age properties and provide a setter for 
//  * setting the age property. 
//  * Ensure that the setter raises a RangeError unless the 
//  * age is a positive number.
//  */

// class Person {
//   #name;
//   #age;
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   set age(num) {
//     if (num < 0) {
//       throw new Error('Range Error');
//     } else {
//       this.#age = num;
//     }
//   }

//   get age() {
//     return this.#age;
//   }

//   showAge() {
//     console.log(this.age);
//   }
// }

// let person = new Person('John', 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log('RangeError: Age must be positive');
// }

// }

{}

// {/**Ex 2
//  * Create a Book class with private fields title, 
//  * author, and year. Provide getters for each field 
//  * and a setter for the year field that raises a 
//  * RangeError if year is before 1900.
//  */

// class Book {
//   #title;
//   #author;
//   #year;

//   constructor(title, author, year) {
//     this.#title =  title;
//     this.#author = author;
//     this.#year = year;
//   }

//   get title() {
//     return this.#title;
//   }
//   get author() {
//     return this.#author;
//   }

//   get year() {
//     return this.#year;
//   }

//   set year(num) {
//     if (num < 1900) {
//       throw new RangeError('Invalid Year');
//     }
//     this.#year = num;
//   }
// }

// let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// console.log(book.title);  // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year);   // 1925


// book.year = 1932;         // Changing year
// console.log(book.year);   // 1932

// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }

// try {
//   let book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
// } catch (e) {
//   console.log(e);   // RangeError: Invalid year
// }
// }
{}

// {/**Ex 3
//  * Create a BankAccount class with a private field balance. 
//  * Add a private method, #checkBalance, that logs the current 
//  * balance. Provide a public method, deposit, to add money to 
//  * the account and withdraw to take money out. 
//  * Raise a RangeError if there are insufficient funds for the 
//  * withdrawal.


//  */

// class BankAccount {
//   #balance;
//   #checkBalance() {
//     console.log(this.#balance);
//   }

//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(cash) {
//     this.#balance += cash;
//     this.#checkBalance();
//   }

//   withdraw(cash) {
//     if (cash > this.#balance) {
//       throw new RangeError('Insufficient Funds');
//     } else {
//       this.#balance -= cash;
//       this.#checkBalance();
//     }
//   }
    

// }

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds
// }

{/**Ex 4
 * Create a Rectangle class with private fields width and 
 * height. Provide getters and setters for both fields. 
 * The setters should raise a RangeError if the width or 
 * height is not a positive number. Add a getter for area 
 * to compute the area of the rectangle (width * height).
 */}

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width;
  }

  set height(val) {
    if (!(val > 0)) {
      throw new RangeError('Height should be positive');
    } else {
      this.#height = val;
    }
  }

  set width(val) {
    if (!(val > 0)) {
      throw new RangeError('Width should be positive');
    } else {
      this. #width = val;
    }
  }

  get area() {
    return this.height * this.width;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}