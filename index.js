let stri = "hello";
// string.charAt(index) === str[index] - vozvr symbol za index
// more at gitHub bookmark
console.log(stri.toUpperCase());

const bool = true;
console.log(bool.toString());

console.log(Number.isInteger(6));
console.log(Number.isNaN("hgdfh")); // false
console.log(Number("hgdfh")); /// NaN
console.log(Number.isNaN(Number("hgdfh"))); // true

/* toFixed
const number =15.222222

number.toFixed()
// '15'

number.toFixed(3)
// '15.222'

typeof number.toFixed(3)
// 'string'


const num =15.5555

num.toFixed()
// '16'

*/
/*

const str1 = 'Test'
// undefined

const str2 = ' --- this is test'
// undefined

str1.concat(str2)
// 'Test --- this is test'

///////////////////////////////////////////

const textStr = '     text text text         '
//undefined

textStr.trim()
//'text text text'

textStr
//'     text text text         '

////////////////////////////////////////////

const str = 'hi hi hi'
//undefined

str.split(' ')
// (3) ['hi', 'hi', 'hi']0: "hi"1: "hi"2: "hi"length: 3[[Prototype]]: Array(0)

'sgagd*dshfgh*gyfds;*hftjr;tr*'.split('*')
// (5) ['sgagd', 'dshfgh', 'gyfds;', 'hftjr;tr', '']

const test = 'AAAAAAAAAAAAA'
//undefined

test.toLocaleLowerCase()
//'aaaaaaaaaaaaa'

'AAAAAAAAaaaaaaa'.toLocaleLowerCase()
//'aaaaaaaaaaaaaaa'

////////////////////////////////////////////

Array.from('flower')
//(6) ['f', 'l', 'o', 'w', 'e', 'r']

Array.from('flower').reverse()
//(6) ['r', 'e', 'w', 'o', 'l', 'f']

Array.from('flower').reverse().join('')
//'rewolf'

*/

let number = "09934352611";
undefined;
const arrayFromNumber = Array.from(number);
arrayFromNumber.unshift("+", "3", "8");
number = arrayFromNumber.join("");

let wordString = "table";
wordString = Array.from(wordString).reverse().join("");
