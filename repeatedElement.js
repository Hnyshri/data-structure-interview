const givenArray = [1, 2, 3, 4, 1, 1, 2, 3, 4];

const maxValue = givenArray.reduce((previous, current, i, arr) => {
    console.log(previous, current, i, arr);
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