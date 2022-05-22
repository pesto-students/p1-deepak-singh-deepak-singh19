class Node {

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {

    constructor() {

        this.root = null; // Empty Binary tree
    }

    insert(root, value) {

        if (root == null) {

            root = new Node(value);
        } else if (value < root.value) { // 
            root.left = this.insert(root.left, value);
        } else {

            root.right = this.insert(root.right, value);

        }


        return root;



    }



    maxDepth(root) {

        let node = root;

        if (node == null) {

            return -1; // if tree is empty return -1;
        } else {

            let lSubTree = this.maxDepth(node.left); // height of left Subtree
            let rSubTree = this.maxDepth(node.right); // height of right Subtree

            return Math.max(lSubTree + 1, rSubTree + 1); // return Maximum Depth of tree
        }
    }

    levelOrder(root) {

        let arr = [];

        if (root == null) {
            return;
        }

        arr.push(root);
        while (arr.length != 0) {

            var newNode = arr.shift();
            console.log(newNode.value + " ");

            if (newNode.left != null) {
                arr.push(newNode.left);
            }

            if (newNode.right != null) {
                arr.push(newNode.right);
            }
        }
        // return arr;
    }



}

const tree = new BST();

let item = [8, 4, 12, 1, 6, 10, 14];

for (let items of item) {

    tree.root = tree.insert(tree.root, items);
}

// console.log(tree.root.value); //8
// console.log(tree.root.left.value); //4
// console.log(tree.root.left.left.value); //1
// console.log(tree.root.left.right.value); //6
// console.log(tree.root.right.value); //12
// console.log(tree.root.right.left.value); //10
// console.log(tree.root.right.right.value); //14


console.log(tree.levelOrder(tree.root));