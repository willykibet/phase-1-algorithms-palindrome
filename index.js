function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedWord = cleanWord.split("").reverse().join("");
  return cleanWord === reversedWord;
}

/* 
Convert the word to lowercase and remove any non-alphanumeric characters
 Reverse the word and compare it to the original
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