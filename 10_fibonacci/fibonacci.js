const fibonacci = function(args) {
    if (args < 0) return "OOPS";
    if (args == 0) return 0;
    let num = 0;
    let result = 1;

    for (let i = 1; i < args; i++) {
        const temp = result;
        result = num + result;
        num = temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
