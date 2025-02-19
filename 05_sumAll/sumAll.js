const sumAll = function(rangeStart, rangeEnd) {
    let totalSum = 0;

    if (rangeStart < 0 || rangeEnd < 0 || !Number.isInteger(rangeStart) || !Number.isInteger(rangeEnd)){
        return "ERROR";
    } else if (rangeStart < rangeEnd){
        for (; rangeStart <= rangeEnd; rangeStart++){
            totalSum += rangeStart;
        }
    } else if (rangeStart > rangeEnd){
        for (; rangeStart >= rangeEnd; rangeStart--){
            totalSum += rangeStart;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
