/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let newDigits = digits.map(a => {
    if (digits.indexOf(a) === digits.length -1) {
      return a + 1

    } else {
      return a
    }
  })

  return newDigits
};
