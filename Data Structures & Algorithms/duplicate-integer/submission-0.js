class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // assign length variable
        const n = nums.length
        // check if n is 0
        if(n === 0) return false
        // lets use a hash map
        const map = {}
        // iterate through nums and fill map
        for(let i=0;i<n;i++){
            map[nums[i]] = (map[nums[i]] || 0) + 1
            // check if map[nums[i]] is greater than 1, if yes, return true
            if(map[nums[i]] > 1) return true
        }

        return false
    }
}
