let Weight = prompt("Enter Weight in KILOGRAMS");
let Height = prompt("Enter Height in METERS");

let BMI = parseFloat(Weight) / (parseFloat(Height) * parseFloat(Height));

console.log("BMI Result : " + BMI.toFixed(2));
if (BMI >= 40) {
    console.log("Morbidly Obese");
} else if (BMI <= 39.9 && BMI >= 35) {
    console.log("Severely Obese");
} else if (BMI <= 34.9 && BMI >= 30) {
    console.log("Moderately Obese");
} else if (BMI <= 29.9 && BMI >= 25) {
    console.log("Overweight");
} else if (BMI <= 24.9 && BMI >= 18.5) {
    console.log("Normal");
} else if (BMI <= 18.4 && BMI >= 16.0) {
    console.log("Underweight");
} else {
    console.log("Severely Underweight");
}