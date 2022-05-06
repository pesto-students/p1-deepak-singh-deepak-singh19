function sortArr(arr) {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {

            case 0:
                c0++;

                break;

            case 1:
                c1++;
                break;

            case 2:
                c2++;
                break;


        }
    }

    i = 0;
    // console.log(c0 + " " + c1 + " " + c2);

    while (c0 > 0) {
        arr[i] = 0;
        // console.log("printing 0");
        i++;
        c0--;
    }

    while (c1 > 0) {
        arr[i] = 1;
        // console.log("printing 1");
        i++;
        c1--;
    }

    while (c2 > 0) {
        arr[i] = 2;
        // console.log("printing 2");
        i++;
        c2--;
    }


    return arr;

}

const a = sortArr([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);

console.log(a);

// TIME COMPLEXITY == O(N)
// SPACE COMPLEXITY === 0(1)