// Syntax Error: Missing closing quote and parenthesis
console.log("Welcome to the bootcamp");
// Type Error: Array contains a string instead of a number
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
 let doubled = numbers[i] * 2;
 console.log(doubled);
}
// Logic Error: Incorrect return values for prime check
function isPrime(num) {
 if (num < 2) return false;
 for (let i = 2; i < num; i++) {
 if (num % i === 0) {
 return false; 
 }
 }
 return true; 
}
console.log(isPrime(7));
