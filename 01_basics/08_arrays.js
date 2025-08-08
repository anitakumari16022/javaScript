//array
//const my_array=[2,4,5,8]
//console.log(my_array)
//console.log(my_array[3])

//methods
//console.log(my_array.length)
// my_array.push(9)
// my_array.push(33)
// my_array.pop()

//my_array.unshift(7)//insert the element at the starting of the array

//my_array.shift()Removes the first element fr


//console.log(my_array.includes(6))//checks whather the element is conatined or not

const my_array=[2,4,5,8]
//console.log(my_array.indexOf(5))
//const newarray=my_array.join()//joins the previous array into new array
// console.log(my_array)
// console.log(typeof(newarray)) //it join new array as string

console.log("A",my_array);
const myn1=my_array.slice(1,3) // it includes 1-n-1 values
console.log(myn1)

console.log("B",my_array)
const myn2=my_array.splice(1,3) // it includes 1- n values
console.log("c",my_array)//only remaing elements after splicing will be shown ,which are not part of splice.
console.log(myn2)
