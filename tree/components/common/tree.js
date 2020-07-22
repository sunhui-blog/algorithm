document.write("<script type='text/javascript' src='./common/node.js'></script>");

function Tree(id, datas) {
  this._datas = datas
  this._id = id

  this.createElement()
}

Tree.prototype.createElement = function () {
  this._datas.forEach(item => {
    new Node(item, this._id)
  })
}
