/**
 * @mark 线性表(List)
 * 
 * 定义：零个或多个数据元素的有限序列
 * 
 * 线性表元素的个数n(n≥0)定义为线性表的长度，当n=0时，称为空表。
 * 
 * 特点：有限  相同类型的数据集合 数据元素间关系为一对一(有且仅有一个直接前驱元素/直接后继元素-➗最后一个元素外)
 * 
 * 过程：创建 初始化 查找 获取长度 插入 删除
 * 
 */

 /**
  * 线性表的抽象数据类型定义
  * 
  * ADT 线性表(List)
  * 
  */

  /**
   * @todo 对象/数组 两种方式实现
   */
  class lineList {
    constructor () {
      this.list = {}
    }

    // 建立一个空的线性表
    initList () {

    }

    // 线性表为空返回true，否则返回false
    listEmpty () {

    }

    // 将线性表清空
    clear () {

    }

    // 将线性表中第i个位置元素值返回给e
    getElem (i) {

    }

    // 查找与e相等的元素，成功返回序号，失败返回0
    locateElem (e) {

    }

    // 第i个位置插入新元素e
    listInsert(i, e) {

    }

    // 删除第i个位置元素，并用e返回其值
    listDelete(i, e) {

    }

    // 返回元素个数
    listLength() {

    }
  }

  /**
   * @mark 对象实现
   * 问题：listInsert 对象插入number会自动转化为字符串/兼容掉了
   * 数组实现类似做各种数组操作 不单独实现了
   */
  class lineList {
    constructor () {
      this.list = {}
    }

    // 建立一个空的线性表
    initList () {
      this.list = {}
    }

    // 线性表为空返回true，否则返回false
    listEmpty () {
      return this.listLength() === 0 ? true : false
    }

    // 将线性表清空
    clear () {
      this.list = {}
    }

    // 将线性表中第i个位置元素值返回给e
    getElem (i) {
      let e = null

      Object.keys(this.list).map(key => {
        key = typeof i === 'number' ? Number(key) : key
        if (key === i) {
          e = this.list[i]
        }
      })

      return e
    }

    // 查找与e相等的元素，成功返回序号，失败返回0
    locateElem (e) {
      let indexList = []

      Object.keys(this.list).map(key => {
        if (this.list[key] === e) {
          indexList.push(key)
        }
      })

      return indexList || indexList.length
    }

    // 第i个位置插入新元素e
    listInsert(i, e) {
      this.list[i] = e
    }

    // 删除第i个位置元素，并用e返回其值
    listDelete(i) {
      let e = this.list[String(i)] // String 兼容 null undefined
      delete this.list[String(i)]
      return e
    }

    // 返回元素个数
    listLength() {
      return Object.keys(this.list).length
    }
  }

  let classmates = new lineList()
  classmates.listInsert(1, 'liming')
  classmates.listInsert(2, 'hanmeimei')
  classmates.listInsert(4, 'hanmeimei')

  // list: {1: "liming", 2: "hanmeimei", 4: "hanmeimei"}
  classmates.getElem(2) // "hanmeimei"
  classmates.listLength() // 3
  classmates.listEmpty() // false
  classmates.locateElem('hanmeimei') // ["2", "4"]
  classmates.listDelete(2) // "hanmeimei" classmates: list: {1: "liming", 4: "hanmeimei"}

  classmates.clear() // classmates: list: {}

