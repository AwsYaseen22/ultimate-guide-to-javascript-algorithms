const searchReplace = require("./index-START");

test("searchReplace is a function", () => {
  expect(typeof searchReplace).toEqual("function");
});

test("find a word in a sentance and replac it with a new word", () => {
  expect(
    searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  ).toEqual("He is Sitting on the couch");
});

test("searchReplace return a string", () => {
  expect(
    typeof searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  ).toEqual("string");
});
