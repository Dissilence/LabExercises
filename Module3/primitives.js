//there are lots of functions you can use on strings and numbers even though they are primitives

//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
console.log('\nNUMBERS')

//toFixed
let pi = 3.54159
let amount = 25.33333333

console.log(pi.toFixed(3))
console.log(parseFloat(amount.toFixed(2)) + 10.50)
console.log(parseInt(pi))

console.log(Number.isInteger(pi))
//parseFloat & parseInt
//isInteger and isNan



//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('\nSTRINGS')

let quickFox = "The quick brown fox jumps over the lazy dog."
let quickFoxUpper = quickFox.toUpperCase()

//toUpperCase & toLowerCase

console.log(quickFox)
console.log(quickFoxUpper)

const compareStrings = (string1, string2) => string1.toLowerCase() == string2.toLowerCase()

console.log(compareStrings(quickFox, quickFoxUpper))

//startsWith and endsWith

let name1 = 'Adam';
let name2 = 'Alannie';
let name3 = 'Preshen';
let name4 = 'amber';

console.log('sentence starts with The ? '+quickFox.startsWith('The'))
console.log('sentence ends with . ? '+quickFox.endsWith('.'))

function startsWithA(name) {
    return name.toUpperCase().startsWith('A')
}

console.log(name1+' starts with a? '+startsWithA(name1)) //true
console.log(name2+' starts with a? '+startsWithA(name2)) //true
console.log(name3+' starts with a? '+startsWithA(name3)) //false
console.log(name4+' starts with a? '+startsWithA(name4)) //true


//substring and indexOf

let indexOfFox = quickFox.indexOf('fox')
console.log(indexOfFox >= 0 ? 'found fox' : 'not found')

let foxSubstring = quickFox.substring(indexOfFox, indexOfFox+10)
console.log(foxSubstring)

function truncate(fullString, maxChars) {
    //return a truncated version of fullString that is maxChars characters long

    //add a ... to the truncated string if it was longer than maxChars

    //test with both long and short strings
}

let newString = "this is a fairly long string with lots of different characters in it.";

//create a substring of the above which is 20 characters long:
let newString20 = newString.substring(0, 20) //start at index 0, finish at index 20
let newString30 = newString.substring(0, 30) //start at index 0, finish at index 30
console.log(newString20); //'this is a fairly lon' - this is 20 characters in length
console.log(newString30); //'this is a fairly long string w' - this is 30 characters in length


//split

//function to count the words in a string
function countWords(string) {
    let words = string.split(' ')
    //console.log(words)
    return words.length;
}

console.log('There are '+countWords(newString) + ' words in '+newString)
console.log(`There are ${countWords(quickFox)} words in "${quickFox}"`)


//replace and replaceAll

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey')); //replaces the first occurrence of the first argument with the second argument
console.log(p.replaceAll('dog', 'monkey')); //replaces ALL occurrences of the first argument with the second argument


console.log('\nOBJECTS AS STRINGS');

const user = { 
    name: 'Jason', 
    location: 'Townsville',
    toString() { //defines how this object should look when printed as a string
        return `Name: ${this.name}, Location: ${this.location}`;
    }
}

console.log('user is ' + user)