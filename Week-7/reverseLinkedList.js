class Node {

    constructor(value) {
        this.value = value;

        this.next = null;
    }
}

class lList {

    constructor() {

        this.head = null;
        this.tail = null // List is Empty
    }


    add(value) {


        let node = new Node(value);
        if (this.head == null && this.tail == null) {

            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }


    size() {

        if (this.head == null) {
            return "List is EMPTY";

        }

        let count = 0;

        for (let i = this.head; i != null; i = i.next) {
            count++;
        }

        return count;
    }

    reverse() {

        var prev = null;
        var curr = this.head;
        var forward = null;

        while (curr != null) {

            forward = curr.next;
            curr.next = prev;
            prev = curr;
            curr = forward;

        }

        this.head = prev;

        return this.head;
    }

    show() {


        let str = "Linked List is ("

        for (let i = this.head; i != null; i = i.next) {
            str = (str + i.value + "  ");


        }
        str = str + " )"

        return str;
    }
}


const linkList = new lList();

linkList.add(315);
linkList.add(1);
linkList.add(51);
linkList.add(431);
linkList.add(1322);
linkList.add(132);
linkList.add(12);

console.log(linkList.show());
console.log(linkList.size());
console.log(linkList.reverse());

console.log("REVERSED LINKED LIST=  ")
console.log(linkList.show());