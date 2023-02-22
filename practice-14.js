function averageSum(number) {
    let sum = 0;
    for (var i = 0; i < number.length; i++) {
        const element = number[i];
        let totalSum = sum += number[i] / number.length;

    }
    return sum;
}

const myNumbers = [10, 20, 30, 40, 50];
const total = averageSum(myNumbers);
console.log(total)