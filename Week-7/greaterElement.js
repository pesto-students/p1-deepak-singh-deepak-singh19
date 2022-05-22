function nGE(arr, n) {
    var s = [];
    let res = new Array(n);


    for (let i = n - 1; i >= 0; i--) {

        if (s.length != 0) {
            while (s.length != 0 &&
                s[s.length - 1] <= arr[i]) {
                s.pop();
            }
        }
        res[i] = s.length == 0 ? -1 : s[s.length - 1];
        s.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i] +
            " --- " + res[i] + " ");
}



let arr = [11, 13, 21, 3];
let v = arr.length;


nGE(arr, v);