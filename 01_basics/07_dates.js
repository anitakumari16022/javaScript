//dates//
let date= new Date()
// console.log(date.toDateString())
// console.log(date.toLocaleString())
// console.log(typeof(date))

//let mydate=new Date(2025,6,27)//declaring the dates by your own
// console.log(mydate.toDateString()) 

// let mydate=new  Date("2025-04-23")//decalre date,month,then year
// console.log(mydate.toLo5caleString())

let mytimestamp= Date.now()
// console.log(mytimestamp)
//console.log(Math.floor(Date.now()/1000))//for comparing 

let newdate=new Date()
// console.log(newdate.getDate())
// console.log(newdate.getFullYear())


//console.log(`${newdate.getDate()} it is todays date`)

newdate.toLocaleString('default',{
    weekday:"long"
})