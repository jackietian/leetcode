// Source    : https://leetcode.com/problems/3sum/
// Author    : Han Zichi
// Date      : 2017-10-08
// Complexity: O(n^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)

  let ans = []
  let len = nums.length

  // enumerate the array, and assume the item to be the smallest one
  for (let i = 0; i < len; i++ ) {

    // have already enumerate the item as the smallest one among the three
    // then continue
    if (i && nums[i] === nums[i - 1]) continue

    // the sum of another two should be
    let target = -nums[i]

    // the indexes of another two
    let [start, end] = [i + 1, len - 1]

    while (start < end) {
      let sum = nums[start] + nums[end]

      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        ans.push([nums[i], nums[start], nums[end]])

        // remove the duplication
        while (nums[start] === nums[start + 1])
          start++
        start++

        // remove the duplication
        while (nums[end] === nums[end - 1])
          end--
        end--
      }
    }
  }

  return ans
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    //edge cases
    if(nums.length === 3) {
      if(nums.reduce((a,b) => a+ b) === 0) {
        return [nums];
      }
    }
    let res = [];
    nums = nums.sort((a,b) => a-b);
    let n = nums.length;
    for(let i = 0; i < n - 3; i++){
      let a = nums[i];
      let start = i+1;
      let end = n-1;
      while(start < end) {
        b = nums[start];
        c = nums[end];
        if(a + b + c === 0) {
            res.push([a,b,c]);
          if(b == nums[start+1]) { // skip the duplicates
            start++;
          } else {
            end--;
          }
        }else if(a + b + c >0) {
            end--;
          } else {
            start++;
          }
      }
    }
    return res;
};

function contains(arr, item) {
    let found = false;
    arr.forEach(arrItem => {
        if(arrItem.sort((a,b) => a-b).join('') === item.sort((a,b) => a-b).join('')) {
          found = true
        }
    })

    return found;
}

function checkDuplicateTriplets(a,b,c) {
    return a === b && b === c && c === a;
}
