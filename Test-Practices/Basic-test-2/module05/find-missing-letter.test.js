const findMissingLeter = require("./find-missing-letter");
2;

test("Finding Missing Letter", () => {
  expect(findMissingLeter(["a", "b", "c", "e"])).toBe("d");
  expect(findMissingLeter(["X", "Z"])).toBe("Y");
  expect(findMissingLeter(["m", "n", "o", "q", "r"])).toBe("p");
  expect(findMissingLeter(["F", "G", "H", "J"])).toBe("I");
});
