/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = new Set(nums)
  return [...unique]
};

const removeDuplicates = (nums) => {
  const removed = nums.filter((num, index) => {
    return nums.indexOf(num) === index
  })

  return removed
}
