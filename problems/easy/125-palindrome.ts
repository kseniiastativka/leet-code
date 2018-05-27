function isPalindrome(input: string): boolean {
    if (input.trim() === '') {
        return true;
    }

    const chars = input.toLowerCase().split('');
    const lettersRegex = /^[0-9a-z]+$/;
    const letters = chars.filter(char => char.match(lettersRegex));
    const lettersReversed = letters.slice().reverse();

    return letters.join('') === lettersReversed.join('');
}

const validPalindrome = 'A man, a plan, a canal: Panama';
const invalidPalindrome = 'race a car';

console.log(isPalindrome(validPalindrome) ? '👍 success' : '💩 failed');
console.log(isPalindrome(' ') ? '👍 success' : '💩 failed');
console.log(isPalindrome('11') ? '👍 success' : '💩 failed');
console.log(isPalindrome(invalidPalindrome) ? '💩 failed' : '👍 success');
