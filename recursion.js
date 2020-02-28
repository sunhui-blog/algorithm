// 递归
function factorial(n) {
  if (n === 1) return n
  return n*factorial(n-1)
}

factorial(4) // 24

function add (i) {
  if(i === 0){
    return 0
  }
  return add(i-1) + i
}

add(5) // 15

// 尾递归是指，在函数返回的时候，调用自身本身，并且，return 语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。
function factorial(n, total) {
  if (n === 1) return total
  return factorial(n-1, n*total) 
}

factorial(4, 1) // 24


function add (i, total) {
  if (i === 0) {
    return total
  }

  return add(i-1, i + total)
}

add(5, 0) // 15


