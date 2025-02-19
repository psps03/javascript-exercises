const convertToCelsius = function(fahrenheit) {
  let fahrenheitToCelsius = (fahrenheit - 32)/1.8;
  if (fahrenheitToCelsius == 0) return 0;
  return parseFloat(fahrenheitToCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let celsiusToFahrenheit = (celsius*1.8) + 32;
  if (celsiusToFahrenheit == 0) return 0;
  return parseFloat(celsiusToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
