// Valid Anagram
var isAnagram = function (s, t) {
    if (s?.length !== t?.length) return;
    let obj = {}
    for (let i of s) {
        obj[i] = (obj[i] || 0) + 1
    }
    for (let i of t) {
        if (!obj[i]) return false
        obj[i]--
    }
    return true
};
console.log("1: ", isAnagram("anagram", "nagaram"))
console.log("2: ", isAnagram("rat", "car"))

// Group anagram

// var groupAnagrams = function (strs) {
//     let obj = {}
//     let output = []
//     let k = 0
//     for (let i = 0; i < strs.length-1; i++) {
//         output[k] = strs[i]
//         for(let j= i+1; j < strs.length; j++){
//             if(isAnagram(output[k][i], strs[j])){
//                 obj[output[k][i]] = (obj[output[k][i]] || 0) + 1
//             }
//         }
//     }
//     console.log(obj)
//     return output
// };
// console.log("1: ", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// console.log("2: ", groupAnagrams([""]))
// console.log("3: ", groupAnagrams(["a"]))


