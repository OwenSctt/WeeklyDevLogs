class Solution {
    /**
     * Problem: Valid Palindrome
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/valid-palindrome
     * 
     * Description:
     * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
     * and removing all non-alphanumeric characters, it reads the same forward and backward.
     * 
     * Time Complexity: O(n) - where n is the length of the string
     * Space Complexity: O(n) - for the cleaned string and reversed string
     * 
     * @param {string} s - Input string
     * @return {boolean} - True if the string is a palindrome, false otherwise
     */
    isPalindrome(s) {
        // Convert to lowercase and remove non-alphanumeric characters
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        
        // Create reversed version
        let pal = s.split("").reverse().join("");
        
        // Compare original with reversed
        if (s === pal) {
            return true;
        }
        return false;
    }
}