//*convert* a **windspeed in km/h** to a **description** using The Beaufort Wind Scale.

function describeWindspeed(km) {
    let description;
    if (km < 1) {
        description = "calm";

    } else if (km >= 1 && km <= 5) {
        description = "light air";
    } else if (km >= 6 && km <= 11) {
        description = "light breeze";
    } else if (km >= 12 && km <= 19) {
        description = "gentle breeze";
    } else if (km >= 20 && km <= 28) {
        description = "moderate breeze";
    } else if (km >= 29 && km <= 38) {
        description = "fresh breeze";
    } else if (km >= 39 && km <= 49) {
        description = "strong breeze";
    } else if (km >= 50 && km <= 61) {
        description = "near gale";
    } else if (km >= 62 && km <= 74) {
        description = "gale";
    } else if (km >= 75 && km <= 88) {
        description = "strong gale";
    } else if (km >= 89 && km <= 102) {
        description = "storm";
    } else if (km >= 103 && km <= 117) {
        description = "violent storm";
    } else if (km >= 118 && km <= 133) {
        description = "hurricane";
    }
    return description;
}
console.log(`wind is moving at 67km/h, there is a ${describeWindspeed(67)}`);
export { describeWindspeed }
