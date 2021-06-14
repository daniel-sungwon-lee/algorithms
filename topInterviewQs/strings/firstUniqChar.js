/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const wordObj = {}
  const wordArray = s.split('')

  for (let i =0; i<wordArray.length; i++) {
    wordObj[wordArray[i]] = i
  }

  for (let x=0; x<wordArray.length; x++) {
    if (wordObj[wordArray[x]] === wordArray.indexOf(wordArray[x])) {
      return wordObj[wordArray[x]]
    }
  }

  return -1
};
