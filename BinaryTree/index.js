
/**
ADT  树（tree）

Data
    树是由一个根结点和若干棵子树构成。树中结点具有相同数据类型及层次关系。
Operation
    InitTree(*T): 构造空树T
    DestroyTree(*T): 销毁树T
    CreateTree(*T,definition): 按definition中给出树的定义来构造树
    ClearTree(*T): 若树T存在，则将树T情空为空树
    TreeEmpty(T): 若T为空树，返回true，否则返回false
    TreeDepth(T): 返回T的深度
    Root(T): 返回T的根结点
    Value(T,cur_e): cur_e是树T中的一个结点，返回此结点的值
    Assign(T,cur_e,value): 给树T的结点cur_e赋值为value
    Parent(T,cur_e): 若cur_e是树T的非根结点，则返回它的双亲，否则返回空
    LeftChild(T,cur_e): 若cur_e是树T的非叶结点，则返回它的最左孩子，否则返回空
    RightSibling(T,cur_e): 若cur_e有右兄弟，则返回它的右兄弟，否则返回空
    InsertChild(*T,*p,i,c): 其中p指向树T的某个结点，i为所指结点p的度上加1，非空树c与T不相交，操作结果为插入c为树T中p指结点的第i棵子树
    DeleteChild(*T,*p,i): 其中p指向树T的某个结点，i为所指结点p的度，操作结果为删除T中p所指结点的第i棵子树
endADT
*/

class Tree {
  constructor() {
    this.list = {}
    this.node = {
      index: -1,
      data: '',
      parent: -1,
      firstChild: -1,
      rightsib: -1
    }
  }

  // 构造空树T
  InitTree () {
    this.list = {}
  }

  // 销毁树T
  DestroyTree () {
    this.list = null
  }

  // 按definition中给出树的定义来构造树
  CreateTree (definition) {

  }

  // 若树T存在，则将树T情空为空树
  ClearTree () {
    // this.list && (this.list = [])
  }

  // 若T为空树，返回true，否则返回false
  TreeEmpty () {
    // return !!this.list.length
  }

  // 返回T的深度
  TreeDepth () {

  }

  // 返回T的根结点
  Root () {
    this.list.forEach((item, index) => {
      return item.index === 0 ? item : {}
    })
  }

  // cur_e是树T中的一个结点，返回此结点的值
  Value (cur_e) {
    this.list.forEach((item, index) => {
      return item.index === cur_e ? item : {}
    })
  }

  // 给树T的结点cur_e赋值为value
  Assign (cur_e, value) {
    this.list = this.list.map((item, index) => {
      if (item.index === cur_e) {
        item.data = value
      }

      return item
    })
  }

  // 若cur_e是树T的非根结点，则返回它的双亲，否则返回空
  Parent (cur_e) {
    this.list.forEach((item, index) => {
      if (item.index === cur_e && item.index !== 0) {
        return item.parent
      }
    })
  }

  // 若cur_e是树T的非叶结点，则返回它的最左孩子，否则返回空
  LeftChild (cur_e) {
    this.list.forEach((item, index) => {
      if (item.index === cur_e && item.firstChild !== -1) {
        return item.firstChild || null
      }
    })
  }

  // 若cur_e有右兄弟，则返回它的右兄弟，否则返回空
  RightSibling (cur_e) {
    this.list.forEach((item, index) => {
      if (item === cur_e && item.rightsib !== -1) {
        return item.rightsib || null
      }
    })
  }

  // 其中p指向树T的某个结点，i为所指结点p的度上加1，非空树c与T不相交，操作结果为插入c为树T中p指结点的第i棵子树
  InsertChild (p, i, c) {
    let item = {}
    let data = this.list
    let selected = {}
    let children = []
    let newChild = []

    while (data.length) {
      item = data.shift()

      if (p === item.index) {
        selected = item

        children.push(item.index)
      }
    }

    if () {

    }
  }

  function (node, newNode) {
    if (newNode.element < node.element) {
        if (node.prev === null) node.prev = newNode;
        else insertNode(node.prev, newNode);
    }
    else {
        if (node.next === null) node.next = newNode;
        else insertNode(node.next, newNode);
    }
};

  // 其中p指向树T的某个结点，i为所指结点p的度，操作结果为删除T中p所指结点的第i棵子树
  DeleteChild (p, i) {

  }
}





