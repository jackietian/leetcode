// Source : https://leetcode.com/problems/roman-to-integer/
// Author : Han Zichi
// Date   : 2016-05-04

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hash = {};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;

  var sum = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    var item = hash[s[i]];

    var nextItem = i + 1 === len ? 0 : hash[s[i + 1]];

    if (nextItem > item) {
      sum += nextItem - item;
      i++;
    } else
      sum += item;
  }

  return sum;
};

/**
1	I	    11	XI
2	II	  12	XII
3	III	  13	XIII
4	IV	  14	XIV
5	V	    15	XV
6	VI	  16	XVI
7	VII	  17	XVII
8	VIII  18	XVIII
9	IX	  19	XIX
10 X	  20	XX
*/

var romanToInt = function(s) {
  let hash ={};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;

  let sum = 0;

  for(let i = 0; i< s.length ; i++) {
    let item = hash[s[i]];
    let nextItem = i === s.length - 1 ? 0 : hash[s[i+1]];

    if(item < nextItem) {
      sum += nextItem - item;
      i++;
    } else {
      sum += item;
    }
  }

  return sum;
};

romanToInt("XIX"); // 19
