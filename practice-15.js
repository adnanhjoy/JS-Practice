// function areaOfRectangle(h, w) {
//     const areaOf = h * w;
//     return areaOf;
// }
// const resultOfArea = areaOfRectangle(5, 10);
// console.log(resultOfArea);



function smallestNumber(num1, num2, num3) {
    let smallestValue = '';
    if (num1 < num2 && num1 < num3) {
        smallestValue = smallestValue + 'The Smallest Value is Num1'
    }
    else if (num2 < num3 && num2 < num1) {
        smallestValue = smallestValue + 'The Smallest Value is Num2'
    } else {
        smallestValue = smallestValue + 'The Smallest Value is Num3'
    }
    return smallestValue;
}

const myNumber = smallestValue(10, 45, 3);
console.log(myNumber);