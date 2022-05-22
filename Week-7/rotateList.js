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

    rotate(x) {

        var curr = this.head;

        if (curr == null) {
            return;
        }

        while (curr.next != null) {
            curr = curr.next;

        }
        curr.next = this.head;
        curr = this.head;

        for (let i = 0; i < x - 1; i++) {

            curr = curr.next;
        }
        this.head = curr.next;
        curr.next = null;

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
console.log(linkList.rotate(3));

console.log("ROTATED LINKED LIST=  ")
console.log(linkList.show());