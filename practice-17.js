// function reversString(string) {
//     let reversed = [];
//     for (let i = string.length - 1; i >= 0; i--) {
//         const element = string[i];
//         reversed.push(element);
//     }

//     return reversed;
// }

//===========Reverse Word===============//

function reversString(string) {
    const splitWord = string.split(' ');
    let result = [];
    for (let i = splitWord.length - 1; i >= 0; i--) {
        const element = splitWord[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good boy';

// const result = reversString(myString);
// console.log(result);

const wordResult = reversString(myString);
console.log(wordResult);