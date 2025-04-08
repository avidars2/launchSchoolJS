/**
 * 
 * Count number of occurences of each element in a given array
 * Then log each element alongside # of occurrences
 * 
 * Explicits:
 * 1. Words are case sensitive
 * 2. Count # of occurrences of each element in array and log
 * 
 * Implcitis:
 * 1. Each word of output is on new line
 * 
 * ['car', 'car'] --> car => 2
 * 
 * Count # of words, log on console in format ${word} => ${occurrences}
 * 
 * DS:
 * 1. Strings & Numbers
 * 2. Arrays
 * 
 * A:
 * 1. Iterate through array
 * 2. For each element, create a key in a shared object
 * 3. If key exists, add 1 to count
 * 4. If it doesn't exist, add property and assign it to 1
 * 5. For each key, Print ${key} => ${value}
 */


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
    'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];


    function countOccurrences(arr) {
        let countObj = arr.reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});

        console.log(countObj)

        Object.entries(countObj).forEach(vehicle => {
            console.log(`${vehicle[0]} => ${vehicle[1]}`)
        })
    }
countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1