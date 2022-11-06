/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

const sanitizeString = function (str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
};

function isAnagram(stringA, stringB) {
  return sanitizeString(stringA) === sanitizeString(stringB);
}

console.log(isAnagram("silent", "listen"));

module.exports = isAnagram;
