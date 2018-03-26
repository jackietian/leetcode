// Source : https://leetcode.com/problems/maximum-subarray/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  var maxn = -Number.MAX_VALUE;
  var sum = 0;
  nums.forEach(function(item, index, array) {
    sum += item;
    if (sum > maxn)
      maxn = sum;
    if (sum < 0)
      sum = 0;
  });

  return maxn;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // find subarray from length 1 to nums.length
    let max = -Number.MAX_VALUE;
    let subArray = [];

    for(let i = 0; i< nums.length; i++){
      for(let j = i+1; j <= nums.length; j++) {
        let tempArr = nums.slice(i, j);
        let tempSum = reducer(tempArr);
        if(tempSum > max) {
          max = tempSum;
          subArray = tempArr;
        }
      }
    }

    return max;
};

// sum of array items
function reducer(arr) {
  return arr.reduce((a,c) => a + c, 0);
}

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
maxSubArray([1]);
