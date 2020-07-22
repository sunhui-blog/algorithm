function Node(node, rootId) {
  this._label = node._label || ''
  this._key = node._key || ''
  this._childList = node.children || []
  this._root = null
  this._expand = node._expand || false

  if (rootId) {
    this._root = document.getElementById(rootId)

    this._node = this.createNode()
    this._root.append(this._node)
  }
}

Node.prototype.createNode = function () {
  var _parentNode = document.createElement('ul')
  var _childNode = document.createElement('li')
  _childNode.setAttribute('id', this._key)

  if (this._childList.length) {
    var _nodeIcon = document.createElement('span')
    _nodeIcon.append('^')
    _childNode.append(_nodeIcon)
  }

  var _nodeLable = document.createElement('label')
  _nodeLable.append(this._label)
  _childNode.append(_nodeLable)

  _parentNode.append(_childNode)

  this.insertChild(_parentNode)

  return _parentNode
}

Node.prototype.insertChild = function (node) {
  this._childList.length && this._childList.forEach(item => {
    var _child = new Node(item)
    var _childNode = _child.createNode()

    node.append(_childNode)
  })
}

Node.prototype.hasChildNodes = function () {
  return !!this._childList.length
}

Node.prototype.getRootNode = function () {
  return this._root
}