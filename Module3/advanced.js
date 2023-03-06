/*function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2
    let counter2 = makeCounter();
    counter1(); // 1
    counter1(); // 2

    function makeCounter1(startFrom) {
        let currentCount = startFrom;
        return function() {
            currentCount++;
            console.log(currentCount)
            return currentCount;
        };
    }

    let counter3 = makeCounter1(18)
    counter3();
    counter3();
    counter3();
    counter3();

    function makeCounter2(startFrom, incrementBy) {
        let currentCount = startFrom;
        return function() {
            currentCount += incrementBy;
            console.log(currentCount)
            return currentCount;
        };
    }

    let counter4 = makeCounter2(4,2)
    counter4();
    counter4();
    counter4();

    function printMe(msg1, msg2, msg3){
        console.log('Printing debounced message: ' +msg1+msg2+msg3) 
    }
    
    
    function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


const delayMsg1 = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(() => delayMsg1('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg1('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg1('#3: Delayed by 0ms'), 0);
delayMsg1('#4: Not delayed at all');

const timeoutId = setTimeout(() => delayMsg1('#5: Delayed by 10s'), 10000);
clearTimeout(timeoutId);

function debounce(func, ms){
        let timer;
    
        return function() {
            clearTimeout(timer);
            console.log(...arguments);
            timer = setTimeout(() => func.apply(this, arguments), ms);
        }
    }
    
    printMe = debounce(printMe, 1500);
    
    setTimeout(printMe, 100, 'message 1')
    setTimeout(printMe, 200, 'message 2')
    setTimeout(printMe, 300, 'message 3', ' extras', '  more')

     function fibonacci() {
        let current = 0;
        let next = 1;
    
        function calc() {
            const temp = next;
            next = current + next;
            current = temp;
            console.log(current);
        }
    
        return calc;
    }
    
    function printFibonacci() {
        const calc = fibonacci();
        setInterval(calc, 1000);
    }
    
    printFibonacci();
    
    function printFibonacciTimeouts() {
        let prev = 0;
        let curr = 1;
    
        function print() {
            console.log(curr);
            let next = prev + curr;
            prev = curr;
            curr = next;
            setTimeout(print, 1000);
        }
    
        setTimeout(print, 1000);
    }
    
    function printFibonacciTimeoutsnested(limit) {
        let count = 0;
        let prev = 0;
        let curr = 1;
    
        function print() {
            console.log(curr);
            let next = prev + curr;
            prev = curr;
            curr = next;
            count++;
    
            if (count < limit) {
                setTimeout(print, 1000);
            }
        }
    
        setTimeout(print, 1000);
    } 
    
    let car = {
        make: "Porsche",
        model: '911',
        year: 1964,
        description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        }
        };


        car.description(); //works
        setTimeout(car.description, 200); //fails

        setTimeout(() => car.description(), 200);

        let car2 = {...car}
        car2.year = 1980

        setTimeout(() => car2.description(), 400)

        // c) Does the delayed description() call the original values or the new values from b) why does this happen
        //it does not update the description, this is because it becomes a shallow copy and it updates the clone of the new value

        let car3 = {...car}
        car3.year = 1970;
        setTimeout(car3.description.bind(car3), 400);

        let car4 = {...car3}
        car4.model = 'GT 3 RS';
        car4.year = 2022;
        setTimeout(car3.description.bind(car4), 600); 

        Function.prototype.delay = function (delay) {
            let func = this
        
            return function () {
                let args = arguments
                setTimeout(function () {
                    func.apply(null, args)
                }, delay)
            }
        }

        function multiply() {
            let args = Array.from(arguments)
            let product = 1;
            for (let i = 0; i < args.length; i++){
                product *= args[i]
            }
            console.log(product);
        }

        multiply.delay(500)(5, 5);
        multiply.delay(1000)(5, 5, 4);
        multiply.delay(1000)(5, 5, 2, 10);*/

        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        
            this.toString = function() {
                return `${this.name}, ${this.age}, ${this.gender}`;
            }
        }

        const person1 = new Person('James Brown', 73, 'male')
        console.log('person1: '+person1);

        const person2 = new Person('Preshen Govender', 24, 'male');
        console.log('person2: ' + person2);

        class DigitalClock {
            constructor(prefix) {
                this.prefix = prefix;
            }
            display() {
                let date = new Date();
                let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
                if (hours < 10) hours = '0' + hours;
                if (mins < 10) mins = '0' + mins;
                if (secs < 10) secs = '0' + secs;
                console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
            }
            stop() {
                clearInterval(this.timer);
            }
            start() {
                this.display();
                this.time = setInterval(() => this.display(), 1000);
            }
        }
        const myClock = new DigitalClock('My Clock: ')
        myClock.start()

        class PrecisionClock extends DigitalClock {
            constructor(prefix, precision = 1000) {
                super(prefix);
                this.precision = precision ;
            }
            start() {
                super.dosplay();
                this.timer = setInnterval(() => this.display(), this.precision);
            }
        }

        const myPrecisionClock = new PrecisionClock('My precision clock: ', 500);
        myPrecisionClock.start();

        class AlarmClock extends DigitalClock {
            constructor(prefix,wakeupTime = '07:00') {
            super(prefix);
            this.wakeupTime = wakeupTime;
        }

        display() {
            super.display();
            if (this.getTime() == this.wakeupTime) {
                console.log('Wake Up ! ! !');
                this.stop();
            }
        }