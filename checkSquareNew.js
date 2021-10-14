//checking square is another array
// arr1 = [1,2,3,4], arr2 = [1,9,4,16] - case 1
// arr1 = [1,2,4,2], arr2 = [1,4,4,16] - case 2

// map1 = {1:1,2:2,4:1}
// map2 = {1:1,4:2,16:1}

// time complexity linear 0(n)

function isSquareCheck(arr1, arr2) {

    let map1 = {};
    let map2 = {};
    for (item of arr1) {
        map1[item] = (map1[item] || 0) + 1;
    }
    console.log(map1);
    for (item2 of arr2) {
        map2[item2] = (map2[item2] || 0) + 1;
    }
    console.log(map2);

    for (let key in map1) {
        console.log(key);
        if (!map2[key * key]) {
            return false;
        }
        if (map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true;
}
const result = isSquareCheck([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);