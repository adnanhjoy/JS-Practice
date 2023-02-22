// factorial

// function factorial(number) {
//     let result = 1;
//     for (var i = 1; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }

// const myNumbers = factorial(7);
// console.log(myNumbers);

// revers factorial

function reversFactorial(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--) {
        result *= i;
    }
    return result;
}
const myNumbers = reversFactorial(7);
console.log(myNumbers)