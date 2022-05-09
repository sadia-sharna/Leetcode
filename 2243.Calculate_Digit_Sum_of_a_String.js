var mergeNumbers = function (numbers) {
    return numbers.join('');
}
var sumNumbers = function (numbers) {
    let sum = numbers.reduce(function (previousValue, currentValue) {
        return parseInt(previousValue) + parseInt(currentValue);
    });
    return sum;
}
var digitSum = function (s, k) {
    let arrNumToSum = [];
    let arrNumToMerge = [];

    while (s.length > k) {
        arrNumToSum = [];
        arrNumToMerge = [];
        for (var i = 0; i < s.length; i++) {
            arrNumToSum = [...arrNumToSum, s[i]];
            if (arrNumToSum.length === k || i + 1 == s.length) {
                arrNumToMerge = [...arrNumToMerge, sumNumbers(arrNumToSum)];
                arrNumToSum = [];
            }
        }
        s = mergeNumbers(arrNumToMerge);
    }
    return s;

};

console.log(digitSum("00000000", 3));