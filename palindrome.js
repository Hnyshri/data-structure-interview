// How do you check if a given string is palindrome

// dad - dad = true
// level - level = true
// 121 - 121 = true

// Method - 1
function isPalindrome(str) {
    let reverse = str.split("").reverse().join('');
    return str.toLowerCase() === reverse.toLowerCase();
}
console.log(isPalindrome("level"));

// Method - 2

function isPalindromeLogic(str) {
    var string = str.toLowerCase();
    var left = 0;
    var right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("dwad"));
