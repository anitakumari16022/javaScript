let score= "34"
console.log(typeof score)
let score_in_number=Number(score)//Number class is converting the string into number
// for ex: if score is "24abc" : it will be considered a NaaN
console.log(typeof(score_in_number))

//there are classes like String ,Number,Boolean etc
//"33"=>33
//"33anc"=>NaaN
//  in boolean ""(empty string)=>false
// "anita"=>true

let  string= 33
console.log(typeof(string) )
let converstring=String(string)
console.log(typeof(converstring))