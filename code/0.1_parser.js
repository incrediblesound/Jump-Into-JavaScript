var input = "John 31 m Stacy 24 f Adam 40 m Dave 20 m";

var output = makeSetsIntoObjectArray( makeSetsOfThree( splitOnSpaces( input ) ) );

// in the above example, the return value of each function is fed directly
// into the next function in the chain. Instead, we could store each return value
// in its own variable to make the process more explicit and easier to read:

var arrayOfData = splitOnSpaces(input);
var setsOfThree = makeSetsOfThree(arrayOfData);
var output = makeSetsIntoObjectArray(setsOfThree);

// these three functions each perform one discrete task in the parsing process
// splitOnSpaces takes the input string and turns it into an array of words
// makeSetsOfThree packages the words into an array of arrays like this:
// [ ['John', 31, 'm'], ['Stacy', 24, 'f'] ...]
// Finally makeSetsIntoObjectArray takes each of these arrays and 
// turns them into objects with named keys that makes the values more meaningful

function splitOnSpaces(inputString){
	return inputString.split(' ');
}

function makeSetsOfThree(arrayOfData){
	var x = 0;
	var result = [];
	var currentSet = [];
	while(arrayOfData.length){
		if(!(x % 3)){
			if(currentSet.length){
				result.push(currentSet);
			}
			currentSet = [];
			x = 0;
		}
		currentSet.push(arrayOfData.shift());
		x++;
	}
	return result;
}

function makeSetsIntoObjectArray(arrayOfSets){
	var result = [];
	while(arrayOfSets.length){
		var current = arrayOfSets.pop();
		var newObject = {
			name: current[0],
			age: current[1],
			sex: current[2]
		}
		result.push(newObject);
	}
	return result;
}