// quick fox upper and lower 
let quickFox = "The quick brown fox jumps over the lazy dog."  
let quickFoxUpper = quickFox.toUpperCase()

console.log(quickFox)
console.log(quickFoxUpper)

const compareStrings = (string1, string2) => string1.toLowerCase() == string2.toLowerCase()

console.log(compareStrings(quickFox, quickFoxUpper))

console.log(quickFox.toLowerCase().startsWith('the'))

function truncate(fullString, maxChars){
    if (fullString.length <= maxChars){
        return fullString;
    } else {
        return fullString.substring(0,maxChars) + '...'
    }
}

let longString = "This is a super long string that has riahetiopeaitoaeth eaitheaiht aieth aieht ipaehtp ";
let shortString = "Short string";

console.log(truncate(longString, 30));
console.log(truncate(shortString,10));

/*function countWords(string){
    let words = string.split(' ')
    console.log(words)
    return words.length;
}

console.log('There are ' + countWords(longString) + ' words in ' + newString)
console.log(`There are ${countWords(quickFox)} words in ${quickFox}`)*/

const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace('dog', 'monkey'));
console.log(p.replaceAll('dog', 'monkey'));

console.log('\nOBJECTS AS STRINGS');

const user = {
    name: 'Andy',
    location: 'Auckland',
    job: 'accountant',
    toString(){
        return `Name: ${this.name}, Location: ${this.location} Job: ${this.job}`;
    }
}

console.log('user is ' + user)

const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
const cities_nz = ['Auckaland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

cities_au.push('Perth')
console.log(cities_au)

let lastCity = cities_au.pop()
console.log(lastCity)

cities_au.unshift('Darwin')
console.log(cities_au)

let firstCity = cities_au.shift()
console.log(firstCity)