// Data type 

// Primitive data type 

// Boolean
// String
// Number
// Undefined
// Null 
// Symbol // ES2015 

// Ctrl + /

var a; // Undefined 
var b = null;

var name = "abc";
var name1 = 'abc';

var a = 10;
var a = 50;

console.log(a);

/* This is a
multi-line comment */

ab = 10;

var myVar;
myVar = 5;
var myNum;
myNum = myVar;



var a;
var b;
var c;

a = a + 1; // NaN
b = b + 5;
c = c + " String!";

console.log(a, b, c)

var a1 = 50;
var b1 = 60;
var c1 = a1 + b1;


var a2 = 50;
var b2 = "60";
var c2 = a2 + b2;

var a2 = "60";
var b2 = 50;
var c2 = a2 + b2;


var a2 = 50;
var b2 = "60";
var c2 = a2 - b2; // 


var a2 = 50;
var b2 = "60";
var c3 = (100 + a2) + b2;

// let str = "Hello Amit. How are you. How's your day. Javascript is a programming language";

let name = 'Amit';

// let str = "Hello " + name + ". How are you. How's your day. Javascript is a programming language";

// let str = "Hello " + name + ". How are you. How's your day. \"Javascript\" is a programming language";

// let str = "Hello " + name + ". How are you. How's your day. 'Javascript'" +
//     "is a programming language";

let str = `Hello ${name}. How are you. How's your day.
" Javascript" is a 'programming'
 language`

// Console.Writeline($"Hello {name}. how are you?")

str.length;


const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"


const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

// endsWith

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false

// startsWith()

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false


const sentence1 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

sentence1.includes(word);// true or false 

// ? :
console.log(`The word "${word}" ${sentence1.includes(word) ? 'is' : 'is not'} in the sentence`);

sentence1.indexOf(word); // index value // -1 not found 



const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"


console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);


const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));


const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph2.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex1 = /Dog/ig;
console.log(p.replace(regex1, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"


// global flag required when calling replaceAll with regex
const regex2 = /Dog/ig;
console.log(p.replaceAll(regex2, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"


const paragraph3 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex3 = /[^\w\s]/g;

console.log(paragraph3.search(regex3));
// expected output: 43



const str3 = 'Mozilla';

console.log(str3.substring(1, 3));
// expected output: "oz"


const sentence5 = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence5.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."



const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

var a = 5;

b = 5;