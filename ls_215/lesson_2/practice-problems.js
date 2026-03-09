//4
//5
//6

/**
 * I: String of words
 * O: String acronym
 * 
 * E: 
 * 1. String input
 * 2. Return a string acronym
 * 3. Words connected with a dash are counted as separate words
 * 
 * I:
 * 1. Words after a colon ':' are not included in the acronym
 * 2. Capitilization does not matter for words delimited by a space
 * 3. Capitilization does matter for characters next to each other and counts them as separate words
 * 
 * PArse Pell --> PAP?
 * 
 * Carry me Away --> CMA?
 * 
 * Port Net Graph
 * 
 * P --> Capital, start of string --> P
 * ortable --> connected to P so skip
 * 
 * Port Net Graph
 * 
 * First character of each word is in the acronym
 * 
 * Then iterating through the word P, o, r, t, any capitals are another character for the acronym
 * and any hypens, the character after that is a candidate for the acronym (What if no character after hyphen?)
 * 
 * 1. Split string by space
 * 2. Split substrings by capital letters
 * 3. Split further substrings by hyphens
 * 
 * HYper t-ext Markup --> HYTEM
 * 
 * HYper t-ext --> 'HYper', 't-ext' --> 'H', 'Yper', 't', 'ext' --> HYTE
 * 
 * Given a string, split it by the space, then Capital letters, then hyphens, then return first character of each substring
 * 
 * DS:
 * 1. Convert strings to arrays
 * 2. Substrings and potentially split them further
 * 
 * Algorithm:
 * 1. Split string into substrings by space ('HYper-text') --> 'HYper-text'
 * 2. For each substring, split it by capital letters (HY --> 'H', 'Y') 'Hyper-text' --> 'H', 'yper-text'
 * ----Instead: iterate through substring, for each Capital letter, append to acronymStr
 * ------For each "hypen", append character after to acronymStr
 * X-3. For each further substring, split it by hypen (hyper-text --> 'hyper', 'text') --> 'H', 'yper', 'text'
 * X-4. Get first character of each final substring, and append to an array, then join capitalized
 */

function acronym(string) {
  let acronymStr = '';
  let spaceRemovedArr = string.split(" ");

  let capSplit = spaceRemovedArr.forEach(substr => {
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Split substring into individual characters
    //For each character, check if capital
    let splitSubStr = substr.split("");
    splitSubStr.every((char, idx) => {

      if (capitals.includes(char) || idx === 0) {
        acronymStr += char;
      } else if (char === '-') {
          if (splitSubStr[idx + 1]) {
            splitSubStr[idx + 1] = splitSubStr[idx + 1].toUpperCase();
          }
      }
      
      console.log(char);
      // if (char === ":") return false;
      return false;

    })


  })

  console.log(acronymStr.toUpperCase())
  return acronymStr.toUpperCase();

  // ...
}

// acronym('Portable Network Graphics');                  // "PNG"
// acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
// acronym('Complementary metal-oxide semiconductor');    // "CMOS"
// acronym('Hyper-text Markup Language');                 // "HTML"