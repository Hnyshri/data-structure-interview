// Longest substring with out repeating characters?

// inputs - "abcabcbb"
// outpt - 3 (max length)

// Sliding window appraoch

function longestSubString(str) {

    if(!str){
        return 0;
    }
    let start = 0, end = 0, maxLength = 0;
    var uniqueCharacter = new Set();

    while (end < str.length) {
        if (!uniqueCharacter.has(str[end])) {
            uniqueCharacter.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacter.size);
        } else {
            uniqueCharacter.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}

console.log(longestSubString("abcabcbb"));