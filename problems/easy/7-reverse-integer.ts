const lowerBoundary = Math.pow(-2, 31);
const upperBoundary = Math.pow(2, 31) - 1;

function reverse(input: number): number {
    const isNegative = input < 0;
    const reversedString = input.toString().split("").reverse().join("");
    const reversedNumber = (isNegative ? -1 : 1) * parseInt(reversedString);

    return lowerBoundary <= reversedNumber && reversedNumber <= upperBoundary
        ? reversedNumber
        : 0;
}

console.log(reverse(-120));
console.log(reverse(120));
console.log(reverse(123));
console.log(reverse(999999999999));
