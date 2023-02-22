function getLeapYear(year) {
    const leapYear = [];
    for (var i = 0; i < year.length; i++) {
        const element = year[i];
        if (element % 4 === 0) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const giveYear = [2023, 2024, 2025, 2028, 2030];
const findLeapYear = getLeapYear(giveYear);
console.log(findLeapYear)