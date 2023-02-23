//creates a new object and populates it with values

const bobSmith = {
    nameArray: ["Bob", "Smith"], //object properties can be arrays
    nameObject: { //or other nested objects
        first: 'Bob',
        last: 'Smith'
    },
    'first-name': 'Bob', //if the object property contains a space or dash, put it in quotes
    lastName: 'Smith', //or strings
    age: 32, //or numbers

    bio() { //or functions
      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this['first-name']}.`); //functions need to use 'this' to access object properties
    },
};

const bobSmith2 = {...bobSmith} //this creates a shallow copy of the original object
console.log(bobSmith2)

//changing nested object properties in the original bobSmith object will also change them in shallow copies
bobSmith.nameObject.first = undefined
bobSmith.lastName = 'Jones' //this is not a nested object property so the value is copied and remains independent
console.log(bobSmith2) //reflects the referential change on line 25 but not the value change on line 26


console.log(bobSmith.lastName)
bobSmith.bio() //calls the function inside the object
console.log(bobSmith.nameObject.first)

console.log(bobSmith['first-name']) //access property names with spaces or dashes using array style syntax

//since undefined == false, we can use implicit boolean conversion to check if properties exist
if (bobSmith.firstName) console.log('firstName exists')
else console.log("firstName doesn't exist");

//can also write the above if using the shorthand conditional syntax
(bobSmith.lastName) ? console.log('lastName exists') : console.log("lastName doesn't exist");

//function to iterate over each individual property in the given object and print out the name and value
function printObjectValues(object) {

    for (let objProp in object) {
        console.log(`Name: ${objProp}, Value: ${object[objProp]}`)
    }
}

printObjectValues(bobSmith)

//we often want to store multiple objects, so we can put them in an array like this
const dieHardMovies = [
    {
        title: 'Die Hard',
        year: 1988,
        directedBy: 'John McTiernan',
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Die_Hard_%281988_film%29_poster.jpg/220px-Die_Hard_%281988_film%29_poster.jpg',
        starring: [	'Bruce Willis', 'Alan Rickman', 'Alexander Godunov', 'Bonnie Bedelia' ],
        plot: 'Die Hard follows New York City police detective John McClane (Willis) who is caught up in a terrorist attack'
    },
    {
        title: 'Die Hard 2',
        year: 1995,
        directedBy: 'John McTiernan',
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Die_Hard_%281988_film%29_poster.jpg/220px-Die_Hard_%281988_film%29_poster.jpg',
        starring: [	'Bruce Willis', 'Bonnie Bedelia' ],
        plot: 'Die Hard follows New York City police detective John McClane (Willis) who is caught up in another terrorist attack'
    }
]    

printObjectValues(dieHardMovies[1])

//create your own object with multiple properties
//make sure some are multiple values
//add some functions
//write a function to print out all names/values using for ... in

console.log("\nOBJECTS - CREATING COPIES")

const user1 = { name: 'Jo'} //create a super simple object
const user2 = user1 //this doesn't duplicate the object, just makes user2 point to the same place in memory as user1

console.log(user1) //both are the same
console.log(user2)

user1.name = 'Joanne'
console.log(user2) //user2 reflects the change to user1 because both point to the same reference / memory location

// let dog1 = "Fido"
// let dog2 = dog1

// dog1 = "Fido the second"
// console.log(dog2) //primitives like strings, numbers, booleans are stored by value, not reference, so remain independent

const user3 = {...user1} //creates a copy/clone of the original

user1.name = 'Chris' //changes to user1 or user2 will not be reflected in user3 as they're independent

console.log(user3) //user3 is still Joanne, not Chris

user3.name='Dave'

console.log(user2) //user2 is still Chris (after line 99)
console.log(user3) //user3 is still Dave - independent because we cloned it


console.log("\nOBJECTS - CONSTRUCTORS & CLASSES")

//if we want to create copies of a similar object, we can use {...} syntax as above or we can use a constructor
//this is a blueprint that tells objects what to store and how to behave, but it is not an object itself
function User(firstnameValue, lastnameValue) {

    this.firstname = firstnameValue;
    this.lastname = lastnameValue;
}

//creates a new object without a constructor
const user4 = { name: 'Jo'}

//create unique user objects using a constructor - these are unique and remain independent but are based on the same blueprint
const user5 = new User('Joanne', 'Batkin')
const user6 = new User('Chris', 'Marsh')

console.log(user4)
console.log(user5.lastname)
console.log(user6.firstname)


//another way of setting up a blueprint to create multiple objects from is using a class
class UserClass {

    //classes have constructor functions inside
    constructor(firstnameValue, lastnameValue) {
        this.firstname = firstnameValue;
        this.lastname = lastnameValue;        
    }
}

const user7 = new UserClass('Dave', 'Palmer')
console.log(user7)