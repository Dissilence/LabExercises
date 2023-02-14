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
    
    sum(123,456)

    sayHello()

    var Sentiment = require('sentiment');

    function analyseSentence(sentence) {
        var sentiment = new Sentiment();
        var result = sentiment.analyze(sentence);

        return result.score;
    }

    console.log('Your score is '+ analyseSentence('I love chocolate but i hate that it makes me fat.'))