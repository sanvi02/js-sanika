
/*
//Eg 1

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//Eg 2

let scor = null

console.log(typeof scor);
console.log(typeof(scor));

let valueInNumbe = Number(scor)
console.log(typeof valueInNumbe);
console.log(valueInNumbe);

//Eg 3

let sco = true //if sco is false then output will be shown as 0

console.log(typeof sco);
console.log(typeof(sco));

let valueInNumb = Number(sco)
console.log(typeof valueInNumb);
console.log(valueInNumb);

//Eg 4
let sc = null

console.log(typeof sc);
console.log(typeof(sc));

let valueInNum = Number(sc)
console.log(typeof valueInNum);
console.log(valueInNum);


//"33" = 33
//"33abc" = Nan but type is number
// true = 1 ; false = 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 = true
// 0 = false
// "sanika" = true
// "" = false



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/
/*******************************************OPERATIONS****************************************/


let value = 3
let negValue = -value
//console.log(negValue)

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

let str1 = "sanika"
let str2 = " vidhate"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+ 2 + 2); //value is consider as string when string is first
console.log( 1+ 2 + "2"); //value is consider as num when first value is numerical

console.log(3 + 4 * 5 % 3); // this is complicated code instead of this use clear code used paranthesis

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
//prefix first value increment  postfix after usage value is increment