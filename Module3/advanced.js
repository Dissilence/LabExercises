function printMe(msg1, msg2, msg3){
    console.log('Printing debounced message: ' +msg1+msg2+msg3) 
}

function debounce(func, ms){
    let timer;

    return function() {
        clearTimeout(timer);
        console.log(...arguments);

        //timer = setTimeout(func, ms, ...arguments)
        //timer = setTimeout(() => func.call(this, ...arguments), ms)
        timer = setTimeout(() => func.apply(this, arguments), ms);
    }
}

printMe = debounce(printMe, 1500);

setTimeout(printMe, 100, 'message 1')
setTimeout(printMe, 200, 'message 2')
setTimeout(printMe, 300, 'message 3', ' extras', '  more')
