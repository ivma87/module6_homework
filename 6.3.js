
//Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function firstArg(a = 4) {

    return function secondArg(b = 6) {
        let result = a + b;

        console.log(result)

    }

}

console.log(`${firstArg(5)}`);

const resultFunc = firstArg('external');

resultFunc(' internal');