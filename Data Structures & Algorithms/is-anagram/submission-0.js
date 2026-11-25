class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // first lets check that s and t have the same length, if not return false
        if(s.length !== t.length) return false

        // lets use an alphabet count array to track the characters
        const counter = new Array(26).fill(0)

        // initialize charcode of character 'a'
        const a = "a".charCodeAt(0)

        // now iterate through s and t, and for each position increment the s char in the counter array and decrement the t char in the counter array
        for(let i=0;i<s.length;i++){
            let sCharCode = s.charCodeAt(i)
            let tCharCode = t.charCodeAt(i)

            // increment counter
            counter[sCharCode - a]++
            counter[tCharCode - a]--
        }

        // iterate through the counter, if all positions remain 0, it means we have an anagram(they cancelled out each other), else return false
        for(let i=0;i<26;i++){
            if(counter[i] > 0 ) return false
        }

        return true
    }
}
