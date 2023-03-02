/*let animal = {
    eat: true,
    sleep: true,
    legs: 4,
    mammal: true
};

/*let rabbit = Object.create(animal, {
    jumps: {
        value: true,
        enumerable: true
    }
});
console.log(rabbit)

console.log(rabbit.eats)
console.log(rabbit.legs)
console.log(rabbit.jumps)
console.log(Object.keys(rabbit));

for (let prop in rabbit) console.log(`${prop} is ${rabbit[prop]}`); 

function Cat(name){
    this.name = name;
}

Cat.prototype = animal;
const cat = new Cat("Tortoiseshell");
console.log('cat eats? ' + cat.eat);

for (let prop in cat) console.log(`${prop} is ${cat[prop]}`)

let snake = Object.create(animal, {
    jumps: {
        value: true,
        enumerable: true
    }
})

snake.eats = "alot";
snake.legs = 0;
snake.mammal = false;

console.log(snake.eats);
console.log(snake.legs);
console.log(Object.keys(snake));

for (prop in snake) console.log(`${prop} is ${snake[prop]}`)

function Dog(name){
    this.name = name;
}

Dog.prototype = animal;
const dog = new Dog("Natalie");
console.log('dog eats? ' + dog.eat);
dog.friendly = "Yes";
dog.happy = "Yes";

for (let prop in dog) console.log(`${prop} is ${dog[prop]}`) */

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
        this.type = 'animal'
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {

    constructor(name, earLength)
    
    {
        super(name);
        this.earLength = earLength;
        this.type = 'rabbit';
    }

    hide() {
        console.log(`${this.name} hides!`);
    }
    stop(){
        super.stop();
        this.hide();
    }
}

const pig = new Animal('Porky Pig')
const rabbit = new Rabbit("white Rabbit", 3);

rabbit.run(5);
rabbit.stop();
console.log(rabbit.type)
console.log(rabbit.speed)
console.log(rabbit.name)
console.log(rabbit.earLength)

class Dog extends Animal {

    constructor(name, teeth)
    
    {
        super(name);
        this.teeth = teeth;
        this.type = 'dog';
    }
        teethPrint(){
            console.log(`${this.name} smiles and showed ${this.teeth} teeth.`);
        }
    hide() {
        console.log(`${this.name} runs!`);
    }
    stop(){
        super.stop();
        this.hide();
    }
    bark() {
        console.log(`${this.name} starts barking!`);
    }
}

const dog = new Dog("Natalie", 122);
dog.teethPrint();
dog.run(12);
dog.stop();
dog.bark();