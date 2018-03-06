// Source : https://leetcode.com/problems/merge-two-sorted-lists/
// Author : Han Zichi
// Date   : 2015-08-17

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var ans = [];
  while (l1) {
    ans.push(new ListNode(l1.val));
    l1 = l1.next;
  }

  while (l2) {
    ans.push(new ListNode(l2.val));
    l2 = l2.next;
  }

  ans.sort(function(a, b) {
    return a.val - b.val;
  });

  if (!ans.length) return null;
  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};



function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  let res = [];
  while(l1) {
    res.push(new ListNode(l1.val));
    l1 = l1.next;
  }

  while(l2) {
    res.push(new ListNode(l2.val));
    l2 = l2.next;
  }

  res.sort((a, b) => a.val - b.val);
  console.log(res);
  for(let i = 0; i < res.length - 1; i++) {
    console.log(res[5]);
    res[i].next = res[i+1];
  }
  return res[0];
}

let l1 = {val: 1, next: {val:2, next: {val:3, next: null}}};
let l2 = {val: 2, next: {val:3, next: {val:4, next: null}}};

console.log(mergeTwoLists(l1, l2));
