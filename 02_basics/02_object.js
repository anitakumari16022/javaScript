//singelton 
//const tinder=new Object() // declaring object through object function
const tinder={}//another method to declare singelton object

tinder.userID="1233"
tinder.name="anoita"
console.log(tinder);

const details={
   name :"anita",
   fullname:{
    userfullname:{
        firstname:"anita",
        lastname:"kumari"
    }

   }
}
console.log(details.fullname.userfullname.firstname);
