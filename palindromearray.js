let arr = ['m','a','m'];
let ispalindrome = true;

for (let i = 0, j = arr.length - 1; i < arr.length && j >= 0; i++, j--) {
    if (arr[i] != arr[j]) {
        ispalindrome = false;
    }
}

console.log('array of palindrome is ' + ispalindrome);

