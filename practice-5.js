function inchToFeet(inch) {
    const feet = inch / 30;
    return feet;
}

const adnanFeet = 165;
const totalFeet = inchToFeet(adnanFeet);
console.log(totalFeet);