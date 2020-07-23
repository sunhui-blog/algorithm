document.write("<script type='text/javascript' src='./common/node.js'></script>");

function Tree(id, datas) {
  this.datas = datas
  this.id = id

  this.createElement()
}

Tree.prototype.createElement = function () {
  var targetNode = document.getElementById(this.id)
  var rootNode = document.createElement('ul')

  this.datas.forEach(item => {
    var element = new Node(item)

    rootNode.append(element.node)
  })

  targetNode.append(rootNode)
}
