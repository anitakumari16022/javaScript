const score=100
console.log(score)

const svore= new Number(165)// decalaring value with fixed type
console.log(svore)

console.log(typeof(toString(svore)))

const othernumer=23.75906
console.log(othernumer.toPrecision(4))

const hundread=10000000
console.log(hundread.toLocaleString()) //convert the zeros into hundreads,thousands ,etc

console.log(hundread.MIN_VLUE)

//****************************************MATHS**************************/

// Math is dafault datatype in javascript
console.log(Math)
console.log(Math.abs(-3)) // absolute (abs) convert the neagative value into postive
console.log(Math.round(6.5)) // round of the value
console.log(Math.floor(4.5))
console.log(Math.max(5,7,2,9))
console.log(Math.min(6,8,1,3))
console.log(Math.random()) // it chooses the random  from 0 to 1value every time we click on it
console.log(Math.random()*10+1) //gives value then 0
console.log(Math.floor(Math.random()*10)+1) //gives floor value

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min)) // formula to find random value  given min and max  value given in the range 
//all thr abs,round,floor etc all are mathods of Math



