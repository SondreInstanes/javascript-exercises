const convertToCelsius = function(fahrenheit) {
  const temp = (fahrenheit - 32) * 5 / 9;
  const result = Math.round(temp * 10) / 10;
  return result;
};

const convertToFahrenheit = function(celsius) {
  const temp = celsius * 9 / 5 + 32;
  const result = Math.round(temp * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
