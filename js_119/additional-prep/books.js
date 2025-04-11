/**
 * P: Create a function that takes an array of objects representing books (with title, author, and year properties) 
 * and returns a new array of book titles published between 1950 and 2000, sorted alphabetically.

 */
/**
 * I: Array of objects representing books
 * O: New array of book with just titles published between 1950 and 2000, sorted alphabetically
 * 
 * Explicits:
 * 1. Get titles published between 1950 and 2000
 * 2. Final array is sorted alphabetically
 * 
 * [{}, {}, {}], the year property and title are most relevant
 * 
 * Filter out objects based on year property, get books with years that are between 1950 and 2000
 * CQ: Inclusive or exclusive?
 * 
 * Data structures:
 * 1. Array of objects with properties title, author, year
 * 
 * Algorithm:
 * 1. Iterate through array of objects
 * 2. Filter for objects where their year property is between 1950 and 2000
 * 3. With that array of objects, transform it to just the titles sorted alphabetically
 * 
 */

function sortBooks(arrOfOBj) {
    return arrOfOBj.filter(obj => (obj.year > 1950 && obj.year < 2000)).
    map(obj => {return obj.title}).
    sort();
}

console.log(
    sortBooks([
      { title: "1984", author: "George Orwell", year: 1949 },
      { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    ])
  ); // ["The Catcher in the Rye", "To Kill a Mockingbird"];

  //Solved in 5 minutes