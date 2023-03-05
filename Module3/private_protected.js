function checkDate(date) {
    try {
        const testDate = new Date(date);
        if (testDate == `Invalid Date`){
            throw new SyntaxError('not a valid date');
        }
        return true;
    }   catch (err) {
        if (err instanceof SyntaxError) {
            console.log("syntax Error: " + err.message);
        } else {
            throw err;
        }
    }
    finally { 
        console.log('At the end')
    }
    return false;
}

//write a function checkDate, similar to above, that throws an error if the date is parsed as invalid and implements catch/finally
const testDate = new Date('this is not a date')
const today = new Date();
console.log(testDate) //Invalid Date
console.log(testDate == 'Invalid Date')
console.log(checkDate("this is not a date"))
console.log(checkDate("2023-03-03"))
