// this code file should give you a very basic introduction
// to algorithms and the idea of time complexity

var list = [12, 2, 34, 7, 9, 10 ];

// Lets say we have a list like the one above, and we want to find
// the largest number in the list. With a list of unsorted numbers
// there's only really one way to do this

var biggestNumber = function(list){
	var biggest = 0;
	for(var i = 0; i < list.length; i++){
		if(list[i] > biggest){
			biggest = list[i];
		}
	}
	return biggest;
}

// this algorithm goes through each number in the list and checks it 
// against a value called "biggest". If the current number is larger 
// than biggest we set biggest to that value. So if the list is ten 
// items long we have to check ten numbers, five thousand items long 
// we check five thousand numbers. In big O notation this is called O(n), 
// where the n stands for the number of items in the list.
// But what if we use a different kind of data structure to store our numbers:

{
	value: 12,
	left: {
		value: 2,
		right: {
			value: 7,
			right: {
				value: 9,
				right: {
					value: 10
				}
			},
		}
	},
	right: {
		value: 34
	}
}

// This is called a binary tree, and we can make one by feeding our list
// into a binary tree data structure
var binaryTreeFactory = function(value){
	var binaryTree = {
			value: value || null,
			left: null,
			right null,
			insert: function(newValue){
				if(this.value === null){
				// if this node of the tree has no value, set the value
				// of this node to the inserted value
					this.value = Value
				} else {
					if(newValue > this.value){
						// otherwise, if the inserted value is greater than the value
						// of this node...
						if(this.right === null){
							// if the right node doesn't exist create one
							this.right = binaryTreeFactory(newValue);
						} else {
							// if it does exist, invoke this function on that node
							// with the same value passed in
							this.right.insert(newValue);
						}
					}
					else if(newValue < this.value){
						// otherwise repeat those steps on the left node if the inserted
						// value is less than the current nodes value
						if(this.left === null){
							this.left = binaryTreeFactory(newValue);
						} else {
							this.left.insert(newValue);
						}
					}
				}
			}
		}
	return binaryTree;
}

// and here's how we use it:

var myTree = binaryTreeFactory(); // create an empty tree node
myTree.insert(12); // since myTree.value is null, it will be set to 12 now
myTree.insert(2); // two is less than 12, so the algorithm will check the left
				  // property of myTree, find it null, and set the value of that
				  // property to a new node with the value 2
myTree.insert(34); // the same thing will happen as with two, but on the right property
myTree.insert(7); // becuase seven is less than 12, but the property is not null
				  // the algorithm will invoke the insert function on the node at the
				  // left property, that node has a value 2, so it will create a new
				  // node on the right property
myTree.insert(9);
myTree.insert(10);

// OK so now we have this fancy data structure holding our numbers. Now we ask
// the same question we asked before: how do we find the largest number in the list?
// thing about that question before looking on, could you write a function
// myTree.biggest() that would return the largest number in the tree?
//~
//~
//~
//~
//~
//~
//~
//~
// Here it is:
var binaryTreeFactory = function(value){
	var binaryTree = {
		value: value || null,
		left: null,
		right: null,
		insert: function(){...},
		biggest: function(){
			if(this.right){
				// if there is a number bigger than this one in the list,
				// it is stored in a node on the right property
				// so repeat this function on that node
				return this.right.biggest();
			} else {
				// otherwise we are already at the biggest number
				return this.value;
			}
		}
	}
}

// Amazingly simple right? If we think that a binary tree has levels, the first
// level has one node, the second two, the third four and so on, each time we
// move to the right we are moving to the largest number of the next level. If
// you have a hard time understanding this, try drawing it out. That means that every 
// time we double the amount of numbers in our list, our algorithm only has to
// iterate one more time to find the biggest number. 
// Thats a time complexity of O(log n).
