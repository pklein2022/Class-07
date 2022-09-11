function greatestCommonDivisor(a, b) {
    if (b) {
        return greatestCommonDivisor(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(greatestCommonDivisor(14, 21)); // returns 7
console.log(greatestCommonDivisor(69, 169)); // returns 1
console.log(greatestCommonDivisor(90, -100)); // returns 1

function gcd(a, b) {
    // force both parameters to positive values
    a = Math.abs(a);
    b = Math.abs(b);

    // find the smallest of our two parameters
    start = a < b ? a : b;

    // loop through all numbers starting with smallest number
    for(let i = start; i > 0; i--) {
        // if both parameters are BOTH equally divisible by current loop value, we found the greatest common divisor!
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
    return;
}
console.log(gcd(14, 21)); // returns 7
console.log(gcd(69, 169)); // returns 1
console.log(gcd(90, -100)); // returns 1

