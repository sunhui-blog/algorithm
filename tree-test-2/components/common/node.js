/**
 * @function
 * @param {*} node
 */
function Node(node) {
  this.label = node.label || ''
  this.key = node.key || ''
  this.expand = node.expand || false
  this.childList = node.children || []

  this.init()
}

Node.prototype.init = function () {
  this.hasChild = this.hasChildNodes()

  this.node = this.createNode()
}

Node.prototype.createNode = function () {
  var nodeElement = document.createElement('li')
  nodeElement.setAttribute('id', this.key) 

  var nodeLable = document.createElement('label')
  nodeLable.append(this.label)
  nodeElement.append(nodeLable)

  this.render(nodeElement, nodeLable)
  this.renderTool(nodeElement)
  this.insertChild(nodeElement)

  return nodeElement
}

Node.prototype.render = function (node, nodeLable) {
  if (this.hasChild) {
    var nodeExpand = document.createElement('span')
    nodeExpand.innerHTML = this.expand ? '^' : '>'

    this.expandNode = nodeExpand

    node.insertBefore(nodeExpand, nodeLable)
    this.expand(nodeExpand)
  }
}

Node.prototype.renderTool = function (node) {
  var nodeTool = document.createElement('div')
  nodeTool.className = 'dib fr'

  var _nodeAdd = document.createElement('span')
  _nodeAdd.append('+')
  this.addChildNode(_nodeAdd)

  var _nodeDelete = document.createElement('span')
  _nodeDelete.append('-')
  this.removeChildNode(_nodeDelete)

  _nodeTool.append(_nodeAdd)
  _nodeTool.append(_nodeDelete)

  node.append(_nodeTool)
}

Node.prototype.insertChild = function (node) {
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

Node.prototype.expand = function (element) {
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

Node.prototype.addChildNode = function (element) {
  element.addEventListener('click', () => {
    var node = new Node({
      _label: 'test',
      _key: 444
    })

    element.parentNode.parentNode.append(node._node)
  }, false)
}

Node.prototype.removeChildNode = function (element) {
  element.addEventListener('click', () => {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
  }, false)
}

Node.prototype.hasChildNodes = function () {
  return this._childList && !!this._childList.length
}

Node.prototype.getRootNode = function () {
  return this._node
}

Node.prototype.destory = function () {
  this.node = null
}
