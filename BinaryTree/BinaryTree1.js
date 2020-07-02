// 二叉排序树

// 节点
class Node {
  constructor(key) {
    this.element = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.dataMap = null;
  }

  // 向树中插入一个节点
  insert (key) {
    let newNode = new Node(key);
    console.log(newNode)

    !this.dataMap ? this.dataMap = newNode : this.insertNode(this.dataMap, newNode)
  }

  // 返回树中的最小节点
  min () {
    let node = this.dataMap
  
    while (node && !!node.left) {
      node = node.left;
    }
    return node;
  }

  // 返回树中的最大节点
  max() {
    let node = this.dataMap
  
    while (node && !!node.right) {
      node = node.right;
    }
    return node;
  }

  // 在树中查找一个节点
  search(key) {
    let node = this.dataMap

    if (node && key > node.element) {
      this.searchNode(key, node.right)
    } else if (node && key < node.element) {
      this.searchNode(key, node.left)
    }

    return node
  }

  insertNode (node, newNode) {
    if (newNode.element < node.element) {
      !node.left ? node.left = newNode : this.insertNode(node.left, newNode)
    } else {
      !node.right ? node.right = newNode : this.insertNode(node.right, newNode)
    }
  };

  getNode () {
    return this.dataMap
  }

  // 前序遍历
  preOrderTraverseNode (node, callback) {
    if (!!node) {
      callback(node.element);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 中序遍历
  inOrderTraverseNode (node, callback) {
    if (!!node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.element);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 后续遍历
  postOrderTraverseNode (node, callback) {
    if (!!node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.element);
    }
  };

  // 从树中移除一个节点
  remove (key) {
    this.dataMap = this.removeNode(this.dataMap, key)
  }
  
  removeNode (node, key) {
    if (node && key < node.element) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (node && key > node.element) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 第一种情况：一个叶子节点（没有子节点）
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      // 第二种情况：只包含一个子节点
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      // 第三种情况：有两个子节点
      let aux = this.minNode(node.right);
      node.element = aux.element;
      node.right = this.removeNode(node.right, aux.element);
      return node;
    }
  };
}

let tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

let dataMap = tree.getNode()
console.log(dataMap)

tree.preOrderTraverseNode(dataMap, (value) => console.log(value));
// output: 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
tree.inOrderTraverseNode(dataMap, (value) => console.log(value));
// output: 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.postOrderTraverseNode(dataMap, (value) => console.log(value));

let tree = {
  element: 1,
  left: {
    element: 2,
    left: {
      element: 4,
      left: null,
      right: {
        element: 8,
        left: null,
        right: null,
      }
    },
    right: {
      element: 5,
      left: null,
      right: null,
    }
  },
  right: {
    element: 3,
    left: {
      element: 6,
      left: {
        element: 9,
        left: null,
        right: null,
      },
      right: {
        element: 10,
        left: null,
        right: null,
      }
    },
    right: {
      element: 7,
      left: null,
      right: null
    }
  }
}


let result = [];

let stack = [tree]; // 先将要遍历的树压入栈

let count = 0; // 用来记录执行到第几层

let wideTraversal = () => {
  let node = stack[count];

  if(node) {
    result.push(node.element);

    if(node.left) {
      stack.push(node.left)
    }
    if(node.right) {
      stack.push(node.right)
    }
    count++;
    wideTraversal();
  }
}

wideTraversal();
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]






function wideTraversal (node) {
  if (!!node) {
    console.log(node.element)

    if (node.left) {
      console.log(node.left.element)
    }

    if (node.right) {
      console.log(node.right.element)
    }
    wideTraversal(node.left)
    wideTraversal(node.right)
  }
}

wideTraversal(root)




// if (node.left.left) {
//   console.log(node.left.left.element)
// }

// if (node.left.right) {
//   console.log(node.left.right.element)
// }

// if (node.right.left) {
//   console.log(node.right.left.element)
// }

// if (node.right.right) {
//   console.log(node.right.right.element)
// }








function wideTraversal(node) {
  let nodes = []

  if (!!node) {
    let queue = []
      while (queue.length) {
        let item = queue.shift();

        nodes.push(item.element)

        if (!node.left) {
          nodes.push(node.left.element)
        }

        if (!node.right) {
          nodes.push(node.right.element)
        }
      }
    return nodes
  }
}

wideTraversal(root)

// preOrderTraverseNoRecursion (cb, node) {
//   node = node || this.root
//   let stack = new Stack()
//   stack.push(node)
//   while (!stack.isEmpty()) {
//     node = stack.pop()
//     cb && cb(node.key)
//     // 右节点先入栈
//     node.right && stack.push(node.right)
//     node.left && stack.push(node.left)
//   }
// }

function DLR(root) {
  var que=[],
      res=[];
  if(!!root){
    arr.push(root);
  }

  while(arr.length){
      var temp=arr.pop();

      res.push(temp.val);

      if(temp.right!=null){
          arr.push(temp.right);
      }
      if(temp.left!=null){
          arr.push(temp.left);
      }
  }
  return res;
}

// 广度遍历, 创建一个执行队列, 当队列为空的时候则结束
function getName2(data) {
  let result = [];
  let queue = data;
  while (queue.length > 0) {
    queue.forEach(child => {
      queue.shift();
      result.push(child.name);
      child.children && (queue.push(child.children));
    });
  }
  return resu
}

function bfs (node) {
  let queue = node,
      list = []
  while (queue.length) {
    queue.forEach(item => {
      queue.shift()
      list.push(item)
    })
  }
}


function wideTraversal(node) {  
  var nodes = [];

  if (!node) {  
    var queue = [];  
    queue.unshift(node);

    while (queue.length) {  
      var item = queue.shift();

      nodes.push(item);

      var children = item.children;
 
      for (var i = 0; i < children.length; i++)  
         queue.push(children[i]);  
    }
  }  
  return nodes;  
}