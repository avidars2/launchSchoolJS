/*
​Problem 1: Create a Book Object
    ​Context​: You are tasked with creating a series of objects that represent books in a library system.

    ​Problem Statement​: Create an object that represents a book. The object should have the properties title, author, and a method getDescription. The getDescription method should return a string in the format: "Book Title was written by Author Name."

    ​Solution Criteria/Test Cases​:
    •   Creating a book object with title: "Mythos" and author: "Stephen Fry" should produce a getDescription method output: "Mythos was written by Stephen Fry."

    
    


​Problem 2: Encapsulation in JavaScript
    ​Context​: Understanding encapsulation and property privacy in JavaScript objects.

    ​Problem Statement​: Use a closure to create a book object with private title and author properties. Provide `getDescription` and `setTitle` methods to interact with the book object. Ensure title can only be set through setTitle.
    
    ​Solution Criteria/Test Cases​:
    •   Direct access to title or author should be undefined or result in error.
    •   setTitle() should update the title, and getDescription() should reflect the change.







​Problem 4: Classes and Inheritance
    ​Context​: You are asked to create a class hierarchy for different types of books.

    ​Problem Statement​: Create a base class Book with properties title, author, and a method getDescription. Extend the Book class to create a TextBook class that includes an additional property subject. The TextBook's getDescription method should append the subject to the description string.
    ​
    Solution Criteria/Test Cases​:
    •   An instance of TextBook with title: "Physics 101", author: "John Doe", and subject: "Physics" should have a getDescription output: "Physics 101 was written by John Doe. Subject: Physics."



*/ 

// function bookMaker(title, author) {
//   return {
//     title,
//     author,
//     getDescription() {
//       return `${this.title} was written by ${this.author}`;
//     },

//     setTitle(new) {
//       this.title = new;
//     }
//   }

// }

function solution1() {
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDescripton() {
    return `${this.title} was written by ${this.author}`;
  }

}

class TextBook extends Book {
  constructor(title, author, subject) {
    super(title, author);
    this.subject = subject;
  }

  // getDescripton() {
  //   return super.getDescripton() + ` Subject: ${this.subject}`;

  // }  
  
}

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// Book.prototype.getDescription = function() {
//   return `${this.title} was written by ${this.author}`;
// }

// function TextBook(title, author, subject) {
//   Book.call(this, title, author);
//   this.subject = subject;
// }

// TextBook.prototype = Object.create(Book.prototype);
// TextBook.prototype.constructor = TextBook;

// TextBook.prototype.getDescription = function() {
//   return Book.prototype.getDescription.call(this) + ` Subject: ${this.subject}`;
// }

class SongBook {
  constructor(name) {
    this.name = name;

  }

  getDescription() {
    
  }

}

console.log(Object.getOwnPropertyNames(SongBook.prototype));

//Does the following code log `true`?

let Animal = {};
let cat = Object.create(Animal);
let fluffy = Object.create(cat);

// console.log(fluffy instanceof Animal);

}


/**
 * Use mix-ins
 * Duck typing via inheritance and overrides
 * 
 * Getters and setters
 * 
 * static fields to count instances created
 * 
 * Private fields
 */

let objectInterations = {
  pickUp() {
    return `You pickup the ${this.name}`;
  }
}

function makeBook1(author, name) {
  let obj = {
    __pageCount: 10,
    get pageCount() {
      return this.__pageCount;
    },
    set pageCount(num) {
      this.__pageCount = num;      
    },
    author,
    name,
    describeBook() {
      return `${this.author} wrote a book called ${this.name}`;
    }
  }

  // Object.setPrototypeOf(obj, makeBook.prototype);


  makeBook.instances = (makeBook.instances ?? 0 ) + 1;
  return Object.assign(obj, objectInterations);
}

// let algernon = makeBook1('Ted', 'Flowers');

// console.log(algernon.pickUp());
// algernon.pageCount = 5;
// console.log(algernon.pageCount);
// console.log(makeBook1.instances);


/**
 * Use mix-ins
 * Duck typing via inheritance and overrides
 * 
 * Getters and setters
 * 
 * static fields to count instances created
 * 
 * Private fields
 */

function Item(name) {
  this.name = name;

}

Item.prototype.getName = function() {
  return `${this.name}`;
}

function Book(name, author) {
  Item.call(this, name);
  
  this.author = author;
  this.__pageCount = 0;

  Book.instances = (Book.instances ?? 0) + 1;

}

let bookMethods = {
  get pageCount() {
    return this.__pageCount;
  },
  set pageCount(num) {
    this.__pageCount = num;
  },

  getName() {
    return `The book is ${this.name}`;
  }

}

Book.prototype = Object.create(Item.prototype);
Book.prototype.constructor = Book;
Object.assign(Book.prototype, bookMethods, objectInterations);

// let harryPotter = new Book('Stone', 'Rowling');
// harryPotter.pageCount = 5;
// console.log(harryPotter.pageCount);
// console.log(harryPotter.getName());
// console.log(Book.instances);

/**
 * Use mix-ins
 * Polymorphism via inheritance and overrides
 * 
 * Getters and setters
 * 
 * static fields to count instances created
 * 
 * Private fields
 */


class PhysicalObject {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `${this.name}`;
  }
}

class BookThing extends PhysicalObject {
  #pageCount = 0;
  static instances = 0;

  constructor(name, author) {
    super(name);
    this.author = author;
    BookThing.instances += 1
  }

  get pageCount() {
    return this.#pageCount;
  }

  set pageCount(num) {
    this.#pageCount = num;
  }

  getName() {
    return `The book is ${this.name}`;
  }

}

Object.assign(BookThing.prototype, objectInterations);

let lordOfRing = new BookThing('Towers', 'Tolkien');
lordOfRing.pageCount = 5;
console.log(lordOfRing.pageCount);
console.log(lordOfRing.getName());
console.log(BookThing.instances);