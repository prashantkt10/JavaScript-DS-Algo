//This is stack with palindrome

//Declaring stack
var letters = [];

var word = "put";

var rword = "";


//put word letters into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}


//pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

console.log(rword);
console.log(word);