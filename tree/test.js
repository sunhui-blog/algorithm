Node.prototype._bindEvent = function (eventType, element) {
  switch(eventType) {
    case 'addNode':
      this.addNode(element)
      break
    case 'removeNode':
      this.removeNode(element)
      break
    case 'toggleExpand':
      this.toggleExpand(element)
      break
  }
}