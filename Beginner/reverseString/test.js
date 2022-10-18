let ob = require("./index-START");

for (const key in ob) {
  test(`${ob[key]} is a function`, () => {
    expect(typeof ob[key]).toEqual("function");
  });

  test("reverses a string of text", () => {
    expect(ob[key]("aeiou")).toEqual("uoiea");
  });

  test("reverses a string containing numbers", () => {
    expect(ob[key]("123456789")).toEqual("987654321");
  });

  test("reverses a string containing mixed case characters", () => {
    expect(ob[key]("AsDfGhJkL")).toEqual("LkJhGfDsA");
  });
}

// test('reverseString is a function', () => {
//   expect(typeof reverseString).toEqual('function');
// });

// test('reverses a string of text', () => {
//   expect(reverseString('aeiou')).toEqual('uoiea');
// });

// test('reverses a string containing numbers', () => {
//   expect(reverseString('123456789')).toEqual('987654321');
// });

// test('reverses a string containing mixed case characters', () => {
//   expect(reverseString('AsDfGhJkL')).toEqual('LkJhGfDsA');
// });
