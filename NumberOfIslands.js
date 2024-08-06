/* url of problem: https://leetcode.com/problems/number-of-islands/
Problem Name: Number of Islands
Problem Difficulty: medium
Problem Description: 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","1"],
  ["0","0","0","1","1"]
]

Output: 2

Solution runtime: 68ms
Solution time complexity: O(m * n) where m = grid.length and n = grid[0].length
Solution space complexity: O(m * n) where m = grid.length and n = grid[0].length
Solution is faster than 73.51% of submissions
Techniques used: 
Depth-First Search (recursive)
*/

var numIslands = function(grid) {

    const numRows = grid.length;
    const numCols = grid[0].length;
    let islandCount = 0;
    
    const traverse = (row, col) => {
        if (row < 0 ||
        col < 0 ||
        row >= numRows ||
        col >= numCols ||
        grid[row][col] !== "1") {
            return // you've reached the end of a branch
        }
        grid[row][col] = 'checked';

        traverse(row - 1, col); // Up
        traverse(row + 1, col); // Down
        traverse(row, col - 1); // Left
        traverse(row, col + 1); // Right

    } 

     for (let row = 0; row < numRows; row++) {
	        for (let col = 0; col < numCols; col++) {
	            if (grid[row][col] === '1') {
	                // Found an unvisited island
	                islandCount++;
	                traverse(row, col); // traverse all sections of the island
	            }
	        }
	    }
	    return islandCount;
	}
