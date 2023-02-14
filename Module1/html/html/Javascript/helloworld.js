console.log('Hello World')

    function sayHello() {
        console.log("hello again")
    }

    sayHello()     

    function sum(a, b){
        let result = a+b;
        console.log('inside sum function ' + result)
        return result;
    }

    let sumResult = sum(88,44)
    console.log(sumResult)

    function subtract(a,b){
        let result = a-b;
        console.log("inside subtraction function " + result)
        return result;
    }

    let subtractResult = subtract(40,20)
    console.log(subtractResult)

    function multiply(a,b) {
        let result = a*b;
        console.log("inside multiply function " + result)
        return result;
    }

    let multiplyResult = multiply(30,30)
    console.log(multiplyResult)

    function divide(a,b){
        let result = a/b
        console.log("inside divide function " + result)
        return result
    }

    let divideResult = divide(90,10)
    console.log(divideResult)
    
    sum(123,456)

    sayHello()

    var Sentiment = require('sentiment');

    function analyseSentence(sentence) {
        var sentiment = new Sentiment();
        var result = sentiment.analyze(sentence);

        return result.score;
    }

    console.log('Your score is '+ analyseSentence('I love dogs but i hate cats, rabbits are nice.'))

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question(`what your name?`, name => {
        console.log(`Hi ${name}`)
        readline.close();
    });


