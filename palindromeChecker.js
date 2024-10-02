const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi);
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

rl.question('Please enter a string: ', (inputString) => {
    if (isPalindrome(inputString)) {
        console.log(`"${inputString}" is a palindrome.`);
    } 
    else {
        console.log(`"${inputString}" is not a palindrome.`);
    }
    rl.close();
});
