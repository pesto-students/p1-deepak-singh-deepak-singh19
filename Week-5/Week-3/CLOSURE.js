function createIncrement() {
    let count=0;
    //message
    function increment() {
        count++; //has access to the count variable
        // message=`Count is ${count}`;
    }
    let message=`Count is ${count}`; // mssg string is created and has nothing to do with count variable
    function log() {
        console.log(message);// There is no code that say mssg will change with count variable
    }
    return[increment,log];
}
const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?


// OUTPUT :- Count is 0
