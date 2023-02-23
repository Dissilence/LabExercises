console.log('DATA TYPES - NUMBERS\n')

let four = 4 //this variable called four stores the number 4 (an integer, or whole number)
let Four = 44 //this variable refers to a different memory location called Four because variables are case-sensitive

let n = 3.14159 //n refers to a decimal, or floating point number, called a float

four = 'four' //we can change the type of the variable from an int to a string if we like

let infinity = 1/0; //Infinity is a special numerical value representing infinity
let negativeInfinity = -1/0; //we can also have negative Infinity, rarely needed
let nan = "text" / 6; //NaN = Not a Number - results from trying to do mathematical options on values that aren't numbers

console.log(four) //'four'
console.log(Four) //44 - different locations in memory

console.log(n) //3.14159

console.log(infinity == Infinity) //true
console.log(negativeInfinity) //-Infinity

console.log(nan == NaN) //false! even though it would make sense to be true
console.log(isNaN(nan)) //NaN != NaN, so we have to use the isNan function to test for not a number values

console.log('\nDATA TYPES - STRINGS')

const doubleQuotes = "This string uses double quotes for a word like can't "; //double quoted strings are the same as single quoted strings
const singleQuotes = 'This string uses single quotes "with double quotes inside"'; //but you can put ' inside " " and " inside ' '
const backTick = `This string uses back ticks and displays variables like ${four} or ${n}`; //back ticks are used for strings containing variables

console.log(doubleQuotes)
console.log(singleQuotes)
console.log(backTick)

console.log('\nDATA TYPES - BOOLEANS')

let myBoolean = false; //booleans only have true or false values

myBoolean = !myBoolean; //toggles or switches the previous value of the boolean to its opposite

if (myBoolean) { console.log('my boolean was true'); } //booleans can be easily used in if tests
else { console.log('my boolean was false')}

console.log('\nDATA TYPES - NULL & UNDEFINED')

let unknownNull = null; //null means it doesn't exist, there's nothing there
let unknown; // undefined means something exists but we don't know what (yet)
console.log(unknown == unknownNull) //true: null and unknown are equivalent
console.log(unknown === unknownNull) //false: but they aren't strictly equal

console.log('\nDATA TYPES - OBJECTS')

const user = { name: 'Jo', location: 'Maryborough' } //objects store complex multi-part data instead of a single primitive value

console.log(typeof user) //we can use typeof to check what type a variable is
console.log(typeof(doubleQuotes))
console.log(typeof Four)
console.log(typeof n)

console.log('\nDATA TYPES - CONVERSIONS')

console.log(String(myBoolean)) //converts a boolean to a string using the String constructor
console.log("4" + "4") //no conversion - + concatenates two strings
console.log(Number("4") + Number("4")) //explicit conversion of strings to numbers, forcing addition
console.log("4" * "4") //* does implicit conversion to numbers because multiplying strings doesn't make sense

console.log('\nDATA TYPES - BOOLEANS & CONDITIONALS')

//fully written if statement
if (5 > 9) { 
    console.log('my value was true'); 
}
else { 
    console.log('my value was false');
}

//shorthand conditional (ternary) operator that does the same thing
(5 > 3) ? console.log('my value was true') : console.log('my value was false')

let age = 22;

let isAdult = (age >= 18) ? ' is an adult' : 'is not an adult' //can also capture value from conditional and assign to a variable
console.log(isAdult)

//the below 'if' is the long hand equivalent of the above conditional on line 80
let isAdult2;

if (age >= 18) {
    isAdult2 = ' is an adult';
} else {
    isAdult2 = 'is not an adult';
}
console.log(isAdult2)


console.log(false == 0) //true, because 0 is equivalent to false

console.log("02" == 2) //true - they are equivalent
console.log("02" === 2) //false - they are not strictly equal