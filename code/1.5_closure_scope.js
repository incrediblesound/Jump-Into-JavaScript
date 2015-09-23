// in JavaScript and other programming languages, scope is a space
// where you can define and use variables. In JavaScipt specifically
// there are two kinds of scope: global scope and function scope.

var x = 10;		  //<-
var me = 'James'; //<- these two variables are defined in the global
				  // scope

var doStuff = function(){
	var y = 5; // here I am defining a variable inside a new scope
			   // created by this function
	console.log(x) // this will print 10 to the console because I still
				   // have access to variables in the global scope
	return me;	// here I am returning a value defined in the global scope
}

// each function creates a new scope where variables can be defined
// note that the scope of a function is also there the parameters of
// that function live

var addTwoToMe = function(number){
	// the parameter "number" is accessible withing the scope
	// created by this function
	return number + 2;
}

addTwoToMe(5) // prints 7
console.log(number) // prints undefined, we're back in the global scope
					// so there's no "number" variables

// nested functions create nested scopes, a function on the inside
// has access to variables in the scope of the functions enclosing it

var wrapper = function(input){
	var aside = 5;
	var result = 5 + input;
	middleFunction(result);

	function middleFunction(param){
		console.log(aside) // prints 5; JavaScript goes up the "scope chain" into
						   // the scope of the function "wrapper"
		var middleValue = 13;
		pointlessFunc();

		function pointlessFunc(){
			console.log(middleValue) // prints 13
			console.log(result)		// prints value of result from wrapper function
			console.log(param) // prints value of the argument of middleFunction
		}
	}
}

// if a function references variables from a function higher in the scope chain
// the scope of the outer function will be saved. This is called a closure. 
// This feature can be used in a lot of interesting ways, 
// including partial application and to give functions state

// this function takes a number x and returns a function that 
// takes a number y and returns the value of adding x and y
var addXToMe = function(x){
	return function(y){
		return x+y;
	}
}

var addFiveToMe = addXToMe(5);
addFiveToMe(2) //=> 7
addFiveToMe(5) //=> 10

// When the function below is invoked is creates a closure with an object called "count"
// in it. That object is accessible to the function that is returned by wordCount
// every time that function is invoked

var wordCount = function(){
	var count = {};
	return function(word){
		count[word] = count[word] || 0;
		count[word]++;
		return count;
	}
}

var countOne = wordCount(); // countOne is a function with access to count via closure
var countTwo = wordCount(); // a new closure is created each time wordCount is invoked,
							// so this function has access to a different count object

countOne("Hello") //=> { "Hello": 1 }
countOne("Hello") //=> { "Hello": 2 }
countOne("GoodBye") //=> { "Hello": 2, "GoodBye": 1 }

countTwo("Puppies") //=> { "Puppies": 1 }
countTwo("Kittens") //=> { "Puppies": 1, "Kittens": 1 }

// as an exercise, try to write a function that takes a function as input and returns a function
// that invokes the input function when invoked the first time, but returns undefined or false when invoked
// every time after that, heres how it should work:
var once = function(func) {/*special magic*/}
var sayHello = function(){ console.log("Hello") }
var sayHelloOnce = once(sayHello);
sayHelloOnce() // prints "Hello" to the console
sayHelloOnce() // returns undefined

// The answer is below, but don't look until you've tried it yourself!
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
//~
var once = function(func){
	var invokedOnce = false;
	return function(){
		if(!invokedOnce){
			invokedOnce = true;
			func();
		}
	}
}
