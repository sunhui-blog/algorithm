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

  console.log(nodeElement)

  return nodeElement
}

Node.prototype.render = function (node, nodeLable) {
  if (this.hasChild) {
    var nodeExpand = document.createElement('span')
    nodeExpand.innerHTML = this.expand ? '^' : '>'

    this.expandNode = nodeExpand

    node.insertBefore(nodeExpand, nodeLable)
    this.toggleExpand(nodeExpand)
  }
}

Node.prototype.renderTool = function (node) {
  var nodeTool = document.createElement('div')
  nodeTool.className = 'dib fr'

  var nodeAdd = document.createElement('span')
  nodeAdd.append('+')
  this.addChildNode(nodeAdd)

  var nodeDelete = document.createElement('span')
  nodeDelete.append('-')
  this.removeChildNode(nodeDelete)

  nodeTool.append(nodeAdd)
  nodeTool.append(nodeDelete)

  node.append(nodeTool)
}

Node.prototype.insertChild = function (node) {
  if (this.hasChild) {
    var parentNode = document.createElement('ul')

    this.childList.forEach(item => {
      var child = new Node(item)
      var childNode = child.createNode()

      parentNode.append(childNode)
    })
    node.append(parentNode)
  }
}

Node.prototype.toggleExpand = function (element) {
  element.onclick = (e) => {
    e.stopPropagation()
    this.expand = !this.expand
    element.innerHTML = this.expand ? '^' : '>'

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
      label: 'test',
      key: 444
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
  return this.childList && !!this.childList.length
}

Node.prototype.getRootNode = function () {
  return this.node
}

Node.prototype.destory = function () {
  this.node = null
}
