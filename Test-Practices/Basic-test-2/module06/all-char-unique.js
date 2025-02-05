// function areAllChar(str) {
//   const charCount = {};

//   for (let i = 0; i < str.length; i++){
//     const char = str[i]
//     // console.log(char)

//     if(charCount[char]){
//         return false;
//     }
//     charCount[char] = true;
//     console.log(charCount)
//   }
//   return true
// }

function areAllChar(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const  char = str[i];
    // console.log(char)

    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

module.exports = areAllChar;
