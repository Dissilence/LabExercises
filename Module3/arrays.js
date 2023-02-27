//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more info and examples

const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
const cities_nz = ['Auckland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

console.log("PUSH, POP, SHIFT, UNSHIFT")
//push and pop work on end of array
cities_au.push('Perth')
console.log('new list of cities after push: '+cities_au)

let lastCity = cities_au.pop()
console.log('last city is '+lastCity)
console.log('new list of cities after pop: '+cities_au)

//shift and unshift from the beginning of the array
cities_au.unshift('Darwin')
console.log('new list of cities after unshift: '+cities_au)

let firstCity = cities_au.shift()
console.log('first city is '+firstCity)
console.log('new list of cities after shift: '+cities_au)

console.log("\nINDEXOF")

console.log(cities_au.indexOf('Cairns') >= 0 ? 'Cairns is in the list at index '+ cities_au.indexOf('Cairns'): 'Cairns is not in list')
console.log(cities_au.indexOf('Darwin') >= 0 ? 'Darwin is in the list at index '+ cities_au.indexOf('Darwin'): 'Darwin is not in list')

console.log("\nSIMPLE SORT")

console.log(cities_au.sort()) //sorts the original array alphabetically and returns a reference to it
console.log(cities_au) //now the sorted version, since sort modifies the original

console.log("\nCONCAT")

//array of arrays vs. concat - combining arrays
//const cities = [cities_au, cities_nz]
const cities = cities_au.concat(cities_nz, 'Dunedin', 'Tauranga')
console.log('Complete string list of cities: '+cities.toString())

console.log("\nSPLICE AND SLICE")

let first3NZCities = cities_nz.slice(0, 3) //first number is where to start from, second number is where to stop
console.log('first 3 NZ cities: '+first3NZCities)

let last3NZCities = cities_nz.slice(-3) //if a negative number, starts from the end and works backwards
console.log('last 3 NZ cities: '+last3NZCities)

// let last3NZCities = cities_nz.slice(cities_nz.length-3) //alternative way to get last 3
// console.log(last3NZCities)

cities_au.splice(4, 1, 'Townsville') //first number is where to start from, second number is how many to remove
console.log('replace Brisbane with Townsville: '+cities_au)

cities_nz.splice(2, 0, 'Tauranga', 'Dunedin', 'Pokeno') //start at index 2 and don't remove any, just add new ones
console.log('add more NZ cities into middle of array: '+cities_nz)


console.log("\nFOREACH")

//forEach takes a function as a parameter. this function has several arguments: 
//the first is always the current array element being iterated over (string in this case),
//the second (optional) is always the current index of the array element being iterated over
cities.forEach((city, index) => console.log(`${index}: ${city}`))

const people = [
    {firstName: 'David', lastName: 'Kim', age: 55, location: 'QLD'},
    {firstName: 'Kelvin', lastName: 'Ng', age: 11, location: 'AKL'},
    {firstName: 'Andy', lastName: 'Huang', age: 24, location: 'VIC'},
    {firstName: 'Brian', lastName: 'Wong', age: 76, location: 'QLD'},
    {firstName: 'Elvis', lastName: 'Lee', age: 22, location: 'MEL'},
]

//if we capture two parameters for forEach, the second one is the array index of each element
//the first one is the current array element, in this case a person object
people.forEach((person, index) => console.log(`#${index}: ${person.firstName} ${person.lastName} is ${person.age} years old`))

//if our arrow function is doing multiple steps, we can use curly brackets as below
// people.forEach((person, index) => {
//     console.log(index)
//     console.log(person.location);
//     console.log(person.age);
// })

console.log("\nFIND")

//find the person who lives in VIC
//find also takes a function as parameter which runs for each array element until the condition is true and returns first match
let vicPerson = people.find(person => person.location == 'VIC')
console.log('\nFirst person whose location matches VIC:')
console.log(vicPerson)

console.log("\nFILTER")

//find the people whose name starts with s
//filter also takes a function as parameter, which runs for each array element and returns new array with all matches
let sPeople = people.filter(person => person.firstName.startsWith('S'))
console.log('\nALL people whose firstName starts with S:')
console.log(sPeople)

console.log("\nMAP")

//everyone had a birthday, so age+1
//map also takes a function as parameter, which runs for each array element and returns new array with same change made to each element
let newAges = people.map(person => {
    return {...person, age: person.age+1} //unpacks the original person object and overrides the age value with a new one
});
console.log('\nAll people with age incremented by 1:')
console.log(newAges)

console.log("\nSORT")

//sort our people by age
//sort can also take a function as parameter, which runs for each array element and determines how they should be sorted
//the sort function param should return 0 when elements are equal, 1 if the first is greater than the second, and -1 otherwise
people.sort((person1, person2) => {
    if (person1.age == person2.age) return 0;
    if (person1.age > person2.age) return 1;
    return -1;
});
console.log('\nPeople sorted by age:')
console.log(people)

//sort our people by lastName
people.sort((person1, person2) => {
    if (person1.lastName == person2.lastName) return 0;
    if (person1.lastName > person2.lastName) return 1;
    return -1;
});
console.log('\nPeople sorted by lastName:')
console.log(people)

let sortedQLDers = people.filter(person => person.location == 'QLD').sort((person1, person2) => {
    if (person1.firstName == person2.firstName) return 0;
    if (person1.firstName> person2.firstName) return 1;
    return -1;
});
console.log(sortedQLDers);

console.log(people.find(person => person.location == "AKL").firstName)
console.log(people.filter(person => person.location == "AKL").map(person => person.firstName))

let months = 'January,Februrary,March,April,May,June,July,August,September,October,November,December';
let arrayMonths = months.split(',');
let threeLetterMonths = arrayMonths.map(month => month.slice(0,3));
console.log(threeLetterMonths.join(", "));

let berMonths = months.split(',').filter(month => month.endsWith('ber'))
console.log(berMonths)

people.forEach(person => console.log(person.firstName + 'is' + person.age + 'years old'));
for (let person of people) {
    console.log(person.firstName + 'is' + person.age + 'years old')
}