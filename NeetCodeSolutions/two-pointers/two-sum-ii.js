class Solution {
    /**
     * Problem: Two Sum II - Input Array Is Sorted
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/two-sum-ii
     * 
     * Description:
     * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
     * find two numbers such that they add up to a specific target number. Let these two numbers 
     * be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
     * 
     * Time Complexity: O(n) - single pass through array with two pointers
     * Space Complexity: O(1) - only using constant extra space
     * 
     * @param {number[]} numbers - Sorted array of integers
     * @param {number} target - Target sum
     * @return {number[]} - 1-indexed positions of the two numbers that add up to target
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[left] + numbers[right];

            if (sum === target) {
                return [left + 1, right + 1]; // Return 1-indexed positions
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        
        return []; // No solution found
    }
}
