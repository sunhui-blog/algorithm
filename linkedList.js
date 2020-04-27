
/**
 * @mark 单链表
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class linkedList {
  constructor () {
    this.header = new Node('header')
  }

  find (element) {
    let currNode = this.header

    while (currNode.element !== element) {
      currNode = currNode.next
    }

    return currNode
  }

  insert(newElement, element) {
    let newNode = new Node(newElement)

    let currNode = this.find(element)

    newNode.next = currNode.next

    currNode.next = newNode
  }
}

let singleLink = new linkedList()
singleLink.insert('1', 'header')
singleLink.insert('2', 'header') // header -> 2 -> 1