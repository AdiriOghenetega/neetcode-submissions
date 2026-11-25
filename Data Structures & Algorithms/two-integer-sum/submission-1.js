class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // lets use a hash map approach
        // The strategy is that, for every num of nums, we store the num and its index in a hashmap/object. So when we find another num of nums that its diff with target is equal to an existing number in the map, we know we have our answer
        
        const map = {}

        // now lets traverse through nums to find our answer
        for(let i=0;i<nums.length;i++){
            // calc diff
            let diff = target - nums[i]
            // check if diff exists
            let seen = map[diff]
            if(seen !== undefined) return [seen,i]
            // record current num and its index on the map
            map[nums[i]] = i
        }

    }
}
