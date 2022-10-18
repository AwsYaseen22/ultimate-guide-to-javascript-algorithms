/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

module.exports = {
  // Chaining in-built methods
  reverseString1: function (text) {
    return text.split("").reverse().join("");
  },

  // Using a For-loop
  reverseString2: function (text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
      result += text[i];
    }
    return result;
  },

  // Using The Recursive Way
  reverseString3: function (text) {
    if (text === "") {
      return "";
    } else {
      return this.reverseString3(text.substr(1)) + text[0];
    }
  },

  // Using .reduce()
  reverseString4: function (text) {
    return text.split("").reduce((acc, cur) => (cur += acc), "");
  },
};

// console.log(module.exports.reverseString4("hello"));

// module.exports = reverseString;
