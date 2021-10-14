// Time Complexity : O(n) 
// Auxiliary Space : O(n)
// output = 10 3
//          20 4
//          5 1


function frequencyNumber(arr) {
    // Creating a HashMap containing integer as a key and occurrences as a value
    let freqMap = new Map();
    console.log(freqMap);

    for (let i = 0; i < arr.length; i++) {
        if (freqMap.has(arr[i])) {
            // If number is present in freqMap, incrementing it's count by 1
            freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
        }
        else {
            // If integer is not present in freqMap, putting this integer to freqMap with 1 as it's value
            freqMap.set(arr[i], 1);
            console.log(freqMap);
        }
    }

    for (let [key, value] of freqMap.entries()) {
        console.log(key + " " + value);
    }
}

// frequencyNumber([10, 20, 20, 10, 10, 20, 5, 20]);


//===================================================================



// Time Complexity : O(n2) 
// Auxiliary Space : O(n)

function countFreq(arr, n) {
    let visited = Array.from({
        length: n
    }, (_, i) => false);

    // var arr1 = Array.from({
    //     length: 5 // Create 5 indexes with undefined values
    // },
    //     function (v, k, i) { // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to 4]
    //         console.log(v, k, i);
    //         return k; // Return k(ey) as value for this index
    //     }
    // );
    // console.log(arr1);

    // console.log(visited);
    // Traverse through array elements and count frequencies
    for (let i = 0; i < n; i++) {

        // Skip this element if already processed
        if (visited[i] == true) {
            continue;
        }
        // Count frequency
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log(arr[i] + " " + count);
    }
}

let arr = [10, 20, 20, 10, 10, 20, 5, 20, 20];
countFreq(arr, arr.length);




// x = Array.from({ length: 5 }, (v, i, k) => k)
// console.log(x)
// //Expected output Array(5) [ undefined, undefined, undefined, undefined, undefined ]

// x = Array.from({ length: 5 }, (v, i, k) => v)
// console.log(x)
// //Expected output Array(5) [ undefined, undefined, undefined, undefined, undefined ]

// x = Array.from({ length: 5 }, (v, i, k) => i)
// console.log(x)
// //Expected output Array(5) [ 0, 1, 2, 3, 4 ]

// x = Array.from({ length: 5 }, () => [])
// console.log(x)
// //Expected Output Array(5) [ [], [], [], [], [] ]

// x = Array.from({ length: 5 }, () => { })
// console.log(x)
// //Expected Output Array(5) [ undefined, undefined, undefined, undefined, undefined ]