// https://leetcode.com/problems/add-two-numbers/description/
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

// Example
  // Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  // Output: 7 -> 0 -> 8
  // Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  // answer wil be the first node of the linked list answer
  let answer = new ListNode(null);
  let createListNode = (val) => {
    return {
      val: val,
      next: null,
    }
  };
  // nodeA is the current node in l1, nodeB is the current node in l2
  let nodeA = l1;
  let nodeB = l2;
  let carryOverVal = 0;
  let currentAnswerNode;

  // Add the nodes of each list and save the answer in the new list;
  // If the answer > 10, save the last digit, and add 1 to the next sum;
  // If one of the lists ends before the other, assume it's 0 and keep adding until the other list is done
  // Watch out for the edge case where the last sum is 9 + 1;
  while (nodeA.val !== null || nodeB.val !== null || answer.val === null) {
    let a = nodeA.val || 0;
    let b = nodeB.val || 0;
    let newVal = a + b + carryOverVal;
    // Reset carryOverVal
    carryOverVal = 0;
    if (newVal > 9) {
      newVal = newVal % 10;
      carryOverVal = 1;
    }
    // If answer is null make it the new node
    if (answer.val === null) {
      answer = new ListNode(newVal);
      currentAnswerNode = answer;
    } else {
      // else make the currentAnswerNode.next the new node
      currentAnswerNode.next = new ListNode(newVal);
      currentAnswerNode = currentAnswerNode.next;
    }
    nodeA = nodeA.next || {val: null, next: null};
    nodeB = nodeB.next || {val: null, next: null};
  }
  if (carryOverVal === 1) {
    currentAnswerNode.next = new ListNode(1);
  }
  return answer;
};