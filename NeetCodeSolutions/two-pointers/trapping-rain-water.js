class Solution {
    /**
     * Problem: Trapping Rain Water
     * Difficulty: Hard
     * URL: https://neetcode.io/problems/trapping-rain-water
     * 
     * Description:
     * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
     * compute how much water it can trap after raining.
     * 
     * Time Complexity: O(n) - single pass through array with two pointers
     * Space Complexity: O(1) - only using constant extra space
     * 
     * @param {number[]} height - Array of heights representing elevation map
     * @return {number} - Total amount of water that can be trapped
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }

        return water;
    }
}
