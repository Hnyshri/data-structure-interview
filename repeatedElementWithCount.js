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

frequencyNumber([10, 20, 20, 10, 10, 20, 5, 20]);


//===================================================================



// Time Complexity : O(n2) 
// Auxiliary Space : O(n)

function countFreq(arr, n) {
    let visited = Array.from({ length: n }, (_, i) => false);

    console.log(visited);
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
