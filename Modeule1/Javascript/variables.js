// var variable1 = 1;

// if (true) {
//     variable2 = 2;
// }

// console.log(variable1)  
// console.log(variable2)

// function example(){
//     let exampleVar;
//     const exampleConst = "example constant";
// }

// let helloText = "say Hi";
// let check = 4;
// if (check > 3) {

// let hello = "say Hello instead";
// console.log(hello);// "say Hello instead"
// }
// console.log(hello) // hello is not defined

// const helloTexts = "say Hi";
// const helloTexts = "say Hello instead";// error: Identifier 'greeting' has already been declared

// let scores = new Array();
// // or
// let scores = [element1, element2, element3, ...];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains[0]); // 'Everest'
// console.log(mountains[1]); // 'Fuji'
// console.log(mountains[2]); // 'Nanga Parbat'

// //push adds a new elemt onto the END of an array
// let numMountains = mountains.push('k2')//it also returns it so you can store it in a variable
// console.log(mountains)
// console.log('now there are '+numMountains+' mountains')

// //pop remove the LAST element of the array and returns it so you can store it in a variable
// let lastMountain = mountains.pop()
// console.log('last mountain is '+lastMountain)

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// console.log(seas);
// seas.push('Red Sea');

// //unshift adds a new elemt onto the BEGINNING of the array
// let numSeas = seas.unshift('Adriatic Sea')
// console.log(seas);
// console.log('now there are '+numSeas+' seas')

// //shift removes the FIRST element of an array and returns it so you can store it as a variable
// let firstSea = seas.shift()
// console.log('first sea is '+firstSea)

// let nsindex = seas.indexOf('North sea');
// console.log(nsindex)

// const user = {
//     "first_name" : "Sammy",
//     "last_name" : "Shark",
//     "age" : 25,
//     "followers" : 987
//     }
//     console.log(user.first_name +' is ' + user.age + ' years old.');
//     console.log(user.age)

//this function returns the sum //of two numbers
function sum(a,b){
    return a+b
    };

if (sum != 6){
        console.log ("error")}

let mySum = sum(2,4)

console.log('the answer is '+ mySum)