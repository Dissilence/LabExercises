//const interval = setInterval(printMessage, 5*1000, 'I am repeating interval')
//setTimeout(() => clearInterval(intervalPrint), 11*1000)

/*function repeatInterval(delay, limit)
{
    let counter = 1;

    let intervalTimer = setInterval(function reportThis() {
        console.log('repeatInterval: repeated ' + counter + ' of ' + limit +' times');
        counter ++;
        if (counter == limit) clearInterval(intervalTimer);
    }, delay);
}

repeatInterval(1000, 10) */

function repeatTimeout(delay, limit)
{
    let counter = 1;
    setTimeout(function repeatThis(current) {
    console.log('repeatTimeout: repeated' + current + ' of ' + limit + ' times')
    if (current < limit) setTimeout(repeatThis, delay, current+1)
    }, delay, counter)
    counter ++;
}

function cachingDecorator(pureFunction) {
    const cache = new Map();
    const outerContext = this;

    return function() {
        //let x = arguments[0];
        let funcParams = Array.from(arguments).join('')
        if (cache.has(funcParams)) { // if there's such key in cache
            console.log('returned cached value for '+funcParams)
            return cache.get(funcParams); // read the result from it
        }
        //let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context
        let result = pureFunction.apply(outerContext, arguments); //can also use apply - very similar, only difference is in handling arguments
        //let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context
        cache.set(funcParams, result); // and cache (remember) the result
        console.log('generated new value '+result+' for '+funcParams)
        return result;
    };
}
function slow(x, y) {
    // there can be a heavy CPU-intensive job here like adding up to a large number
    let goal = Math.floor(Math.random() * x * 1_000_000) //random number between 0 and a million times x
    console.log(`slow(${x}, ${y}): randomly generated goal for ${x * 1_000_000} is ${goal}`)
    let random = 0;
    for (let i = 0; i < goal; i++)
    {
        random++
    }
    return random;
}
//1. change the number of argument to slow
slow = cachingDecorator(slow);
console.time('slow no caching')
console.log( slow(1, 2) ); // slow(1) is run, cached and the result returned
console.timeEnd('slow no caching')

console.time('slow with caching')
console.log( "Again: " + slow(1, 2) ); // slow(1) result returned from cache
console.timeEnd('slow with caching')