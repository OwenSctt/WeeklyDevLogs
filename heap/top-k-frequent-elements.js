class Solution {
    /**
     * Problem: Top K Frequent Elements
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/top-k-frequent-elements
     * 
     * Description:
     * Given an integer array nums and an integer k, return the k most frequent elements.
     * You may return the answer in any order.
     * 
     * Time Complexity: O(n log k) - heap operations
     * Space Complexity: O(n) - hash map and heap
     * 
     * @param {number[]} nums - Array of integers
     * @param {number} k - Number of most frequent elements to return
     * @return {number[]} - Array of k most frequent elements
     */
    topKFrequent(nums, k) {
        // Count frequency of each element
        const freqMap = new Map();
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        
        // Create min heap based on frequency
        const heap = [];
        
        for (const [num, freq] of freqMap) {
            if (heap.length < k) {
                heap.push([num, freq]);
                heapifyUp(heap, heap.length - 1);
            } else if (freq > heap[0][1]) {
                heap[0] = [num, freq];
                heapifyDown(heap, 0);
            }
        }
        
        return heap.map(item => item[0]);
    }
}

// Helper functions for min heap
function heapifyUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[index][1] >= heap[parentIndex][1]) break;
        
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
    }
}

function heapifyDown(heap, index) {
    while (true) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        
        if (left < heap.length && heap[left][1] < heap[smallest][1]) {
            smallest = left;
        }
        
        if (right < heap.length && heap[right][1] < heap[smallest][1]) {
            smallest = right;
        }
        
        if (smallest === index) break;
        
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}
