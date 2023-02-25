//===============Recursion Using For Loop==================//

function sum(i) {
    if (i === 5) {
        return 5;
    }
    return i + sum(i + 1);
}
const result = sum(1);
console.log(result);

function add(i) {
    if (i === 1) {
        return 1;
    }
    return i + add(i - 1);
}
const addResult = add(5);
console.log(addResult);

function factorial(num) {
    if (num === 5) {
        return 5;
    }
    return num * factorial(num + 1);
}

const factorialResult = factorial(1);
console.log(factorialResult);
