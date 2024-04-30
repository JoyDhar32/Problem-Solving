function convertTemperature(celsius) {
  // Convert Celsius to Kelvin
  const kelvin = celsius + 273.15;

  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 1.8) + 32;

  // Round the values to five decimal places
  const roundedKelvin = parseFloat(kelvin.toFixed(5));
  const roundedFahrenheit = parseFloat(fahrenheit.toFixed(5));

  return [roundedKelvin, roundedFahrenheit];
}

// Example usage:
const celsius1 = 36.50;
const result1 = convertTemperature(celsius1);
console.log(result1);

const celsius2 = 122.11;
const result2 = convertTemperature(celsius2);
console.log(result2);

// time complexity: O(1)
// space complexity: O(1)
// ✅ Beats 100.00% of users
// ✅  Hints: Convert Celcius to fahrenheit