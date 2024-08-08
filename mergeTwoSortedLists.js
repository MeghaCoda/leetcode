/* url of problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
Problem Name: Merge Two Sorted Lists
Problem Difficulty: Easy
Problem Description: 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Solution runtime: 63ms
Solution time complexity: O(n + m) where n and m are, respectively, the lengths of list1 and list2
Solution space complexity: also O(n + m)
Solution is faster than 50.41% of solutions (just ok)
Techniques used: Linked Lists, merge sort
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    let masterListCurr, curr1 = list1, curr2 = list2;

    if (curr1.val < curr2.val) {
        head = curr1
        masterListCurr = curr1
        curr1 = curr1.next
    }
    else {
        head = curr2
        masterListCurr = curr2
        curr2 = curr2.next
    }

    while (curr1 || curr2) {
        if (!curr2 || (curr1 && curr1.val < curr2.val)) {
        masterListCurr.next = curr1;
        masterListCurr = curr1;
        curr1 = curr1.next;
        }
        else {
            masterListCurr.next = curr2;
            masterListCurr = curr2;
            curr2 = curr2.next;
        } 
    }
    return head
};