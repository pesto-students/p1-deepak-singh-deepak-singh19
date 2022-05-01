function vowelCount(str) {

    let vMap= new Map();
    const nStr=str.toLowerCase();

    vMap.set('a',0);
    vMap.set('e',0);
    vMap.set('i',0);
    vMap.set('o',0);
    vMap.set('u',0);

    for (let i = 0; i < str.length; i++){

        if(vMap.has(nStr.charAt(i))){
            vMap.set(nStr.charAt(i), vMap.get(nStr.charAt(i))+1);
        }
    }


    return vMap;


}

const obj1 = vowelCount("Deepak");

console.log(obj1);
