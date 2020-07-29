/**
 * @function
 * @param {*} node
 * 
 * @todo 数据关系的梳理/维护
 */
function Node(datas) {
  let node = datas || {}
  this.nodes = {
    label: node.label,
    key: node.key
  }
  this.label = node.label || ''
  this.key = node.key || ''
  this.expand = node.expand || false
  this.childList = node.children || []
  this.hasChild = this.hasChildNodes()

  this.parentNodes = node.parentNodes || null

  this.hasParent = this.hasParentNodes()

  this.node = null

  this.render()
}

Node.prototype.render = function () {
  var nodeElement = document.createElement('li')
  nodeElement.setAttribute('id', this.key)

  var nodeLable = document.createElement('label')
  nodeLable.append(this.label)
  nodeElement.append(nodeLable)

  this.renderTool(nodeElement)

  if (this.hasChild) {
    var nodeExpand = document.createElement('span')
    nodeExpand.innerHTML = this.expand ? '^' : '>'

    nodeElement.insertBefore(nodeExpand, nodeLable)
    this.toggleExpand(nodeExpand)

    var parentNode = document.createElement('ul')

    this.childList.forEach(item => {
      item.parentNodes = this.nodes
      var child = new Node(item)

      parentNode.append(child.node)
    })

    nodeElement.append(parentNode)
  }

  this.node = nodeElement
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

// @todo prev / next 节点的确认


Node.prototype.addChildNode = function (element) {
  // @todo 数据增加
  element.addEventListener('click', () => {
    var nodeName = window.prompt('节点名称是什么？', '');

    var newNode = new Node({
      label: nodeName,
      key: 444
    })

    element.parentNode.parentNode.append(newNode.node)
  }, false)
}

Node.prototype.removeChildNode = function (element) {
  // @todo 数据删除
  element.addEventListener('click', () => {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
  }, false)
}

Node.prototype.hasChildNodes = function () {
  return this.childList && !!this.childList.length
}

Node.prototype.hasParentNodes = function () {
  return this.parentNodes || null
}

Node.prototype.getRootNode = function () {
  return this.node
}

Node.prototype.destory = function () {
  this.node = null
}


function Tree(id, datas) {
  this.id = id

  Node.call(this, datas)
}

Tree.prototype = new Node()

Tree.prototype.constructor = Tree

Tree.prototype.init = function () {
  var targetNode = document.getElementById(this.id)
  var rootNode = document.createElement('ul')

  rootNode.append(this.node)
  targetNode.append(rootNode)
}
