function formatPhone(numbers) {
  //   const areCode = numbers.slice(0, 3).join("");
  //   const prefix = numbers.slice(3, 6).join("");
  //   const lineNumber = numbers.slice(6).join("");
  //   return `(${areCode}) ${prefix}-${lineNumber}`

  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}
module.exports = formatPhone;
