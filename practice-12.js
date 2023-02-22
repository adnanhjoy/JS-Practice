// Celcius to Farenheit

function celciusToFarenheit(celcius) {
    const farenheit = (celcius * 9 / 5) + 32;
    return farenheit;

}
const giveCelcius = celciusToFarenheit(100);
console.log(giveCelcius)