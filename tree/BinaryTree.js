// 二叉树

// 参考：https://www.cnblogs.com/jaxu/p/11309385.html

// 节点
class Node {
  constructor(key) {
    this.element = key;
    this.prev = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 向树中插入一个节点
  insert(key) {
    let newNode = new Node(key);
    if (this.root === null) this.root = newNode;
    else insertNode(this.root, newNode);
  }

  // 在树中查找一个节点
  search(key) {
    return searchNode(key, this.root)
  }

  // 通过中序遍历方式遍历树中的所有节点
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback);
  }

  // 通过先序遍历方式遍历树中的所有节点
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
  }

  // 通过后序遍历方式遍历树中的所有节点
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback);
  }

  // 返回树中的最小节点
  min() {
    return minNode(this.root);
  }

  // 返回树中的最大节点
  max() {
    return maxNode(this.root);
  }

  // 从树中移除一个节点
  remove(key) {
    this.root = removeNode(this.root, key)
  }
}

let insertNode = function (node, newNode) {
  if (newNode.element < node.element) {
    if (node.prev === null) node.prev = newNode;
    else insertNode(node.prev, newNode);
  }
  else {
    if (node.next === null) node.next = newNode;
    else insertNode(node.next, newNode);
  }
};

// 前序遍历
let preOrderTraverseNode = (node, callback) => {
  if (!!node) {
    callback(node.element);
    preOrderTraverseNode(node.prev, callback);
    preOrderTraverseNode(node.next, callback);
  }
};

// 中序遍历
let inOrderTraverseNode = (node, callback) => {
  if (!!node) {
    inOrderTraverseNode(node.prev, callback);
    callback(node.element);
    inOrderTraverseNode(node.next, callback);
  }
};

// 后续遍历
let postOrderTraverseNode = (node, callback) => {
  if (!!node) {
    postOrderTraverseNode(node.prev, callback);
    postOrderTraverseNode(node.next, callback);
    callback(node.element);
  }
};

let searchNode = function (key, node) {
  if (node !== null) {
    if (key > node.element) return searchNode(key, node.next)
    else if (key < node.element) return searchNode(key, node.prev)
    else return node
  }
}

let minNode = function (node) {
  if (node === null) return null;

  while (node && node.prev !== null) {
    node = node.prev;
  }
  return node;
};

let maxNode = function (node) {
  if (node === null) return null;

  while (node && node.next !== null) {
    node = node.next;
  }
  return node;
};

let removeNode = function (node, key) {
  if (node === null) return null;

  if (key < node.element) {
    node.prev = removeNode(node.prev, key);
    return node;
  }
  else if (key > node.element) {
    node.next = removeNode(node.next, key);
    return node;
  }
  else {
    // 第一种情况：一个叶子节点（没有子节点）
    if (node.prev === null && node.next === null) {
      node = null;
      return node;
    }
    // 第二种情况：只包含一个子节点
    if (node.prev === null) {
      node = node.next;
      return node;
    }
    else if (node.next === null) {
      node = node.prev;
      return node;
    }

    // 第三种情况：有两个子节点
    let aux = minNode(node.next);
    node.element = aux.element;
    node.next = removeNode(node.next, aux.element);
    return node;
  }
};

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(13);
tree.insert(20);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);

tree.preOrderTraverse((value) => console.log(value));
// output: 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
tree.inOrderTraverse((value) => console.log(value));
// output: 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.postOrderTraverse((value) => console.log(value));
// output: 3 6 5 8 9 10 7 12 14 13 18 20 25 15 11

tree.search(8) // 返回node节点

tree.min().element // 3
tree.max().element // 25

tree.remove(11) // 根结点为12

tree.getLength()

// 使用BFS计算树中给定级别的节点数
// 计算所有的节点数
// 计算树的层级
