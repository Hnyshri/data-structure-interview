// Anagram logic

// hello => lleoh
// Linear time complexity O(n)

function isAnagram(stringOne, stringTwo) {
    if (stringOne.length != stringTwo.length) {
        return false;
    }

    counter = {};
    for (let letter of stringOne) {
        counter[letter] = (counter[letter] || 0) + 1;
    }
    console.log(counter);

    for (let item of stringTwo) {
        console.log(counter[item]);

        if (!counter[item]) {
            console.log(counter[item]);
            return false;
        }
        counter[item] -= 1;
    }
    console.log(counter);

    return true;
}

value = isAnagram("hello", "lleho");
console.log(value);