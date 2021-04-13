/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let joined = digits.join('')
  let num = parseInt(joined, 10)
  let newNum = num + 1
  let numStr = newNum.toString()
  let numArr = numStr.split('')
  let newDigits = numArr.map(n => parseInt(n, 10))

  return newDigits
};
