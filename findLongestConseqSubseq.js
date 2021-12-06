
//  Given an array/list of numbers as argument that have multiple set of
//  consecutive numbers, write a function that will return the index from where max number
//  of consecutive numbers start. 

// function startOfMaxCons([2,3,4,51,71,9,10,21,22,23,24,13,4,5,6])
// output is 7 [2,3,4,4,5,6]


function startOfMaxCons(arr) {
    /* We insert all the array elements into
    unordered set. */
    n = arr.length;
    let S = new Set();

    for (let i = 0; i < n; i++) {
        S.add(arr[i]);
    }

    // console.log(S);

    // check each possible sequence from the start
    // then update optimal length
    let ans = 0;
    for (let i = 0; i < n; i++) {

        // if current element is the starting element of a sequence

        if (!S.has(arr[i] - 1)) {

            // Then check for next elements in the
            // sequence
            let j = arr[i];

            // increment the value of array element
            // and repeat search in the set
            while (S.has(j))
                j++;

            // Update optimal length if this length
            // is more. To get the length as it is
            // incremented one by one
            ans = Math.max(ans, j - arr[i]);
        }
    }
    return ans;
}

console.log(startOfMaxCons([2, 3, 4, 51, 71, 9, 10, 21, 22, 23, 24, 13, 4, 5, 6]));
