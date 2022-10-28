/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  let arr = text.toLowerCase().split(" ");
  let capsArr = [];
  arr.forEach((w) => {
    capsArr.push(w[0].toUpperCase() + w.slice(1));
  });
  return capsArr.join(" ");
}

// function capSentence(text) {

// }

console.log(capSentence("the tales of scotch!"));

module.exports = capSentence;
