//array
//const my_array=[2,4,5,8]
//console.log(my_array)
//console.log(my_array[3])

//methods
//console.log(my_array.length)
// my_array.push(9)
// my_array.push(33)
// my_array.pop()

//my_array.unshift(7) //insert the element at the starting of the array

//my_array.shift()Removes the first element fr


//console.log(my_array.includes(6))//checks whather the element is conatined or not

const my_array=[2,4,5,8]
//console.log(my_array.indexOf(5))

//const newarray=my_array.join()  //joins the previous array into new array
// console.log(my_array)
// console.log(typeof(newarray)) //it join new array as string

// console.log("A",my_array);
// const myn1=my_array.slice(1,3) // it includes 1-n-1 values
// console.log(myn1)

// console.log("B",my_array)
// const myn2=my_array.splice(1,3) // it includes 1- n values
// console.log("c",my_array)//only remaing elements after splicing will be shown ,which are not part of splice.
// console.log(myn2)

const marvel_heroes=["ani","bulli","champak"]
const dc_heroes=["bhari","ashi","simon"]

//marvel_heroes.push(dc_heroes)  // it simply add the new array into 
//existing array  as array in array

// console.log(marvel_heroes)
// const b=marvel_heroes.concat(dc_heroes) //concat into array as single element
// console.log(b);
// console.log(b[3])

// const new_heroes=[...marvel_heroes,...dc_heroes] // (Spread opeartor)better way then concat ,to add two arrays
// console.log(new_heroes)

const another_aaray=[1,2,3,4,[4,5,6],7,[6,7[8,9]]]

// const real_array=another_aaray.flat(Infinity) // flat() converts the array inside array into a single array 
// console.log(real_array)

console.log(Array.isArray("hello"))  // checking whwather the string "hello" is in the array or not
console.log(Array.from("hello"))  // from() converts the string to array

console.log(Array.from({name:"hello"})) //it is key value pair checks which always return empty array .
 
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))