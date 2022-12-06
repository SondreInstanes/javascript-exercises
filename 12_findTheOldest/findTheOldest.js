const findTheOldest = function(args) {
    return args.reduce((result, person) => {
        const oldest = age(result.yearOfBirth, result.yearOfDeath);
        const current = age(person.yearOfBirth, person.yearOfDeath);
        return oldest < current ? person : result;
    })
};

function age (birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
