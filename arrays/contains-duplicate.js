class Solution {
    /**
     * Problem: Contains Duplicate
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/contains-duplicate
     * 
     * Description:
     * Given an integer array nums, return true if any value appears at least twice in the array, 
     * and return false if every element is distinct.
     * 
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - set to store unique elements
     * 
     * @param {number[]} nums - Array of integers
     * @return {boolean} - True if duplicates exist, false otherwise
     */
    containsDuplicate(nums) {
        const seen = new Set();
        
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        
        return false;
    }
}
