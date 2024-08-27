let score  =333
console.log(typeof score); // number

let score1  ="333abc"
console.log(typeof score1); // String 

// type conversion

let score2 = Number(score1)
console.log(typeof score2); // number
console.log(score2);  // NaN  it is bad practise it will  not converted

let score3 = null
  score2 = Number(score3)
console.log(score2); // number   output =0;

let score4 = true
score2 = Number(score4)
console.log(score2); // output = 1  if false then 0

let score5 ="djfgng"
score2 = Number(score5)
console.log(score2); // output = NaN


// Number to  string 

let num = 33;
let string = String(num)
console.log(string);  //33
console.log(typeof string); // string


 



