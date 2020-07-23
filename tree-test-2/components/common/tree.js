document.write("<script type='text/javascript' src='./common/node.js'></script>");

function Tree(id, datas) {
  this._datas = datas
  this._id = id

  this.createElement()
}

Tree.prototype.createElement = function () {
  var targetNode = document.getElementById(this._id)
  var rootNode = document.createElement('ul')

  this._datas.forEach(item => {
    var node = new Node(item)

    rootNode.append(node._node)
  })

  targetNode.append(rootNode)
}
