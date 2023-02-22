const shoppingList = [
    { Name: 'Shoe', Price: 1200, Quantity: 5 },
    { Name: 'Shirt', Price: 600, Quantity: 3 },
    { Name: 'Pant', Price: 1000, Quantity: 2 },
    { Name: 'Clock', Price: 400, Quantity: 4 }
];

function totalSum(amount) {
    let sum = 0;
    for (let i = 0; i < amount.length; i++) {
        const totalPrice = amount[i];
        const totalProduct = totalPrice.Price * totalPrice.Quantity;
        sum += totalProduct;

    }
    return sum;

}

const totalSumOfProduct = totalSum(shoppingList);
console.log(totalSumOfProduct);




// const shoppingList = [
//     { Name: 'Shoe', Price: 1200 },
//     { Name: 'Shirt', Price: 600 },
//     { Name: 'Pant', Price: 1000 },
//     { Name: 'Clock', Price: 400 },
// ];

// function totalSum(amount) {
//     let sum = 0;
//     for (let i = 0; i < amount.length; i++) {
//         const totalPrice = amount[i];
//         sum += totalPrice.Price;

//     }
//     return sum;

// }

// const totalSumOfProduct = totalSum(shoppingList);
// console.log(totalSumOfProduct);