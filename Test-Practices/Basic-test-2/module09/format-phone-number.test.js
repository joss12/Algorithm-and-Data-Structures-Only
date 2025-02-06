const formatPhone = require("./format-phone-number");

test("Format Phone Number", () => {
  expect(formatPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
  expect(formatPhone([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe("(502) 481-9637");
  expect(formatPhone([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe("(999) 999-9999");
});
