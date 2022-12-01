//fuck this pice of shit exercise, what the fuck is a rest operator
const removeFromArray = function(...arrayName) {
    const array = arrayName[0];
    const newArray = [];

    array.forEach((item) => {
        if (!arrayName.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
