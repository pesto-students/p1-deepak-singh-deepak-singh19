function maxSum(arr) {

    let max = arr[0];

    let curr = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        curr += arr[i];
        if (curr > max) {
            max = curr;
        }
    }

    return max;
}

const val = maxSum([1, 2, 3, 4, -10]);
console.log(val);

// TIME COMPLEXITY == O(N)
// SPACE COMPLEXITY === 0(1)