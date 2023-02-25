//====================Radian To Degree================//

function radianToDegree(radian) {
    const resultOfDegree = radian * 57.296;
    return resultOfDegree;

}
const resultOfDegree = radianToDegree(199);
const fixed = parseFloat(resultOfDegree.toFixed(2));
console.log(fixed);


//==================== Check Javascript File=====================//

function isJavascript(str) {

    const extension = str.split('.').pop();
    console.log(extension)
    return extension === 'js';

}
const myFile = isJavascript('index.js');
console.log(myFile);


// ===============================Oil Price============================//

function oilPrice(dijel, petrol, octen) {
    const perLiterDijelPrice = 114;
    const perLiterPetrolPrice = 130;
    const perLiterOctenPrice = 135;

    const dijelPrice = perLiterDijelPrice * dijel;
    const petrolPrice = perLiterPetrolPrice * petrol;
    const octenPrice = perLiterOctenPrice * octen;

    const totalOilPrice = dijelPrice + petrolPrice + octenPrice;

    return totalOilPrice;

}

const totalOilPrice = oilPrice(30, 20, 10);
console.log(totalOilPrice);

//======================== Public Bus Fare======================//

function publicBusFare(pasenger) {
    const stuffBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusPrice = 250;


    const stuffBusNeed = pasenger / stuffBusCapacity;

    const microbusNeed = (pasenger % stuffBusCapacity) / microbusCapacity;

    const publicBusNeed = ((pasenger % stuffBusCapacity) % microbusCapacity) * publicBusPrice;


    return publicBusNeed;

}

const publicBusCost = publicBusFare(365);
console.log(publicBusCost);


//========================is best friend=======================//

const friendList = [
    { name: 'abul', friend: 'babul' },
    { name: 'babul', friend: 'abul' }
];

function isBestFriend(names) {
    for (i = 0; i < names.length; i++) {
        if (names[0].name === names[1].friend && names[0].friend === names[1].name) {
            return true;
        } else {
            return false;
        }
    }

}

const bestFriend = isBestFriend(friendList);
console.log(bestFriend);