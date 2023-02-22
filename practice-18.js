const arrayList = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const newArray = arrayList.splice(3, 3);
console.log(newArray);
const concatArray = newArray.concat(arrayList);
console.log(concatArray);


//==============Remove-Duplicate Array=================//

const studentsName = ['Adnan', 'Joy', 'Saimon', 'Farhan', 'Adnan', 'Saimon', 'Sumon', 'Ripon', 'Joy'];

function removeDuplicateArray(names) {
    let anotherArray = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (anotherArray.includes(element) === false) {
            anotherArray.push(element);
        }
    }
    return anotherArray;
}

const result = removeDuplicateArray(studentsName);
console.log(result);