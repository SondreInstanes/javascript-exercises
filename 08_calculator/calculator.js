const add = function(a, b) {
  return (Number(a + b));
};

const subtract = function(a, b) {
  return (Number(a - b));
};

const sum = function(result) {
	return result.reduce((a, b) => a + b, 0);
};

const multiply = function(result) {
  return result.length ? result.reduce((a, b) => a * b) : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num < 0) return -1;
  else if (num == 0) return 1;
  else return (num * factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
