/* url of problem: 
Problem Name: Happy Number
Problem Difficulty: Easy
Problem Description: 
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.


Solution runtime: 50ms
Solution time complexity: 0(d * k) where d is the # of digits in the number and k the # of iterations
Solution space complexity: 0(k) [because of the split() fn and pastSums set]
Solution is faster than 89.53% of submissions.
Techniques used: none specifically, except using a Set to keep track of uniques
*/

/**
 * @param {number} n // 28
 * @return {boolean}
 */
var isHappy = function(n) {
    let str = n.toString().split(''); // ["2","8"]
    let sum = 0,
    pastSums = new Set() // always unique
    while (sum != 1) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]) ** 2
        }
        if (sum === 1) {
            return true
        }
        else if (pastSums.has(sum)) {
            return false
        }
        else {
            pastSums.add(sum)
            // 4 + 64 = 68 = sum
            str = sum.toString().split('') // ["6","8"]
        }
    }

};
