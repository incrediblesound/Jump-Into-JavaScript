/* In the text portion of this book I talk about how programming involves
 * processing data and then doing something else with it like storing it
 * or displaying it. It's very common when programming to find yourself
 * in a situation where you have a lot of data but you only want part of 
 * it or you need it organized differently.
 *

 * In that situation you could write one function that takes the starting 
 * data as input, processes the data and then outputs the finished product.
 * That's considered a bad practice in software engineering because that
 * that one function is bound to be complex, hard to test, and not re-usable.

 * Instead, we want to break up the problem into smaller problems that we can 
 * solve with simple functions, and then compose those functions to get the
 * result we want. Let's say we have a database of user profiles and we want
 * to analyze the ocurrance of certain words in the user bio. What's the
 * most basic component of that problem? First of all, we know we are going to be 
 * iterating over lists of things. That means we want to do something
 * to each thing in a list one at a time. For that we need "each":
 */

// each is a function that taks a list and another function as input
var each = function(list, func){
	// it loops over the items in the list
	for(var i = 0; i < list.length; i++){
		// as i is incremented we use it to extract each item
		// from an array one by one
		var currentItem = list[i];
		// and invoke the input function with that item
		func(currentItem);
	}
}

// OK, now we have a basic abstraction, a function that puts each
// item in a list into another function. In this case we have a list of
// user profiles and we want to get a list of word ocurrances from each bio.
// To transform a list of one thing into a list of some other kind of thing
// we use a function called "map":

// map is a function that takes a list and a "mapping function"
// the mapping function is what does the transforming
var map = function(list, mappingFunc){
	// we create an empty "results" array
	var result = [];
	// for each item in our input list
	each(list, function(item){
		// we pass the item into the mapping function to get a new item
		var newItem = mappingFunc(item);
		// and push that new item onto our results array
		result.push(newItem);
	})
	// in the end we return the array of results
	return result;
}

// It's easy to understand this function if we take an example.
// Lets say our list is a list of numbers
var numberList = [1, 2, 3, 4]

// and the mapping function just adds one to the input
var addOne = function(num){ return num + 1; } // exampleMap(1) -> 2

// if we map over our numbers list with this function, we get a new list
var newList = map(numberList, addOne) 
// newList === [2, 3, 4, 5]

// now our new list looks like the original list, but every number has
// been incremented by the mapping function. If our mapping function
// multiplied the input by itself, we'd get a different result:
var squared = function(num){ return num * num; }

// now our output will look different:
newList = map(numberList, squared) 
// newList === [1, 4, 9, 16]

// OK, now lets take a look at the function we'll be using:

// our mapping function takes a users profile
var mapFunction = function(userData){
	// creates a result object
	var result = {};
	// extracts the bio from the profile
	var bio = userData.bio;
	// splits the bio text into a list of words
	bio = bio.split(' '); 
	// bio is now an array of words, try this out yourself
	// by typing this into a console: "hello, my name is Joe".split(' ')
	// now we iterate over each word in our list
	each(bio, function(word){
		// set a key-value pair on the results like this:
		// { "example": 0} only if a value doesn't already exist
		result[word] = result[word] || 0;
		// then increment the current value by one { "example": 1 }
		result[word]++;
	})
	// and return the result
	return result;
}

/* OK, so now we can turn a list of user profiles into a list of objects
 * containing the number of ocurrances of each word in the bio of each
 * user. The next step is to turn this list into a single object that contains
 * the number of ocurrances of all words for all bios. For that we need another
 * helper function called reduce.
 */

// reduce is a function that takes a list, a reducer function, and an accumulator
var reduce = function(list, reducer, accumulator){
	// if there is no accumulator, it defaults to the first item in the list
	accumulator = accumulator || list.shift();
	// for each item in our list...
	each(list, function(item){
		// we reset the accumulator to the result of passing the accumulator
		// and the current item into the reducer function
		accumulator = reducer(accumulator, item);
	})
	// finally, we return the accumulator
	return accumulator;
}

// already we can see that the reducer is a function that takes an accumulator
// and an item, and returns another accumulator. Lets use our array of numbers
// as a clarifying example:

var numbers = [1, 2, 3, 4];

var sumReducer = function(accumulator, number){
	return accumulator + number;
}

var sum = reduce(numbers, sumReducer, 0); 
// sum === 10

// in the above example we can see that the reduce function will start with
// an accumulator of zero and add each number to the accumulator in turn.
// If we don't provide zero, the accumulator will default to 1
// and the result will be the same. Here's a reducer function for making
// one big result from our list of user bio word frequencies:

// our reducer takes an accumulator and a word ocurrance object
var wordOccuranceReducer = function(accumulator, wordList){
	// we use Object.keys() to get an array of the keys in our wordlist
	var keys = Object.keys(wordList);
	// this will look like : ["I", "am", "special"] etc
	// for each of those keys
	each(keys, function(key){
		// we create a key on the accumulator if one doesn't exist
		accumulator[key] = accumulator[key] || 0;
		// and add the value of this key in the current wordList to the accumulator
		accumulator[key] += wordList[key];
	})
	return accumulator;
}

// That should do it! The reducer function above will take each word ocurrance
// object and add the values for the words stored inside it to the values
// in the accumulator. We can test our functions on an example data set that
// I prepared below:

var people = [
{
	name: 'Joe',
	age: 37,
	bio: "I like working on a farm, it is relaxing. "+
	"The work is hard but rewarding. When I retire I "+
	"want to take my grandkids fishing every day."
},
{
	name: "Jenny",
	age: 25,
	bio: "I\'m an attorney, I had some romantic ideas "+
	"about what my job would be like when I was a young, "+
	"but it is actually really tiring. I\'m busy all the time. "+
	"Some days I want to vacation on one of those tropical islands."
},
{
	name: "Dave",
	age: 51,
	bio: "I\'m a truck driver. I\'ve been all over the country "+
	"and seen all kinds of places. Some times you get really "+
	"lonely out on the road and then you meet someone at a diner "+
	"or a truck stop and it\'s nice just to be able to say a few "+
	"words to someone."
}
]

var words = reduce(map(people, mapFunction), wordOccuranceReducer);

// the above code is equivalent to this:

var wordOccuranceList = map(people, mapFunction);
var totalWordOccurances = reduce(wordOccuranceList, wordOccuranceReducer);

// These functions word, but are they ideal? What if we wanted to do the
// same kind of processing, but on product descriptions instead of user
// bios? We might want a mapping function that is more abstract, perhaps
// one that takes any block of text and returns the occurrances of each
// word in that text. Currently, our mapping function expects a user object
// because that's what we have a list of, but we can make it more abstract
// and add another map to serve as an interface between our user list and
// our word occurrance function.

var getBio = function(person){
	return person.bio;
}

var wordOcurrances = function(textBlock){
	var result = {};
	textBlock = textBlock.split(' ');
	// for each word...
	each(textBlock, function(word){
		// sets a key/value pair on the results like this:
		// { "example": 0} if it doesn't already exist
		result[word] = result[word] || 0;
		// then increments the value { "example": 1 }
		result[word]++;
	})
	// ...and returns the result
	return result;
}

// now our mapping function is re-usable, we just need to create
// a function that uses our interface to adapt the mapping function
// to our use case:

var userBioWordOcurrances = function(user){
	var bio = getBio(user);
	return wordOcurrances(bio);
} 

words = reduce(map(people, userBioWordOcurrances), wordOccuranceReducer);
console.log(words);
