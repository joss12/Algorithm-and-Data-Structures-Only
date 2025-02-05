const helloWorld = require("./hello-world");

test("Running 'Hello, World!' as string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World!");
});
