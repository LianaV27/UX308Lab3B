import {calculateFahrenheit} from "../kelvin2fahrenheit.js";

describe("calculateFahrenheit", function() {
    it("tests calculation with 5 kelvin", function() {
      let fahrenheit = calculateFahrenheit(5);
      expect(fahrenheit.toFixed(2)).toBe("-450.67");
    });

    it("tests calculation with 10 kelvin", function() {
      let fahrenheit = calculateFahrenheit(10);
      expect(fahrenheit.toFixed(2)).toBe("-441.67");
    });
  });