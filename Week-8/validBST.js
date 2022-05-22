class Node {

    constructor(value) {

        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {

    constructor() {
        this.root = null; //EMPTY BINARY TREE

    }


    add(root, value) {

        if (root == null) {
            return;
        } else if (value < root.value) {
            root.left = this.add(root.left, value);
        } else {
            root.right = this.add(root.right, value);
        }

        return root;
    }


    inOrder(root, s) {

        // let arr = [];

        if (root == null) {
            return;
        }

        this.inOrder(root.left, value);
        s.push(root.value);
        this.inOrder(root.right, value);

        // return arr;


    }

    validBST(root) {


        // let s = this.inOrder(root);
        let s = [];

        for (let i = 0; i < s.length - 1; i++) {

            console.log(s[i] + " " + s[i + 1]);

            if (s[i] < s[i + 1]) {
                return true;
            }
            return false;
        }
    }
}

const tree = new BST();

let item = [2, 1, 3];

for (let items of item) {

    tree.root = tree.add(tree.root, items);
}

console.log(tree);

// console.log(tree.inOrder(tree.root));
console.log(tree.validBST(tree.root));