const name = "sanika"
const age = 21

// console.log(name + age + "education");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("sanika-vilas-vidhate")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString =gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, 8)
console.log(anotherString);

const newStringOne = "     sanika    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanika.com/sanika%20vidhate"

console.log(url.replace('%20', '-'));
console.log(url.includes('nika'));

console.log(gameName.split('-'));

