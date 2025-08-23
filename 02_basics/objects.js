//console.log("anita")
//singleton :making an object through constructor always become singleton.

//object literals
const mysymbol=Symbol("key1")//definig a symbol

const jsUser={
  name:"Anita",
  [mysymbol]:"key1",//acting as a key 
  age:22,
  email:"aedb@gmail.com"

} 
// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser[mysymbol]) //accessing symbol as object and printin it

//jsUser.email="csdjs@foll.com" //overwriting the code
//console.log(jsUser.email)

jsUser.greeting=function(){
  console.log("hello JS")
}
console.log(jsUser.greeting())// there is another function named as greeting ,which only return reference


jsUser.greetingtwo=function(){
  console.log(`welcome to js:${this.name}`)// to write
}

console.log(jsUser.greetingtwo())