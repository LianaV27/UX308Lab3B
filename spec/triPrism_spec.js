import {calculateTriPrismVolume} from "../trianglePrismVolume.js";

describe("calculateTriPrismVolume", function() {
    it("tests calculation with 3 length & 4 height", function() {
      let volume = calculateTriPrismVolume(3,4);
      expect(volume.toFixed(2)).toBe("31.18");
    });

    it("tests calculation with 5 length & 3 height", function() {
        let volume = calculateTriPrismVolume(5,3);
        expect(volume.toFixed(2)).toBe("64.95");
      });
  });