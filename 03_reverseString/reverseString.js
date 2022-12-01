const reverseString = function(words) {
    let split = words.split("");
    let reverse = split.reverse();
    let result = reverse.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
