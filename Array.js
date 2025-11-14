// palindrome
var isPalindrome = function (x) {
    x = x.toString()
    let i = 0;
    let j = x.length - 1
    console.log(x, x[i], x[j])
    while (i < j) {
        if (x[i] === x[j]) {
            i++;
            j--;
        } else {
            return false
        }
    }
    return true
};

// longest common prefix string amongst an array of strings.
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix === "") return ""
        }
    }
    return prefix
};
console.log("prefix: ", longestCommonPrefix(["flower", "flow", "flight"]))

// Two Sum
var twoSum = function (nums, target) {
    let sortedNums = [...nums]
    sortedNums.sort((a, b) => a - b)
    console.log(sortedNums)
    let i = 0
    let j = sortedNums.length - 1
    while (i < j) {
        if (sortedNums[i] + sortedNums[j] < target) {
            i++;
        } else if (sortedNums[i] + sortedNums[j] > target) {
            j--;
        } else {
            if(nums.indexOf(sortedNums[i]) === nums.indexOf(sortedNums[j])){
                let k = nums.indexOf(sortedNums[i])
                nums[k] = -1
                return [k, nums.indexOf(sortedNums[j])]
            }else{
                return [nums.indexOf(sortedNums[i]), nums.indexOf(sortedNums[j])]
            }
        }
    }
};
console.log("prefix: 1", twoSum([2, 7, 11, 15], 9))
console.log("prefix: 2", twoSum([3, 2, 4], 6))
console.log("prefix: 3", twoSum([3, 3], 6))

// Best time to buy and sell stock
var maxProfit = function(prices) {
    let min = Infinity
    let max = 0;
    for(let price of prices){
        min = Math.min(price, min)
        max = Math.max(price-min, max)
    }
    return max
};
console.log("1: ", maxProfit([7,1,5,3,6,4]))
console.log("2: ", maxProfit([7,6,4,3,1]))

// . Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    let end = 0;
    let start = 0;
    let maxLength = 0;
    const longestString = new Set()
    while(end < s.length){
        if(!longestString.has(s[end])){
            longestString.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, longestString.size)
        }else{
            longestString.delete(s[start])
            start++;
        }
    }
    return maxLength
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function(nums, k) {
    let newSet = new Set()
    for(let i = 0; i < nums.length; i++){
        if(newSet.has(nums[i])) return true
        newSet.add(nums[i])
        if(newSet.size > k){
            newSet.delete(nums[i-k])
        }
    }
    return false
};
// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false



/**
 * @param {string} s
 * @return {string}
 */
// 3438. Find Valid Pair of Adjacent Digits in String
var findValidPair = function(s) {
    let freq = {}
    for(let i of s){
        freq[i] = (freq[i] || 0 ) + 1
    }
    for(let i = 0; i < s.length-1; i++){
        let a = s[i]
        let b = s[i+1]
        if(parseInt(a) === freq[a] && parseInt(b) === freq[b] && a !== b){
            return a+b
        }
    }
    return ""
};

// Input: s = "2523533"
// Output: "23"

// Input: s = "221"
// Output: "21"

// Input: s = "22"
// Output: ""

// 697. Degree of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let freq = {}
    let first = {}
    let last = {}
    for(let i = 0; i < nums.length; i++){
        freq[nums[i]] = (freq[nums[i]] || 0) + 1
        if(first[nums[i]] === undefined){
            first[nums[i]] = i
        }
        last[nums[i]] = i
    }
    let degree = Math.max(...Object.values(freq))
    let min = Infinity
    for (let num of nums){
        if(freq[num] === degree){
            min = Math.min(min, last[num] - first[num] + 1)
        }
    }
    return min
};


// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


// 152. Maximum Product Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0]
    let minProd = nums[0]
    let result = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < 0){
            [maxProd, minProd] = [minProd, maxProd]
        }
        maxProd = Math.max(nums[i], maxProd*nums[i])
        minProd = Math.max(nums[i], minProd*nums[i])
        result = Math.max(maxProd, result)
    }
    return result
};

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.