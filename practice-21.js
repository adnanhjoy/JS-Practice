const phones = [
    { Name: 'iphone', Camera: 40, Price: 80000, Color: 'White', Storage: '64gb' },
    { Name: 'Samsung', Camera: 32, Price: 50000, Color: 'White', Storage: '64gb' },
    { Name: 'Xiomi', Camera: 30, Price: 40000, Color: 'Black', Storage: '64gb' },
    { Name: 'Oppo', Camera: 35, Price: 30000, Color: 'White', Storage: '64gb' },
    { Name: 'Realme', Camera: 25, Price: 35000, Color: 'White', Storage: '64gb' }
]

function mySelection(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const elemet = phones[i];
        if (cheapest.Price > elemet.Price) {
            cheapest = elemet;
        }
    }
    return cheapest;
}

const cheapestPrice = mySelection(phones);
console.log(cheapestPrice);



// function lowestValue(number) {
//     let lowestNumber = [];
//     for (let i = 0; i < number.length; i++) {
//         const numbers = number[i];
//         // if (numbers  lowestNumber) {
//         //     lowestNumber = numbers;
//         // }

//         if (numbers % 2 === 0) {
//             lowestNumber.push(numbers)
//         }

//     }
//     return lowestNumber;
// }

// const numberList = [45, 85, 65, 25, 12, 95, 100];
// const result = lowestValue(numberList);
// console.log(result);