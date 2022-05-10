
var findClosestNumber = function (nums) {
    let result = nums.reduce(function (prev, current) {
        let min = prev;
        if (Math.abs(current) < Math.abs(prev)) min = current;
        else if (Math.abs(current) === Math.abs(prev)) min = Math.max(current, prev);

        return min;
    })
    return result;
};

console.log(findClosestNumber([-100000, -100000]));