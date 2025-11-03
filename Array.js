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