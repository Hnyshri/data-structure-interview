//checking square is another array
// arr1 = [1,2,3,4], arr2 = [1,9,4,16]


function isSquareCheck(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        console.log("i _" + i);
        let isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            console.log("jee _" + j);
            if (arr1[i] * arr1[i] === arr2[j]) {
                console.log("i*j" + arr1[i] * arr2[i]);
                console.log('on J' + arr2[j]);
                isSquare = true;
            }
            if (j === arr2.length - 1) {
                console.log('end_' + j);
                if (!isSquare) {
                    console.log("not sql " + isSquare);
                    return false;
                }
            }
        }
    }
    return true;
}
const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);