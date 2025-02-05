function countVowels(str) {
  const formatedStr = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < formatedStr.length; i++) {
    const char = formatedStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
