// javascript chap 2 exercize 2.1

let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000

console.log("str1",typeof str1); 
console.log("str2",typeof str2);
console.log("val1",typeof val1);
console.log("val2",typeof val2); 
console.log("myNum",typeof myNum); 

// exercize 2.2

const myName = "Fatima Altaf";
const myAge = 17;
const canCodeJavaScript = true;

// Log the sentence
console.log("My name is " + myName + ". I am " + myAge + " years old, and it is " + canCodeJavaScript + " that I can code JavaScript.");

// exersize 2.3

const a1 = parseFloat(prompt("Enter the value of 'a1':"));
const b = parseFloat(prompt("Enter the value of 'b':"));

if (!isNaN(a1) && !isNaN(b)) {
 
  const aSquared = Math.pow(a1, 2);
  const bSquared = Math.pow(b, 2);


  const c = Math.sqrt(aSquared + bSquared);
 
  console.log(`The hypotenuse (c) is: ${c}`) 
} else {
  console.log("Invalid input. Please enter valid numeric values for 'a1' and 'b'.");
}

// exersize 2.4


let a2 = 10;
let b1 = 5;
let c1 = 3;

a2 += b1;

a2 /= c1;

c1 %= b1;

console.log("a2: " + a2);
console.log("b1: " + b1);
console.log("c1: " + c1);

// project-1 chap 2

//  value in miles
let miles = 130;

// Conversion factor: 1 mile = 1.60934 kilometers
let kilometers = miles * 1.60934;


console.log("The distance of " + miles + " miles is equal to " + kilometers.toFixed(4) + " kilometers.");


// project-2 chap 2


let heightInInches = 70; 
let weightInPounds = 150; 

// Conversion factors
let inchesToCentimeters = 2.54;
let poundsToKilos = 0.45359237;

// Convert height and weight to centimeters and kilograms
let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilos = weightInPounds * poundsToKilos;

// Calculate BMI
let heightInMeters = heightInCentimeters / 100;
let bmi = weightInKilos / (heightInMeters * heightInMeters);

// results
console.log("Height: " + heightInInches + " inches is equal to " + heightInCentimeters + " centimeters.");
console.log("Weight: " + weightInPounds + " pounds is equal to " + weightInKilos + " kilograms.");
console.log("BMI: " + bmi.toFixed(2)); 
