function tallestPerson(number) {
    let largestValue = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largestValue) {
            largestValue = element;
        }
    }
    return largestValue;
}


//==================Smallest-Person==================//

function smallestValue(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const height = [160, 190, 145, 130, 100, 265];

const getTallestPerson = tallestPerson(height);
console.log('Tallest Person:', getTallestPerson);

const getSmallestPerson = smallestValue(height);
console.log('Smallest Person:', getSmallestPerson);




