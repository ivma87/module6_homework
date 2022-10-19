numberForCheck = 211/*+prompt('Enter number under 1000 for prime check')*/;
let resultOfCheck = 0;
function primeCheck(numberForCheck) {
    if (typeof numberForCheck !== 'number') { resultOfCheck = 'You entered not a number' }
    else if (numberForCheck >= 1000) { resultOfCheck = "You entered number over 1000" }
    else if (numberForCheck === 0) { resultOfCheck = '0' }
    else if (numberForCheck > 0 && numberForCheck < 4) { resultOfCheck = "Prime" }
    else if (numberForCheck % 2 === 0) { resultOfCheck = "Not Prime" }
    else {
        for (let i = 3; i <= numberForCheck / 2; i++) {
            numberForCheck % i === 0 ? resultOfCheck++ : resultOfCheck
        }
        // console.log(resultOfCheck);
        resultOfCheck === 0 ? resultOfCheck = "Prime" : resultOfCheck = "Not Prime"
    }
    return resultOfCheck;
}
primeCheck(numberForCheck);
console.log(`${numberForCheck} Is ${resultOfCheck}`);