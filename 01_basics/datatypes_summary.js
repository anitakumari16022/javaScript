//types of datatypes: 1 Primitive(call by value:only changes in value can be seen)
//                     2.Non -Primitive(call by reference )
// Primitive: String,Number,Boolean,null,undefined,Symbol,BigInt
// 2: Array,Ojects,Function

// js is dynamic bcoz we need not to define type of value fo ex:
//const a=10(we did'nt define wheather 10 is of what type or a can hold string and inetger value )

const heros=["hei",'njdcj',"at",'bhdbc']//array

let mydetails={

    name:"anita",
    age:23,// object store in value and pair manner
}
console.log(mydetails)

const myfunction =function hello(){
    console.log("heelo world")
}


console.log(myfunction)


 //return type of non-prmitive
  //Array=>object
  //Function=>function
  //object=>object

  //------------------------------------------------
  //stack(primitive)  ,heap(non-primitive)
//   let namw='anita'
//   let anothername=namw
//   anothername="kumari"
//   console.log(namw)
//   console.log(anothername)
// in stcak when we copy the value of datype into another we get a refrence or 
// copied value of the datatype;it means any change in the second value
//will not be reflected back to original datatype 

let value1={
    email:"hello@gmail",
    name:"asdf"
}
let value2=value1

value2.name="qwer"
console.log(value1)
console.log(value2)
// in heap we made changes in the second object but it isreflecting back into theb first object
//bcoz the object is taking the address(reference) not the copied value.
