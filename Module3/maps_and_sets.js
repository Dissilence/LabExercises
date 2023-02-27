//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//maps are used to store key-value pairs, eg.

console.log('MAPS');

//maps common names of plants to their latin name
const plantNames = new Map();
plantNames.set('Blueberry', 'Vaccinium');
plantNames.set('Daylily', 'Hemerocallis');
plantNames.set('Foxglove', 'Digitalis');
plantNames.set('Lavender', 'Lavandula');

//can also create a map from an array (does the same thing as above):
const plantNames2 = new Map([
    ['Blueberry', 'Vaccinium'],
    ['Daylily', 'Hemerocallis'],
    ['Foxglove', 'Digitalis'],
    ['Lavender', 'Lavandula']
])

console.log(plantNames)
console.log(plantNames2)

//set, get, has, delete, clear, size
plantNames.set('Daylily', 'Hemerocallis2')
plantNames.set('Turmeric', 'Curcuma Longa')

console.log('value of Foxglove is ' + plantNames.get('Foxglove'))

console.log(plantNames.has('Daffodil') ? 'daffodil exists': 'daffodil doesnt exist')
plantNames.delete('Turmeric')
//plantNames.clear()

console.log('there are ' + plantNames.size + ' things in my map')


//keys, values, entries

for (let commonPlant of plantNames.keys()) {
    console.log('#1: (keys, lookup value with get) ' + commonPlant + ' latin name is ' + plantNames.get(commonPlant));
}

for (let latinPlant of plantNames.values()) {
    console.log('#2: (values only) ' + latinPlant)
}

for (let plant of plantNames.entries()) {
    console.log('#3: (indexed entries) ' + plant[0] + ' latin name is ' + plant[1]);
}

for (let [commonPlantName, latinPlantName] of plantNames) {
    console.log('#4: (destructured entries) ' + commonPlantName + ' latin name is ' + latinPlantName);
}

console.log(plantNames.keys())
//let plantNameArray = Array.from(plantNames.keys())
let plantNameArray = [...plantNames.keys()]

console.log(plantNameArray.sort().reverse())

const plantObject = Object.fromEntries(plantNames.entries()) //converts a map to an object
const plantMap = new Map(Object.entries(plantObject)) //converts an object to a map

console.log(plantObject)
console.log(plantMap)


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//sets are used to store a list of unique values

console.log('\nSETS');

//can create from an array
const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);

//or add values individually:
foods.add('risotto')
foods.add('pasta')

console.log(foods)

//for ... of or forEach to iterate
for (let food of foods) {
    console.log('#1: (for ... of loop) ' + food);
}

foods.forEach(food => console.log('#2: (forEach loop) ' + food))

//to convert to an array do one of these
let foodsArray = Array.from(foods); //[...foods]

foodsArray.sort().reverse() //now we can call array functions
console.log(foodsArray)



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
console.log('\nWEAKMAPS')

//mnostly like a map, but store references not values, so the objects stored in them will only exist while they need to

//say this list of people comes from somewhere else and we can't modify it, but want to keep track of how many times each user logs in:
const people = [
    {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
    {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
    {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
    {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
    {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
]
const logins = new WeakMap();

//increments the counter for number of times logged in
function login(person) {
    let loginCount = logins.get(person) ? logins.get(person) : 0;
    loginCount += 1;

    console.log(person.firstName + ' has logged in ' + loginCount + ' times')
    logins.set(person, loginCount); 
}

login(people[0]); // Wendy logs in
login(people[1]); // Steven logs in
login(people[4]); // Sheila logs in
login(people[0]); // Wendy logs in again

console.log('Has Steven logged in? '+logins.has(people[1]))

people[1] = null // but Steven is removed from the system

console.log('Has Steven logged in? '+logins.has(people[1])) //so his login count is also cleaned up automatically