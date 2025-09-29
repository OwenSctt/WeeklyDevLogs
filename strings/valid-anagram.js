class Solution {
    /**
     * Problem: Valid Anagram
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/valid-anagram
     * 
     * Description:
     * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
     * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
     * typically using all the original letters exactly once.
     * 
     * Time Complexity: O(n) - where n is the length of the strings
     * Space Complexity: O(1) - fixed size array for character counts
     * 
     * @param {string} s - First string
     * @param {string} t - Second string
     * @return {boolean} - True if t is an anagram of s
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const charCount = new Array(26).fill(0);
        
        // Count characters in s
        for (let i = 0; i < s.length; i++) {
            charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        
        // Subtract characters in t
        for (let i = 0; i < t.length; i++) {
            charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        
        // Check if all counts are zero
        for (let count of charCount) {
            if (count !== 0) return false;
        }
        
        return true;
    }
}
