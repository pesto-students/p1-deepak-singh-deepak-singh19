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

    createLoop(x) {

        var count = 1;
        var curr = this.head;
        while (count > x && curr.next != null) {
            curr = curr.next;
        }

        var newNode = curr;

        while (curr.next != null) {
            curr = curr.next;

        }

        curr.next = newNode;

        return this.head;
    }

    loop() {

        var slow = this.head;
        var fast = this.head;
        let flag = false;

        if (fast != null || fast.next != null) {
            return false;
        }

        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {

                flag = true;
                break;

            }


        }
        return flag;



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

console.log(linkList.createLoop(3));

console.log(linkList.loop());
console.log(linkList.show());