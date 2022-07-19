/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  // Have 2 pointers running concurrently
  // Run fast pointer until fast.next is null (last node)
  while (fast.next !== null) {
    fast = fast.next;
    if (n > 0) {
      n--;
    } else {
      // Advance slow pointer n places behind fast
      slow = slow.next;
    }
  }
  // Edge cases- n is equal to list length
  if (slow === head && n > 0) {
    head = head.next;
  } else {
    // Excise node in question, return head
    slow.next = slow.next.next;
  }

  return head;
};

removeNthFromEnd([1, 2], 1)

/*
Input
[1,2]
1
Output
[2]
Expected
[1]
*/