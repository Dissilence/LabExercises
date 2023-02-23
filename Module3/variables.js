
//we can have multiple statements on the same line but NEED to separate them with a semi-colon
console.log('alert'); console.log('alert3') //the semi colon at the end of the line is optional but recommended

//avoid using 'var' to define variables - it's the old way of doing things and can lead to unexpected side effects
//var oldVariable = "don't do this"

//variables defined with 'let' can be reassigned later
let myName = "Jo"; //new variable. space in memory is named 'myName' and has the value 'Jo'.

//variables defined with 'const' can't be re-assigned a new value later on
const myName2 = "Elizabeth";
//myName2 = 'Liz' //causes an error

console.log(myName); //Jo
console.log(myName2); //Elizabeth

//we CAN re-assign this variable to a new value since we declared it using 'let'
//the variable already exists, so we don't need to re-declare it with 'let', we can just give it a new value
myName = "Joanne";

console.log(myName); //Joanne