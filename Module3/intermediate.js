//1
function ucFirstLetters(string){
    const array = string.split(" ")
    for (var i =0; i<array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    const result = array.join(" ");
    return result;
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function truncate(fullString, maxChars) {
    if (fullString.length <= maxChars){
      return fullString;
    } else{
      return fullString.substring(0,maxChars) + "..."
    }
}
let longString = "This is a super long string that has blah blah blah blah blah blah.";
let shortString = "Short string.";

console.log(truncate(longString,30));
console.log(truncate(shortString,10));

function truncate1(fullString2, maxChars2){
    return fullString2.length >= maxChars2 ? fullString2.substring(0,maxChars2) + "..." : fullString2;
}

let longString2 = "This is a super long string that has blah blah blah blah blah blah.";
let shortString2 = "Short string.";


console.log(truncate1(longString2,30));
console.log(truncate1(shortString2,10));

const animals = ['Tiger', 'Giraffe']
animals.push("Panther", "Hippo")
animals.unshift("Dog","walrus")
animals.sort();
function replaceMiddleAnimal(newValue){

    const middle = Math.floor((animals.length)/2);
    animals[middle] = newValue;
    


}

replaceMiddleAnimal("Rhino")
function findMatchingAnimals(beginsWith) {
    const matchingAnimals = [];
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].toLowerCase().startsWith(beginsWith.toLowerCase())) {
        matchingAnimals.push(animals[i])
      }
    }
    return matchingAnimals
  }

console.log(findMatchingAnimals('D'));
console.log(findMatchingAnimals('G'));
console.log(findMatchingAnimals('h'));
console.log(findMatchingAnimals('t'));
console.log(findMatchingAnimals('W'));

console.log(animals)

/*function camelCase(cssProp){
    if (cssProp.indexOf('_') == -1){
        return cssProp
    }
}

words = cssProp.split("-")
for (var i = 0; i<words.length; i++){
    words[i] = words[i].charAt(0).toLowerCase() + result[i].slice(1)
}
return result; */

function camelCase(cssProp){
    let words = cssProp.split("-")
    if (words.length > 1){
        for (var i =1; 1 < words.length; i++); {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
}
return words.join('')
}

console.log(camelCase('margin-left'))
console.log(camelCase('background-image'))
console.log(camelCase('display'))


const backgroundImage = 'background-image'
const marginLeft = 'margin-left'

function camelCase(string){
    const words = string.split("-")
    let camelCasedString = '';
    
    words.forEach(word => 
        (camelCasedString.length == 0) ? camelCasedString = word 
        : camelCasedString += word.charAt(0).toUpperCase() + word.substring(1)
        )

    return camelCasedString;
}

console.log(camelCase(backgroundImage))
console.log(camelCase(marginLeft))


let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

function currencyAddition(float1, float2) {
    // Convert the input floats to numbers with two decimal places
    const num1 = Number(float1.toFixed(2));
    const num2 = Number(float2.toFixed(2));
  
    // Add the two numbers and return the result
    return num1 + num2;
  }

  console.log(currencyAddition(0.2, 0.3))

  function currencyOperation(float1, float2, operation , numDecimals) {
  let result;
  switch(operation) {
    case '+':
      result = float1 + float2;
      break;
    case '-':
      result = float1 - float2;
      break;
    case '*':
      result = float1 * float2;
      break;
    case '/':
      result = float1 / float2;
      break;
    default:
      console.log('Invalid operation');
      return null;
  }
  result = Number(result.toFixed(numDecimals));
  return result
}
let float1 = 1.50;
let float2 = 5.25;
let operation = '+';
let result = currencyOperation(float1, float2, operation);
console.log(result); 

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(colours)
console.log(testScores) 

function unique(duplicatesArray) {
  const uniqueArray = duplicatesArray.filter((value, index, array) => array.indexOf(value) === index);
  return uniqueArray;
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

  function getBookTitle(bookId) {
    const book = books.find(book => book.id == bookId); return book ? book.title : null
  }
  
  console.log(getBookTitle(1));

  function getOldBooks() {
    return books.filter(book => book.year < 1950);
  
  }
  console.log(getOldBooks());

  function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
  }
  
  console.log(addGenre());

  function getTitles(authorInitial) {
    return books.filter(book => book.author.startsWith(authorInitial)).map(book => book.title);
  }
  
  console.log(getTitles('F'));

  function latestBook(){
    let mostRecentYear = 1900;
    books.forEach(book => {
      if (book.year > mostRecentYear) mostRecentYear = book.year;
    });
    return books.find(book => book.year == mostRecentYear);
  }
  
  console.log(latestBook());


const birthday = new Date('1998-08-27');
const today = new Date();

let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

console.log(`I am ${years} years, ${months} months and ${days} days old`)


console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

