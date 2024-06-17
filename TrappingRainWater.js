/* url of problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */
/* 
Problem Name: Trapping Rain Water
Problem Difficulty: Hard
Problem Description: 
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
*/

/* 
Solution runtime: 51ms.
Solution time complexity: O(n)
Solution space complexity: O(1)
Solution is faster than 90.63% of submissions 
Solution uses the two-pointer technique 
*/

/**
 * @param {number[]} heightArr
 * @return {number}
 */
var trap = function(heightArr) {
    // arrays with fewer than 3 items cannot hold any water
    if (heightArr.length < 3) { return 0 }
    let start = 0,
    end = heightArr.length-1,
    maxIdx = 0,
    highestStart = heightArr[0],
    highestEnd = heightArr[heightArr.length-1],
    trapped = 0;
    // get the index of the tallest Item
    for (let i = 0; i < heightArr.length; i++) {
        if (heightArr[i] > heightArr[maxIdx]) {
            maxIdx = i
        }
    }
    /* find the traps by keeping track of the highest elevation 
    most recently checked below and above the max height,
    and tracking the difference between them and the current pointers. */

    while (start < maxIdx || end > maxIdx) {
        if (start < maxIdx) {
            const diff = highestStart - heightArr[start]
            if (diff > 0) {
                trapped += diff;
            }
            if (diff < 0) {
                highestStart = heightArr[start]
            }
            start++;
        }
        if (end > maxIdx) {
            const diff = highestEnd - heightArr[end]
            if (diff > 0) {
                trapped += diff;
            }
            if (diff < 0) {
                highestEnd = heightArr[end]
            }
            end--;
        }
    }
    return trapped;
};