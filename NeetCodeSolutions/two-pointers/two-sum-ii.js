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
     * Return the indices of the two numbers, index1 and index2, added by one as an integer array 
     * [index1, index2] of length 2.
     * 
     * Time Complexity: O(n) - single pass through array with two pointers
     * Space Complexity: O(1) - only using constant extra space
     * 
     * @param {number[]} numbers - Array of integers sorted in non-decreasing order
     * @param {number} target - Target sum
     * @return {number[]} - Array containing the two indices (1-indexed)
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            let sum = numbers[left] + numbers[right]

            if (sum === target) {
                return [left + 1, right + 1] 
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
}

