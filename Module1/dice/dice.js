let button = document.getElementById("myButton");
let number = document.getElementById("number");

number.innerHTML = "0";

let min = 1;
let max = 7;

function generateNumber(){
    let random = Math.floor((Math.random() * (max-min) + min));
    return random;
}

button.addEventListener("click", function (){
    let result = generateNumber();
    number.innerHTML = result;
})