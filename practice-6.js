// function evenOdd(number) {
//     if ((number % 2) === 0) {

//         return true;

//     }
//     else {
//         return false;
//     }
// }
// const myNumber = evenOdd(118);
// console.log(myNumber)

// function isLeapYear(year) {
//     const reminder = year % 4;
//     if (reminder === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const giveYear = isLeapYear(2020)
// console.log(giveYear)



function add(number) {
    sum = 0;
    for (var i = 0; i < arrayList.length; i++) {
        sum += arrayList[i]
    }
    return sum;
}

const arrayList = [10, 20, 30, 40, 50];
const total = add(arrayList);
console.log(total);
