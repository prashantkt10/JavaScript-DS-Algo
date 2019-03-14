//Creates a stack
var Stack = function () {
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var results = this.storage[this.count];
        delete this.storage[this.count];
        return results;
    }

    //get size of stack
    this.size = function () {
        return this.count;
    }

    //Returns the value at the end of stack
    this.peek = function (value) {
        return this.storage[this.count - 1];
    }
}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
myStack.push('a');
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());