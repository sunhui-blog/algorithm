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
  this.parentElement = null
  this.childElement = null

  this._hasChild = this.hasChildNodes()

  this._node = this.createNode()

  this._bindEvent()
}

Node.prototype.createNode = function () {
  var _nodeElement = document.createElement('li')
  _nodeElement.setAttribute('id', this._key) 

  var _nodeLable = document.createElement('label')
  _nodeLable.append(this._label)
  _nodeElement.append(_nodeLable)

  this._isExpand(_nodeElement, _nodeLable)
  this._renderTool(_nodeElement)
  this._insertChild(_nodeElement)

  return _nodeElement
}

Node.prototype._isExpand = function (node, _nodeLable) {
  if (this._hasChild) {
    var _nodeExpand = document.createElement('span')
    var _expandText = this._expand ? '^' : '>'

    _nodeExpand.setAttribute('expand', this._expand)
    _nodeExpand.append(_expandText)

    this.expandNode = _nodeExpand
    this._bindEvent

    node.insertBefore(_nodeExpand, _nodeLable)
  }
}

Node.prototype._renderTool = function (node) {
  var _nodeTool = document.createElement('div')
  _nodeTool.className = 'dib fr'

  var _nodeAdd = document.createElement('span')
  _nodeAdd.setAttribute('type', 'add')
  _nodeAdd.append('+')
  this._bindEvent('addNode', _nodeAdd)

  var _nodeDelete = document.createElement('span')
  _nodeDelete.setAttribute('type', 'remove')
  _nodeDelete.append('-')

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

    this.childElement = _parentNode
    node.append(_parentNode)
  }
}

Node.prototype._bindEvent = function (eventType, element) {
  element.onclick = (e) => {
    e.stopPropagation()
    this._expand = !this._expand

    if (this._expand) {
      
    }
  }

  // this.addNode.onclick = (e) => {

  // }

  // this.removeNode.onclick = (e) => {

  // }
}

Node.prototype.expandNodes = function () {
  this._expand = !this._expand

  var childNodes = this._node.childNodes

  for (var i = 0; i < childNodes.length; i++) {
    // console.log(childNodes[i].getAttribute('expand'))
  }

  // this._node.style.display = this._expand ? 'block' : 'none'
}

Node.prototype.addNode = function (element) {
  // element.parentNode.append('test')
}

Node.prototype.removeNode = function (element) {
  // element.parentNode.parentNode.removeChild(element.parentNode)
}

Node.prototype.hasChildNodes = function () {
  return this._childList && !!this._childList.length
}

Node.prototype.getRootNode = function () {
  return this._parentElement
}

Node.prototype.destory = function () {
  this.node = null
}

// return {
//   'expandNodes': function () {
//     element.onclick = (e) => {
//       e.stopPropagation()
//       this._expand = !this._expand

//       let child = ele.parentNode.getElementsByTagName('ul')
  
//       for (var i = 0; i < child.length; i++) {
//         if (child[i].style.display === 'none') {
//           child[i].style.display = 'block'
//         } else {
//           child[i].style.display = 'none'
//         }
//       }
//     }
//   }
// }