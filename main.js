const arr = []
const obj = {}

function fillArr() {
  for (let i = 0; i < 5000; i++) {
    arr.push({
      id: i,
      name: "James",
      value: Math.floor(Math.random() * 1000 + 1)
    })
  }

  return arr
}

function fillObj() {
  for (let i = 0; i < 5000; i++) {
    obj[i] = {
      id: i,
      name: "James",
      value: Math.floor(Math.random() * 1000 + 1)
    }
  }

  return obj
}

function findArrItems(num) {
  let res = []

  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * 5000)

    res.push(arr.find((item) => item.id === randomNum))
  }

  return res
}

function findObjItems(num) {
  let res = {}

  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * 5000)

    res[randomNum] = obj[randomNum]
  }

  return res
}

function findArrItemsProto(num) {
  return Array.from({ length: num }).map(() => {
    let randomNum = Math.floor(Math.random() * 5000)

    return arr.find((item) => item.id === randomNum)
  })
}

function findObjItemsProto(num) {
  return Array.from({ length: num }).map(() => {
    let randomNum = Math.floor(Math.random() * 5000)

    return obj[randomNum]
  })
}

let fillArrStartTime = performance.now()
const arr2 = fillArr()
let fillArrEndTime = performance.now()

let fillObjStartTime = performance.now()
const obj2 = fillObj()
let fillObjEndTime = performance.now()

console.log(`fillArr() execution time is ${fillArrEndTime - fillArrStartTime}`)
console.log(`fillObj execution time is ${fillObjEndTime - fillObjStartTime}`)

console.log(arr2)
console.log(obj2)

let findArrItemsStartTime = performance.now()
const arrItems2 = findArrItems(1000)
let findArrItemsEndTime = performance.now()

let findObjItemsStartTime = performance.now()
const objItems2 = findObjItems(1000)
let findObjItemsEndTime = performance.now()

let findArrItemsProtoStartTime = performance.now()
const arrItemsProto2 = findArrItemsProto(1000)
let findArrItemsProtoEndTime = performance.now()

let findObjItemsProtoStartTime = performance.now()
const objItemsProto2 = findObjItemsProto(1000)
let findObjItemsProtoEndTime = performance.now()

console.log(
  `findArrItems() execution time is ${
    findArrItemsEndTime - findArrItemsStartTime
  }`
)
console.log(
  `findObjItems() execution time is ${
    findObjItemsEndTime - findObjItemsStartTime
  }`
)
console.log(
  `findArrItemsProto() execution time is ${
    findArrItemsProtoEndTime - findArrItemsProtoStartTime
  }`
)
console.log(
  `findObjItemsProto() execution time is ${
    findObjItemsProtoEndTime - findObjItemsProtoStartTime
  }`
)

console.log(arrItems2)
console.log(objItems2)
console.log(arrItemsProto2)
console.log(objItemsProto2)

const fillArrPrevTime = Number(localStorage.getItem("fillArrTime")) || 0
const fillObjPrevTime = Number(localStorage.getItem("fillObjTime")) || 0

const findArrItemsPrevTime =
  Number(localStorage.getItem("findArrItemsTime")) || 0
const findObjItemsPrevTime =
  Number(localStorage.getItem("findObjItemsTime")) || 0
const findArrItemsProtoPrevTime =
  Number(localStorage.getItem("findArrItemsProtoTime")) || 0
const findObjItemsProtoPrevTime =
  Number(localStorage.getItem("findObjItemsProtoTime")) || 0

const runs = Number(localStorage.getItem("runs")) || 0

localStorage.setItem(
  "fillArrTime",
  (fillArrPrevTime + (fillArrEndTime - fillArrStartTime)) / (runs + 1)
)
localStorage.setItem(
  "fillObjTime",
  (fillObjPrevTime + (fillObjEndTime - fillObjStartTime)) / (runs + 1)
)

localStorage.setItem(
  "findArrItemsTime",
  (findArrItemsPrevTime + (findArrItemsEndTime - findArrItemsStartTime)) /
    (runs + 1)
)
localStorage.setItem(
  "findObjItemsTime",
  (findObjItemsPrevTime + (findObjItemsEndTime - findObjItemsStartTime)) /
    (runs + 1)
)
localStorage.setItem(
  "findArrItemsProtoTime",
  (findArrItemsProtoPrevTime +
    (findArrItemsProtoEndTime - findArrItemsProtoStartTime)) /
    (runs + 1)
)
localStorage.setItem(
  "findObjItemsProtoTime",
  (findObjItemsProtoPrevTime +
    (findObjItemsProtoEndTime - findObjItemsProtoStartTime)) /
    (runs + 1)
)

localStorage.setItem("runs", runs + 1)

console.log(`Average fillArrTime is ${localStorage.getItem("fillArrTime")}`)
console.log(`Average fillObjTime is ${localStorage.getItem("fillObjTime")}`)

console.log(
  `Average findArrItemsTime is ${localStorage.getItem("findArrItemsTime")}`
)
console.log(
  `Average findObjItemsTime is ${localStorage.getItem("findObjItemsTime")}`
)
console.log(
  `Average findArrItemsProtoTime is ${localStorage.getItem(
    "findArrItemsProtoTime"
  )}`
)
console.log(
  `Average findObjItemsProtoTime is ${localStorage.getItem(
    "findObjItemsProtoTime"
  )}`
)
console.log(`Total runs: ${localStorage.getItem("runs")}`)
