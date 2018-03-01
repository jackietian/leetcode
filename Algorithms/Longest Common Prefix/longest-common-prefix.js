// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  var len = strs.reduce(function(pre, item) {
    return Math.min(pre, item.length);
  }, Number.MAX_VALUE);

  var ans = '';
  for (var i = 0; i < len; i++) {
    var a = strs[0][i];
    var f = strs.every(function(item) {
      return item[i] === a;
    });

    if (!f) break;
    ans += a;
  }

  return ans;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
  let res = '';
  let shortestStrLength = strs[0].length;
  strs.forEach(str => {
    shortestStrLength = str.length <= shortestStrLength ? str.length : shortestStrLength;
  })

  console.log(shortestStrLength);
  for(let i = 0; i < shortestStrLength; i++) {
    let a = strs[0][i];

    let found = strs.every(str => {
      return str[i] === a;
    });

    if(!found) break;
    res += a;
  }

  return res;
};


longestCommonPrefix(['abc', 'abc', 'abcd']); // abc
