function findPair(arr, n) {

    let mpp = new Map();

    for (let i = 0; i < arr.length; i++) {

        if (mpp.has(arr[i])) {

            mpp.set(arr[i], mpp.get(arr[i]) + 1)
        } else mpp.set(arr[i], 1)
    }

    for (let i = 0; i < arr.length; i++) {

        if (mpp.has(n + arr[i])) {

            return 1;
        }
    }

    return 0;
}

const pair = findPair([5, 20, 3, 2, 50, 80], 78);

console.log(pair);

// TIME COMPLEXITY == O(N)
// SPACE COMPLEXITY === 0(arr.length)