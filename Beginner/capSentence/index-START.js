/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// SECOND
// function capSentence(text) {
//   let arr = text.toLowerCase().split(" ");
//   let capsArr = [];
//   arr.forEach((w) => {
//     capsArr.push(w[0].toUpperCase() + w.slice(1));
//   });
//   return capsArr.join(" ");
// }

// FASTEST
// function capSentence(text) {
//   let arr = text.toLowerCase().split(" ");
//   let capsArr = arr.map((w) => {
//     return w[0].toUpperCase() + w.slice(1);
//   });
//   return capsArr.join(" ");
// }

// SLOWEST
function capSentence(text) {
  let arr = text.toLowerCase().split(" ");
  let capsArr = arr.map((w) => {
    return w.replace(w[0], w[0].toUpperCase());
  });
  return capsArr.join(" ");
}

console.log(capSentence("the tales of scotch!"));

module.exports = capSentence;
