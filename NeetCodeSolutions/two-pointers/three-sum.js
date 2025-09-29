class Solution {
    /**
     * Problem: 3Sum
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/3sum
     * 
     * Description:
     * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
     * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
     * Notice that the solution set must not contain duplicate triplets.
     * 
     * Time Complexity: O(n²) - nested loops with two pointers
     * Space Complexity: O(1) - excluding the output array, only using constant extra space
     * 
     * @param {number[]} nums - Array of integers
     * @return {number[][]} - Array of unique triplets that sum to zero
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for the first number
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            let l = i + 1, r = nums.length - 1;

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    // Skip duplicates for the second number
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    // Skip duplicates for the third number
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++; 
                    r--;
                } else {
                    sum < 0 ? l++ : r--;
                }
            }
        }
        return res;
    }
}
