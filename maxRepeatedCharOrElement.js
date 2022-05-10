// Find the maximum occuring character in giving String?

// Hello World
// Output- l

function getCharString(str) {
    var map = {};
    let max = 1;
    var char = str[0];
    
    str.split('').forEach((element) => {
        map[element] = map[element] ? map[element] + 1 : 1;
    });

    for (let k in map) {
        if (map[k] > max) {
            max = map[k];
            char = k;
        }
    }
    return char;
}

console.log(getCharString("Hello world"));


// ====================================================

// Find the maximum occuring element in giving array?

const givenArray = [1, 2, 3, 4, 1, 1, 2, 3, 4];

const maxValue = givenArray.reduce((previous, current, i, arr) => {
    // console.log(previous, current, i, arr);
    if (
        arr.filter(item => item === previous).length >
        arr.filter(item => item === current).length
    ) {
        return previous;
    } else {
        return current;
    }
});

console.log(`Maximum occurrence value : ${maxValue}`);

