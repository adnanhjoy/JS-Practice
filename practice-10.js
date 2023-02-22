function getHours(time) {
    const minutes = time * 60;
    return minutes;
}
const giveTime = 4;
const getMinutes = getHours(giveTime);
console.log(giveTime, 'hours in', getMinutes, 'minutes')