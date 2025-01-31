import {calculateFahrenheit} from "../kelvin2fahrenheit.js";

describe("calculateFahrenheit", function() {
    it("tests calculation with 5 kelvin", function() {
      //let kelvin = 5;
      let fahrenheit = calculateFahrenheit(5);
      expect(fahrenheit.toFixed(2)).toBe("-450.67");
    });
  });