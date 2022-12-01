const sumAll = function(first, last) {
    let result = 0;
    if (first > last) {
        const temp = first;
        first = last;
        last = temp;
    }

    if (first < 0 || last < 0) return 'ERROR';
    if (!Number.isInteger(first) || !Number.isInteger(last)) return 'ERROR';

    for (let i = first; i < last + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
