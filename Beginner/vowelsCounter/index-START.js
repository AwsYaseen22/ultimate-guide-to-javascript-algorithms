/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// function vowelsCounter(text) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let counter = 0;
//   for (let letter of text.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       counter++;
//     }
//   }
//   return counter;
// }

function vowelsCounter(text) {
  let counter = text.match(/[aeiou]/gi);
  return counter ? counter.length : 0;
}

module.exports = vowelsCounter;
