/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
Amendment => return longest word 
*/

// function longestWord(text) {
//   text = text.split(" ");
//   let longest = text[0];
//   for (let i = 1; i < text.length; i++) {
//     if (text[i].length > longest.length) {
//       longest = text[i];
//     }
//   }
//   return longest;
// }

// function longestWord(text) {
//   return text.split(" ").reduce((acc, cur) => {
//     if (cur.length > acc.length) {
//       acc = cur;
//     }
//     return acc;
//   }, "");
// }

function longestWord(text) {
  return text.split(" ").sort((a, b) => b.length - a.length)[0];
}

// console.log(longestWord("Top Shelf Web Development Training on Scotch"));

module.exports = longestWord;
