/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6


Example 2:

Input: lists = []
Output: []


Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
  const mergeLists = (listA, listB) => {
    let merged = new ListNode(0);
    let currentNode = merged;

    while (listA && listB) {  
      if (listA.val < listB.val) {
        currentNode.next = listA;
        listA = listA.next;
        currentNode = currentNode.next;
      } else {
        currentNode.next = listB;
        listB = listB.next;
        currentNode = currentNode.next;
      }
    }
    // After one list runs out, append the other to the end
    if (listA === null) {
      currentNode.next = listB;
    } else {
      currentNode.next = listA;
    }
    return merged.next;
  };

  // Edge cases- handle empty sets. All empty sets, some empty sets
  if (lists.length === 0) {
    return {};
  }

  // Merge 2 lists at a time until there is only one list left
  // Return that list
  let answer = null;
  while (lists.length > 0) {
    answer = answer || lists.pop();
    let comparator = lists.pop();
    answer = mergeLists(answer, comparator);
  }
  return answer;
};