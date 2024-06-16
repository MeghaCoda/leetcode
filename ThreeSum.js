/* url of problem: https://leetcode.com/problems/3sum/description/ */
/* 
Problem Name: 3 Sum
Problem Difficulty: Medium
Problem Description: 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/* 
Solution runtime: 186ms.
Solution time complexity: O(n^2)
Solution space complexity: O(n)
Solution is faster than 24.9% of solutions (not great).
Solution uses a for loop for the nums[i] and the two-pointer technique for nums[j] and nums[k].
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const removeDuplicateArrays = (arr) => {
    const uniqueArrays = new Set();
    const result = [];

    for (let innerArr of arr) {
        // Convert the sub-array to a string
        const innerArrStr = innerArr.join('');
        
        // If the string representation is not already in the set, add it
        if (!uniqueArrays.has(innerArrStr)) {
            uniqueArrays.add(innerArrStr);
            result.push(innerArr);
        }
    }

    return result;
}

var threeSum = function(nums) {
    const triplets = []
    if (nums.length < 3) return triplets;
    const target = 0;
    const sortedArr = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length-2; i++) {
        // if i is the same as i-1, skip this iteration
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let low = i+1, high = sortedArr.length-1;
        while (low < high) {
            const currentSum = sortedArr[i] + sortedArr[low] + sortedArr[high]
            if (currentSum === target) {
                    triplets.push([sortedArr[i], sortedArr[low], sortedArr[high]])
                    // Skip duplicates for `low` and `high`
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
            }
            else if (currentSum < target) {
                low++;
            }
            else if (currentSum > target) {
                high--;
            }
        }
    }
    return removeDuplicateArrays(triplets)
    
};