function add(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function getOddNumbers(number) {
    const oddNumbers = [];
    for (var i = 0; i < number.length; i++) {
        const element = number[i]
        if (element % 2 === 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const totalOdd = getOddNumbers(myNumbers);
// console.log(totalOdd);
const totalSum = add(totalOdd);
console.log(totalSum);