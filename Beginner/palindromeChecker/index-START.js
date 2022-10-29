/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  return text.toLowerCase().split("").reverse().join("") === text;
}

// function palindromeChecker(text) {
//   let arr = text.toLowerCase().split("");
//   let res = arr.every((e, i) => e === arr[arr.length - 1 - i]);
//   return res;
// }

// function palindromeChecker(text) {
//   //   let arr = text.toLowerCase().split("");
//   //   let res = arr
//   //     .slice(0, Math.floor(arr.length / 2))
//   //     .every((e, i) => e === arr[arr.length - 1 - i]);
//   //   return res;
//   var textLen = text.length;
//   for (var i = 0; i < textLen / 2; i++) {
//     if (text[i] !== text[textLen - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindromeChecker("racecar"));

module.exports = palindromeChecker;
