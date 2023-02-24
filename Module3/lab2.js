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

//cities_au.push('Perth')
//console.log(cities_au)

//let lastCity = cities_au.pop()
//console.log(lastCity)

//cities_au.unshift('Darwin')
//console.log(cities_au)

//let firstCity = cities_au.shift()
//console.log(firstCity)

console.log('\n\n\n')

//et first3Cities = cities_nz.slice(0, 3)
//console.log(first3Cities)

//let last3cities = cities_nz.slice(cities_nz.length-3)
//console.log(last3cities)

const cities = cities_au.concat(cities_nz, 'Dunedin', 'Tauranga')
console.log(cities.toString())

cities_au.splice(4, 1, 'Townsville')
console.log(cities_au)

cities_nz.splice(2, 0, 'Tauranga', 'Dunedin', 'Pokeno')
console.log(cities_nz)

cities.forEach((city, index) => console.log(`${index}: ${city}`))

const people = [
    {firstName: 'David', lastName: 'Kim', age:'55', location: 'QLD'},
    {firstName: 'Kelvin', lastName: 'Ng', age:'11', location: 'AKL'},
    {firstName: 'Andy', lastName: 'Huang', age:'24', location: 'VIC'},
    {firstName: 'Brian', lastName: 'Wong', age:'76', location: 'AKL'},
    {firstName: 'Elvis', lastName: 'Lee', age:'22', location: 'MEL'},

]
//people.forEach(person => console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`))

//people.forEach((person, index) => {
 //   console.log(index)
 //   console.log(person.location);
 //   console.log(person.age);
//})

let vicPerson = people.find(person => person.location =='VIC')
console,log(vicPerson)

let sPeople = people.filter(person => person.firstName.startsWith('S'))
console.log(sPeople)

let olderPeople = people.map(person => {person.age+1})
console.log(olderPeople)