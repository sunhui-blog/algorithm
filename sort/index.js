const data = {
  "comments": "排序",
  "datas": [
    {
      "name": "lilei",
      "gender": 0,
      "score": 100
    }, {
      "name": "hanmeimei",
      "gender": 1,
      "score": 95
    }, {
      "name": "xiaohong",
      "gender": 1,
      "score": 92
    }, {
      "name": "zhaoru",
      "gender": 1,
      "score": 94
    }, {
      "name": "liming",
      "gender": 0,
      "score": 70
    }
  ]
}

let result = data.datas.sort((a,  b) => {
  console.log(b.gender !== a.gender)
  if(b.gender === 0) {
    return -1
  }

  if(b.gender === 1) {
    return 1
  }

  return 0
})

result.sort((a, b) => {
  if (a.gender === b.gender) {
    return b.score - a.score
  }
})

console.log(result)

let result = data.datas.sort((a, b) => {
  if (b.gender === 0) {
    return -1
  }
  
  if (b.gender === a.gender) {
    return a.score - b.score
  }

})

console.log(result)
