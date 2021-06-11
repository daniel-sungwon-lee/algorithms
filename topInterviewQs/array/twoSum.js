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
    const diff = target - num

    if (obj[diff]) {
      return obj.diff
    }


  }
};
