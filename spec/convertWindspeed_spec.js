import {describeWindspeed} from "../convertWindspeed.js";

describe("describeWindspeed", function() {
    it("tests with 5 km/h windspeed", function() {
      let description = describeWindspeed(5);
      expect(description).toBe("light air");
    });

    it("tests with 76 km/h windspeed", function() {
        let description = describeWindspeed(67);
        expect(description).toBe("gale");
      });
  });