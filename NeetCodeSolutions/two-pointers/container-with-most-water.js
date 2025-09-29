class Solution {
    /**
     * Problem: Container With Most Water
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/container-with-most-water
     * 
     * Description:
     * You are given an integer array height of length n. There are n vertical lines drawn such that 
     * the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that, together 
     * with the x-axis, form a container that holds the most water.
     * 
     * Time Complexity: O(n) - single pass through array with two pointers
     * Space Complexity: O(1) - only using constant extra space
     * 
     * @param {number[]} heights - Array of heights
     * @return {number} - Maximum area of water that can be contained
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            const width = right - left;
            const water = width * Math.min(heights[left], heights[right]);
            maxWater = Math.max(maxWater, water);

            // Move the pointer with the smaller height
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
