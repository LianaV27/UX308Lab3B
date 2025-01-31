// This program *calculates* the **volume of an equilateral triangle prism** 
// based on the **length of one side of the triangle**
// and the **height of the flat edge**

//Formula: Volume = (√3/4)a^2 × h
// a = length
// h = height

function calculateTriPrismVolume(length, height) {
    let volume = Math.sqrt(3 / 4) * Math.pow(length, 2) * height;
    return volume;
}

console.log(`If an equilateral triangle prism has a length of 5 and height of 3, the volume is ${calculateTriPrismVolume(3, 4)}`);

export { calculateTriPrismVolume }