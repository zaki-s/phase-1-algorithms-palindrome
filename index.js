function isPalindrome(word) {
  // Write your algorithm here
}


// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string and compare it to the original
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("hello")); // false

// Export function for testing
module.exports = isPalindrome;

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
