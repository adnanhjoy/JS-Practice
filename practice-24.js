const myString = 'Adnan'
console.log(typeof myString);
let myNumber = 17;
console.log(typeof myNumber);
var myBollean = true;
console.log(typeof myBollean);

let hudai = myNumber = 15;
console.log(hudai)


const num1 = 15;
const num2 = 15;
const sum = num1 + num2;
console.log(sum)

let i = 7;
while (i <= 19) {
    if (i % 2 === 1) {
        console.log(i)
    }

    i++;
}

const myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const mySplice = myArray.splice(9, 0, 200);
console.log(mySplice)
console.log(myArray)

for (i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element > 80) {

        console.log(element);
    }
}


const myObject = {
    name: 'adnan',
    age: 21,
    roll: 23
}

myObject.name = 'joy';
console.log(myObject)



//====================Problem-Solving====================//

function feetToInch(feet) {
    const inch = 12 * feet;
    return inch;

}
const inch = feetToInch(10);
console.log(inch);

//===================================================//

function centimeterToMeter(centi) {
    const meter = 0.01 * centi;
    return meter;
}

const meter = centimeterToMeter(100);
console.log(meter);


//==================================================//

function papersRequirment(book1, book2, book3) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const pageNeedFistBook = firstBookPage * book1;
    const pageNeedsecondBook = secondBookPage * book2;
    const pageNeedThirdBook = thirdBookPage * book3;

    const totalPage = pageNeedFistBook + pageNeedsecondBook + pageNeedThirdBook;
    return totalPage;

}

const copyNeeds = papersRequirment(10, 5, 5);
console.log(copyNeeds);


//================================================//

function bestFriend(names) {
    let largName = names[0];
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        if (name.length > largName.length) {
            largName = name;
        }
    }
    return largName;
}

const friendList = ['Adnan', 'Adnan Ahmed Joy', 'Farhan', 'Sumon', 'Saimo', 'Adnan Hossain'];
const largestName = bestFriend(friendList);
console.log(largestName);

//====================================================//

function isPositeNumber(numbers) {
    let newNumberList = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < 0) {

            break;
        }
        newNumberList.push(number);
    }

    return newNumberList;
}

const numbersList = [10, 15, 20, 25, 30, 35, -40, 45, 50];
const finalResult = isPositeNumber(numbersList);
console.log(finalResult);