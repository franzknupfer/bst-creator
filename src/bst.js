export default class BST {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
    } else if (this.root > node) {
      this.root.left = node;
    } else if (this.root < node) {
      this.root.right = node;
    }
  }
}