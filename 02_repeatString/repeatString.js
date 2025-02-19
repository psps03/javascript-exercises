const repeatString = function(stringToRepeat, noOfIteration) {
    let repeatedString = '';
    if(noOfIteration < 0){
        repeatedString = "ERROR";
    } else{
        for(; noOfIteration > 0; noOfIteration--){
            repeatedString += stringToRepeat;
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
