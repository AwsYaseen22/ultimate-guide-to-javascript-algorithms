/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let maxChar = "";
  let maxVal = 0;
  let obj = {};
  for (const l of text) {
    if (obj.hasOwnProperty(l)) {
      obj[l]++;
    } else {
      obj[l] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxRecurringChar("aabbbccddddd"));

// function maxRecurringChar(text) {
//     // Code goes here
// }

module.exports = maxRecurringChar;
