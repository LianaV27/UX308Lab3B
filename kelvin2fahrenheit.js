// This program *calculates* the **temperature in fahrenheit** based on the **temperature in kelvin**
// Formula: (K − 273.15) × 1.8 + 32 = °F

function calculateFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15)* 1.8 + 32;
    return fahrenheit;
}

//Console Test
//let kelvin = 5;
//let fahrenheit = calculateFahrenheit(kelvin);
console.log(`If it is 5 kelvin, it is ${calculateFahrenheit(5)}`);

export {calculateFahrenheit}
