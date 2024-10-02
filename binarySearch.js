const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarySearch(arr, target) {
    let n=arr.length-1;
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; 
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1; 
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

rl.question('Enter the target element to search: ', (input) => {
    const target = parseInt(input);

    const index = binarySearch(sortedArray, target);
    if (index !== -1) {
        console.log(`Element ${target} found at index: ${index}`);
    } 
    else {
        console.log(`Element ${target} is not in the array.`);
    }
    rl.close();
});
