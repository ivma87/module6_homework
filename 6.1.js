let arr = ["apple", "orange", "strawberry", 2, 3, 4, 5, 6, 7, 8, 9, "apple", "orange", "strawberry", NaN, null];


function oddEvenCount (arrayName) {
    let evenQantity = 0;
    let oddQantity = 0;
    let nullQantity = 0;
    arrayName.forEach(function (item, index, array) {
        if (typeof item !== 'number') {/*console.log(`type of item ${index} is not a number`)*/
        } else if (isNaN(item)) {/*console.log(`type of item ${index} is NaN`)*/
        } else if (typeof item == 'null') {
            nullQantity++
        } else {
            item % 2 !== 0 ? oddQantity++ : evenQantity++
        }
    });
    console.log(`array contains:
${oddQantity} odd elements,
${evenQantity} even elements,
${nullQantity} null elements.`);
}


oddEvenCount (arr);