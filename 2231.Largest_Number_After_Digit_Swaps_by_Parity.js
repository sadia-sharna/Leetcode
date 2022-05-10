var maxInList = function (nums) {
    let uniqueNums = new Set(nums);
    let uniqueNumsList = [...uniqueNums];
    let max = 0;
    if (nums[0] % 2 === 0) {
        uniqueNumsList.forEach(element => {
            if (element % 2 === 0 && element > max) max = element;
        });
    }
    else {
        uniqueNumsList.forEach(element => {
            if (element % 2 !== 0 && element > max) max = element;
        });
    }
    return max;
};

var largestInteger = function (num) {
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);

    for (var i = 0; i < realDigits.length; i++) {

        let index = realDigits.indexOf(maxInList(realDigits.slice(i)), i);
        [realDigits[i], realDigits[index]] = [realDigits[index], realDigits[i]];
    }
    return realDigits.join('')

};

console.log(largestInteger(945903485))
