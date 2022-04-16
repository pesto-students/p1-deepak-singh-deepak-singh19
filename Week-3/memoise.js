function memoize (fn){
  const cache= new Map();

  return function(...args){
    const key =args.toString();
    console.log('function called with' + key);
    console.log(cache);
    if(cache.has(key)){
      return cache.get(key);
    }
    cache.set(key,fn(...args));
    return cache.get(key);
  }

}


function add(a, b){
  return a+b;
}

function time(fn){
  console.time();
  const t=performance.now();
  fn();
  const t1=performance.now();
  console.timeEnd();
  const k=t1-t;
  console.log('Time taken for this function to run ' + k);
}

const memoizeAdd = memoize(add);

time(()=> memoizeAdd(100,100));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(1000000000,200000000));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(100,200));
time(()=> memoizeAdd(1000000000,200000000));
