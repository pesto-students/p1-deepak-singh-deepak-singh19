class stack {

    constructor() {
        this.st1 = [];
        this.st2 = [];
    }

    add(data) {

        while (this.st1.length != 0) {
            this.st2.push(this.st1.pop());
        }

        this.st1.push(data);

        while (this.st2.length != 0) {
            this.st1.push(this.st2.pop());
        }

        return;
    }

    remove() {
        if (this.st1.length == 0) {
            return console.error("Stack Underflow");
        }

        console.log("Poped Element : " + this.st1.pop());

        return;
    }
}


const Q = new stack();

Q.add(10);
Q.add(90);
Q.add(64);
Q.add(43);
Q.add(143);
console.log(Q.st1);
Q.remove();
Q.remove();
Q.add(4);
Q.remove();
Q.remove();

console.log(Q.st1);