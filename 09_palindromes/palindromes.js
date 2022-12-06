const palindromes = function (str) {
    // /W removes all non-alphanumerical characters, /g is global search
    let remove = /[\W_]/g;
    // Replace here removes spaces and dots, replacing them with an empty string
    let lowerStr = str.toLowerCase().replace(remove, "");
    // This splits the string into individual letters, 
    // reverses it and concatonates it
    let reverseStr = lowerStr.split('').reverse().join('');

    // Returns wether strings match or not
    return reverseStr === lowerStr;

};

// Do not edit below this line
module.exports = palindromes;
