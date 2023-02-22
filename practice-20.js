function woodCalculator(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chariPrice = perChair * chair;
    const tablePrice = perTable * table;
    const bedPrice = perBed * bed;

    const totalPrice = chariPrice + tablePrice + bedPrice;
    return totalPrice;
}
const totalPrice = woodCalculator(1, 1, 1);
console.log(totalPrice);