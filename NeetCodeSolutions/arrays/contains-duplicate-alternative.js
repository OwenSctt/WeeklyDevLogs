class Solution {
    /**
     * Problem: Contains Duplicate (Alternative Implementation)
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/contains-duplicate
     * 
     * Description:
     * Given an integer array nums, return true if any value appears at least twice in the array, 
     * and return false if every element is distinct.
     * 
     * This is an alternative implementation using a different method name and loop structure.
     * 
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - set to store unique elements
     * 
     * @param {number[]} nums - Array of integers
     * @return {boolean} - True if duplicates exist, false otherwise
     */
    hasDuplicate(nums) {
        let sorted = new Set();
        
        for (let i = 0; i < nums.length; i++) {
            if (sorted.has(nums[i])) {
                return true;
            }
            sorted.add(nums[i]);
        }
        
        return false;
    }
}
