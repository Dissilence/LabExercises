/* function start(){
    console.log('Started preparing Pizza');
}

const makeBase = function(){
    console.log('Pizza Base is prepared');
}

const addCheese = () => {
    console.log('Cheese is added on Pizza');
}

function addToppings(){
    console.log('Toppings are added on Pizza')
}

const cook = function() {
    console.log('Pizza is cooked')
}
const finish = () => {
    console.log('Pizza is ready')
} 

start();
makeBase();
addCheese();
addToppings();
cook();
finish()*/

function start() {
    console.log('Started preparing Pizza'); 
    setTimeout(makeBase, 100, addCheese, addToppings, cook, finish);
}

const makeBase = function(...actions) {
    console.log('Pizza Base is prepared');
    setTimeout(actions.shift(), 500, ...actions)
}

const addCheese = (...actions) => {
    console.log('Cheese is added on Pizza');
    setTimeout(actions.shift(), 200, ...actions)
}

function addToppings(...actions) {
    console.log('Toppings are added on Pizza')
    setTimeout(actions.shift(), 300, ...actions)
}

const cook = function(...actions) {
    console.log('Pizza is cooked')
    setTimeout(actions.shift(), 800, ...actions)
}

const finish = (...actions) => {
    console.log('Pizza is ready')
}

start();