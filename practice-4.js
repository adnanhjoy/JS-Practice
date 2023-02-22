function make_avg(number) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var array = [10, 20, 30, 40];
var total = make_avg(array);
console.log(total);
