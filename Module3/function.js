
//first define/declare what our function is called and what it does
//this one is called square, it takes a single parameter called 'number' 
//and it returns the result of multiplying that number by itself
function square(number) {
  return number * number;
}

//then we can call it multiple times, passing in different values as the parameters
let threeSquared = square(3)
console.log(threeSquared)

let thirteenSquared = square(13)
console.log(thirteenSquared)

let twohundredandeightsquared = square(208)
console.log(twohundredandeightsquared)


//create a function getBMI(height, weight) which calculates and returns a person's BMI (google the formula)

//we can call normal functions BEFORE we define them (called hoisting)
console.log(getBMI(1.8, 85))

function getBMI(height, weight) {
  //BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.
  let bmi = weight / (height * height);

  //A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
  if (bmi >= 25) console.log('Your BMI is '+bmi+' which is overweight')
  else if (bmi >= 18.5) console.log('Your BMI is '+bmi+' which is healthy')
  else console.log('Your BMI is '+bmi+' which is underweight')

  console.log(getBMI.arguments) //the arguments property exists for all functions and stores the list of arguments/parameters

  return bmi
}

//this is a function expression, which looks more like creating a standard variable. this CANNOT be hoisted but DOES have the .arguments property
let getBMI2 = function (height, weight) {
  let bmi = weight / (height * height);
  console.log(getBMI2.arguments)
  return bmi;
}

console.log(getBMI2(1.8, 85) )

//an arrow fuction is a more concise and modern function format, particularly used for simple functions. no hoisting or .arguments
const getBMIArrow2 = (height, weight) => { console.log(getBMIArrow.arguments); return weight / (height * height);}

//we can leave out the word 'function'
//we can even leave out the 'return' keyword since it's implied
const getBMIArrow = (height, weight) => weight / (height * height);

console.log(getBMIArrow(1.8, 85))