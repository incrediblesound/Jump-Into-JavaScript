// primitive values and in JavaScript are immutable
// immutable values behave differently from mutable ones
var x = 5;
var me = 'James';

x + 5;

me + '\'s';

console.log(me) //=> 'James'
console.log(x) //=> '5'

// when I add five to x and add ''s' to my name,
// JavaScript will not modify the values stored in
// the variables x and me. Instead, it returns a new
// value that represents the modification.

var x = 5;
var y = x + 5; // the expression (x + 5) does not affect x,
			   // it returns the result of adding five to the value of x

console.log(y) //=> 10

var me = 'James';
var mine = me+'\'s';

console.log(mine) //=> 'James's'

// when you assign a variable that contains an immutable value
// to another variable, that variable recieves a copy of the value
// so if you change the new variable, it doesn't affect the original

var x = 5;
var y = x;
y++ // this increments y by one
console.log(x) //=> 5
console.log(y) //=> 6

var me = 'James';
var you = me;
you = you + ' Wibblestone';
console.log(me) //=> 'James'
console.log(you) //=> 'James Wibblestone';


// another way to modify primitives is to reassign
// the variable to the result of the modified value

var x = 5;
x = x + 5;
console.log(x === 10) //=> true

var truth = true;
truth = !truth;
console.log(truth === true )//=> false

var me = 'James';
me = me + ' Edwards';
console.log(me === 'James Edwards') //=> true

// arrays and objects are different, when you create an object or an array
// like this:
var numbers = [ 0, 1, 2, 3];
var person = { name: 'bob', age: 31 };

// those variables are referencing a mutable object which means
// 1) you can modify them in place, and
// 2) reassigning them to new variables will result in multiple
//    variables pointing to the same object

var alsoNumbers = numbers;
alsoNumbers[0] = 5;
console.log(numbers); //=> [ 5, 1, 2, 3 ]

person.name = 'John'; // modifying the object in place
console.log(person) //=> { name: 'John', age: 31 }
var samePerson = person;
samePerson.age = 32;
console.log(person) //=> { name: 'John', age: 32 }

// if you try to reassign variables when modifying an object,
// you will get some crazy results:

var me = 'James';
me = me + ' Edwards'; // this is OK! I have to reassign me to the result
					  // of adding the string ' Edwards' to the variable me

var person = { name: 'James' }
person = person.name + ' Edwards';
console.log(person) //=> 'James Edwards' 
					//    person is no longer an object

// this is because modifying a mutable object return NOT the object itself
// but the new value of the modified property of the object

// Conclusion: always remember to reassign variables containing primitive
// values to modify them and to modify arrays and object without reassignment
