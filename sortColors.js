/* 
Problem URL: https://leetcode.com/problems/sort-colors/
Problem Name: Sort Colors
Problem Difficulty: Medium
Problem Description: 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that 
objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Solution #1:
runtime: 61ms
Solution time complexity: o(n^2) 
Solution space complexity: 0(1)
Solution is faster than 17.6% of solutions (pretty bad)
Techniques used: Bubble sort

Solution #2:
Solution runtime: 46ms
Solution time complexity: o(n) 
Solution space complexity: 0(1)
Solution is faster than 90.24% of solutions (pretty good!)
Techniques used: Dutch National Flag algorithm
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Solution #1 - Bubble Sort */
var sortColors = function(nums) {
    for (var k = nums.length-1; k > 0; k--) {
        for (var i = 0; i < k; i++) {
            if (nums[i] > nums[i+1]) {
                [nums[i+1], nums[i]] = [nums[i], nums[i+1]];
            }
        }
    }
};

/* Solution #2 - Dutch National Flag algorithm */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let start = 0; i = 0; end = nums.length-1;
    
    while (i <= end) {
       if (nums[i] === 0) {
           [nums[i], nums[start]] = [nums[start], nums[i]]
           start++;
           i++;
       }
       else if (nums[i] === 1) {
           i++;
       }
       else if (nums[i] === 2) {
           [nums[i], nums[end]] = [nums[end], nums[i]]
           end--;
       }
    }
    }
