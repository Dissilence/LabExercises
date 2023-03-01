const today = new Date()
const christmas = new Date('2023-12-25')
const tomorrow = new Date(today.getFullYear(), today.getMonth()+1, 1)

console.log(today)
console.log(christmas)
console.log(tomorrow)

console.log(today.toLocaleString())
console.log(christmas.toLocaleString())

const easterSunday = new Date('')