/**
 * @function
 * @param {*} node
 */
function Node(node) {
  this._label = node._label || ''
  this._key = node._key || ''
  this._expand = node._expand || false
  this._childList = node.children || []

  this.init()
}

Node.prototype.init = function () {
  this._hasChild = this.hasChildNodes()

  this._node = this.createNode()

  // this._bindEvent()
}

Node.prototype.createNode = function () {
  var _nodeElement = document.createElement('li')
  _nodeElement.setAttribute('id', this._key) 

  var _nodeLable = document.createElement('label')
  _nodeLable.append(this._label)
  _nodeElement.append(_nodeLable)

  this._renderExpand(_nodeElement, _nodeLable)
  this._renderTool(_nodeElement)
  this._insertChild(_nodeElement)

  return _nodeElement
}

Node.prototype._renderExpand = function (node, _nodeLable) {
  if (this._hasChild) {
    var _nodeExpand = document.createElement('span')
    _nodeExpand.innerHTML = this._expand ? '^' : '>'

    this.expandNode = _nodeExpand

    node.insertBefore(_nodeExpand, _nodeLable)
    this.toggleExpand(_nodeExpand)
  }
}

Node.prototype._renderTool = function (node) {
  var _nodeTool = document.createElement('div')
  _nodeTool.className = 'dib fr'

  var _nodeAdd = document.createElement('span')
  _nodeAdd.append('+')
  // this._bindEvent('addNode', _nodeAdd)
  this.addNode(_nodeAdd)

  var _nodeDelete = document.createElement('span')
  _nodeDelete.append('-')
  this.removeNode(_nodeDelete)

  _nodeTool.append(_nodeAdd)
  _nodeTool.append(_nodeDelete)

  node.append(_nodeTool)
}

Node.prototype._insertChild = function (node) {
  if (this._hasChild) {
    var _parentNode = document.createElement('ul')

    this._childList.forEach(item => {
      var _child = new Node(item)
      var _childNode = _child.createNode()

      _parentNode.append(_childNode)
    })
    node.append(_parentNode)
  }
}

Node.prototype.toggleExpand = function (element) {
  element.onclick = (e) => {
    e.stopPropagation()
    this._expand = !this._expand
    element.innerHTML = this._expand ? '^' : '>'

    let child = element.parentNode.getElementsByTagName('ul')

    for (var i = 0; i < child.length; i++) {
      if (child[i].className === 'hide') {
        child[i].className = 'show'
      } else {
        child[i].className = 'hide'
      }
    }
  }
}

Node.prototype.addNode = function (element) {
  element.addEventListener('click', () => {
    var node = new Node({
      _label: 'test',
      _key: 444
    })

    element.parentNode.parentNode.append(node._node)
  }, false)
}

Node.prototype.removeNode = function (element) {
  element.addEventListener('click', () => {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
  }, false)
}

// Node.prototype._bindEvent = function (eventType, element) {
//   this[eventType](element)
// }

Node.prototype.hasChildNodes = function () {
  return this._childList && !!this._childList.length
}

Node.prototype.getRootNode = function () {
  return this._node
}

Node.prototype.destory = function () {
  this.node = null
}
