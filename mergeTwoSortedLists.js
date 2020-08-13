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
    let answer = {};
    let tail = {};
  
    if (l1 === undefined && l2 === undefined) {
      return answer;
    }

    if (l1 === null) {
      return l2;
    } else if (l2 === null) {
      return l1;
    }
  
    // Start with the scenario of two non-empty LL
    if (l1.val !== undefined && l2.val !== undefined) {
      // Compare heads of LLs; Assign smaller head to answer, and to tail
      // Advance the pointer to the next node of affected LL
      if (l1.val <= l2.val) {
        answer = l1;
        tail = l1;
        l1 = l1.next;
      } else {
        answer = l2;
        tail = l2;
        l2 = l2.next;
      }
      // While the heads of both nodes are non-null
      while (l1 !== null && l2 !== null) {
        // Compare heads of LLs
        // Assign smaller head to be the next value of the tail`
        // Point the tail at the new tail
        // Advance the pointer of the affected LL to the next node
        if (l1.val <= l2.val) {
          tail.next = l1;
          tail = tail.next;
          l1 = l1.next;
        } else {
          tail.next = l2;
          tail = tail.next;
          l2 = l2.next;
        }
      }
    }
  
    // At least one of the LL is empty.
    // If answer is undefined, at least one of the LL started empty
        // Assign other LL to the answer, and return answer
    if (answer === undefined) {
      if (l1 === undefined) {
        answer = l2;
      } else if (l2 === undefined) {
        answer = l1;
      }
      return answer;
    }
    
    // Else we have a populated answer; assign the other LL to the next value of the tail
    if (l1 === null) {
      tail.next = l2;
    } else {
      tail.next = l1;
    }
    return answer;
  };