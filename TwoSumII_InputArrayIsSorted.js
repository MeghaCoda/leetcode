/* url of problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */
/* 
Problem Name: Two Sum II - Input Array Is Sorted
Problem Difficulty: Medium
Problem Description: 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that 
they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 
1 <= index1 < index2 <= numbers.length.

- Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
- The tests are generated such that there is exactly one solution. 
- You may not use the same element twice.
- Your solution must use only constant extra space.
*/

/* 
Solution runtime: 49ms.
Solution time complexity: O(n^2)
Solution space complexity: O(n)
Solution is faster than 89.6% of submissions 
Solution uses the two-pointer technique 
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = 0, e = numbers.length-1;
    while (s < e) {
        const sum = numbers[s] + numbers[e]
        if (sum == target) {
            return [s+1, e+1]
        }
        else if (sum < target) {
            s++;
        }
        else if (sum > target) {
            e--;
        }
    }
    return false;
};
