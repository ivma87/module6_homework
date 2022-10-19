// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x
// в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//var 1

let xPowerN = (x, n) => console.log(Math.pow(x, n));
xPowerN(2,4);


//var 2

let xPowerN2 = (y, b) => {
    let result = y;
    for (i = 2; i <= b; i++) {
        result *= y
    }
    console.log(result)
}
xPowerN2(2,4);