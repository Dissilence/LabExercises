console.log("" + 1 + 0);
//10
console.log("" - 1 + 0);
//0
console.log(true + false)
//1
//0
console.log(!true)
//false
console.log(6 / "3")
//2
console.log("2" * "3")
//6
console.log(4 + 5 + "px")
//9px
console.log("$" + 4 + 5)
//$45
console.log("4" - 2)
//2
console.log("4px" - 2)
//2px
//NaN
console.log(" -9 " + 5)
//-4
//-9 5
console.log(" -9 " - 5)
//-9 -5
//-14
console.log(null + 1)
//1 
console.log(undefined + 1)
//undefined
console.log(undefined == null)
//True
console.log(undefined == null)
//true
console.log(" \t \n" - 2)
//-2
console.log("part 2")
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four
//34
let multiplication = three * four
//12
let division = three / four
//0.75
let subtraction = three - four
//-1
let lessThan1 = three < four
//tru
let lessThan2 = thirty < four
//false

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)
//part 3
//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
//answer

//results
if ("0") console.log('#2 zero is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

// part 4

/* let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result)

//part 5

/* function getGreeting(name) {
    return 'Hello ' + name + '!';
} */

//function expression syntax,
const getGreeting1 = function (name) {
  return 'Hello ' + name + '!';
};

//Using arrow function syntax:
const getGreeting2 = (name) => {
  return 'Hello ' + name + '!';
};

console.log(getGreeting1('andy'))
console.log(getGreeting2('andy'))

// part 6
//a
const inigo = {
  firsName: 'andy',
  lastName: 'huang',
  getGreeting3: function () { return 'Hello ' + this.firsName + ' ' + this.lastName + '.'; }
};
console.log(inigo.getGreeting3())

//b
function getCatchPhrase(person) {
  if (person.fingers === 6) {
    console.log("My name is Inigo Montoya. You killed my father. Prepare to die.");
  } else {
    console.log("You seem a decent fellow. I hate to kill you.");
  }
}

const sixFingeredMan = {
  name: "Six Fingered Man",
  fingers: 6
};

const fiveFingeredMan = {
  name: "Five Fingered Man",
  fingers: 5
};

getCatchPhrase(sixFingeredMan); // Output: My name is Inigo Montoya. You killed my father. Prepare to die.
getCatchPhrase(fiveFingeredMan); // Output: You seem a decent fellow. I hate to kill you.
//used chatgbt for b because i didnt the movie
//c

const westley = {
  name: 'Westley',
  numFingers: 5
}

const rugen = {
  name: 'Count Rugen',
  numFingers: 6
}

const inigo1 = {
  firstName: 'Inigo',
  lastName: 'Montoya',


  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase: (person) => person.numFingers === 6 ? " You killed my father. Prepare to die." : "Nice to meet you."
};


inigo1.greeting(westley)
inigo1.greeting(rugen)

//part 7

const basketballGame = {
  score: 0,
  foulcount: 0,
  foul() {
    this.foulcount++;
    return this;

  },
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log('Halftime score is ' + this.score + ' with ' + this.foulcount + ' fouls ');
    return this;
  },
  fullTime() {
    this.score++
    console.log('fullTime score is ' + this.score + ' with ' + this.foulcount + ' fouls ');
    return this;
  }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.foul().basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();
basketballGame.foul().foul().basket().freeThrow().freeThrow().basket().threePointer().halfTime().basket().fullTime();

//part 8

const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
}
                             
const newzealand = {
  name: 'New Zealand',
  population: 5_084_300,
  state: 'NZ',
  founded: '26 January 1642',
  timezone: 'New Zealand/Wellington'

}

function printProperties(obj) {
  for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

printProperties(sydney);
printProperties(newzealand);

// part 9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//moreSports = teamSports;
let moreSports = [...teamSports];

moreSports.push('Soccer');
moreSports.unshift('Cricket')

console.log(moreSports);
console.log(teamSports); 

dog2 = dog1;
dog2 = "Figo"

console.log(dog1); 
console.log(dog2);

//cat2 = cat1;
cat2 = {...cat1};
cat2.name = "Geffory"

console.log(cat1);
console.log(cat2);

//print orignal values

console.log(teamSports); 
console.log(dog1); 
console.log(cat1); 

//teamSports original teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//teamsports output [ 'Cricket', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]
//changed

//dog1 original let dog1 = 'Bingo'; 
//dog1 output Bingo
//didnt change

//cat1 original let cat1 = { name: 'Fluffy', breed: 'Siberian' };
//cat1 output { name: 'Geffory', breed: 'Siberian' }
//changed

//part 10

/* function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
} */
class PersonClass {
  constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
      this.canDrive = (age >=16);
    }
  }

let andy = new PersonClass("Andy",13);
let andy2 = new PersonClass("Andy2",23);
console.log(andy.canDrive);
console.log(andy.canDrive);

//Person

console.log("Person 1");
for (let prop in andy) {
  console.log(`${prop}: ${andy[prop]}`);
}

console.log("\nPerson 2");
for (let prop in andy2) {
  console.log(`${prop}: ${andy2[prop]}`);
}

const product2 = {
  name: "Average Product",
  category: "Useful Things", 
  price: 15.00,
  discount_price: 15,
  gst_percent: 10,

  valueOf(){
  return this.price - (this.price * (this.discount_price/100)) + (this.price *(this.gst_percent/100))
},

toString() {
  return `${this.name} (${this.category})`
  }
}

let product1_qty = 2;
let product2_qty = 5;

console.log(`${product2} with quantity ${product2_qty} costs $${product2 * product2_qty}.`)
console.log(`${product1} with quantity ${product1_qty} costs $${product1 * product1_qty}.`)