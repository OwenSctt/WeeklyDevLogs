class Solution {
    /**
     * Problem: Two Sum
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/two-sum
     * 
     * Description:
     * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
     * You may assume that each input would have exactly one solution, and you may not use the same element twice.
     * 
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - hash map to store numbers and their indices
     * 
     * @param {number[]} nums - Array of integers
     * @param {number} target - Target sum
     * @return {number[]} - Indices of the two numbers that add up to target
     */
    twoSum(nums, target) {
        const numMap = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            
            if (numMap.has(complement)) {
                return [numMap.get(complement), i];
            }
            
            numMap.set(nums[i], i);
        }
        
        return [];
    }
}
