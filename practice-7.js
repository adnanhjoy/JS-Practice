// const getOddNumbers = []
// function oddNumbers(numbers) {
//     for (var i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element % 2 != 0) {
//             getOddNumbers.push(element);
//         }
//     }
//     return getOddNumbers;
// }

// const numbersList = [10, 13, 45, 78, 65, 80];
// const allOddNumber = oddNumbers(numbersList);
// console.log(allOddNumber);


// const allsum = sumOfEvenNumbers(allEvenNumbers);
// console.log(allsum)

function getEvenNumbers(numbers) {
    const allEvenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 === 0) {
            allEvenNumbers.push(element);
        }
    }
    return allEvenNumbers;
}

const myNumbers = [10, 15, 65, 98, 78, 63];
const evenNumbers = getEvenNumbers(myNumbers);
console.log(evenNumbers);