/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {}

  for (let i = 0; i<nums.length; i++) {
    obj[nums[i]] = i
    const num = nums[i]
  }

  for (let x =0; x<nums.length; x++) {
    const diff = target - nums[x]

    if (obj[diff] && obj[diff] !== x) {
      return [x, obj[diff]]

    }
  }

};
