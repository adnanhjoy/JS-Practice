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
