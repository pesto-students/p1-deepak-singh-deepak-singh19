function hasDuplicate(arr) {

    const dSet = new Set();

    for(let i=0; i<=arr.length; i++){
        dSet.add(arr[i]);
    }
    if(arr.length===dSet.size){
        return true;
    }
    else{
        return false;
    }
}

const hD= hasDuplicate([1,2,3,3,4,5,6,7,7]);

console.log(hD);
