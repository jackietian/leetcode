// Source : https://leetcode.com/problems/two-sum/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSums(nums, target) {
  let res = [];

  for(let i = 0; i < nums.length; i++){
    let temp = target - nums[i];
    if(nums.indexOf(temp) > -1) {
      res = [i, nums.indexOf(temp)];
      return res;
    }
  }

  return res;
}

twoSums([2,3,7,9,11], 20); // [3,4]
