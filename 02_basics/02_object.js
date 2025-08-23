//singelton 
//const tinder=new Object() // declaring object through object function
//const tinder={}//another method to declare singelton object

tinder.userID="1233"
tinder.name="anoita"
//console.log(tinder);

const details={
   name :"anita",
   fullname:{
    userfullname:{
        firstname:"anita",
        lastname:"kumari"
    }

   }
}
//console.log(details.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    1:"p",
    2:"q"
}
//const sum=object.assign({},obj1,obj2);
//{}=works as target in assigning wheras other object works as source which will add 
const obj3= {...obj1,...obj2} // best method for add in single object
//console.log(obj3);

//[]array
//{} object declaration



