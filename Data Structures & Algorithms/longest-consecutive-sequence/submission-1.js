class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      // check if nums.length is 0
      const n = nums.length
      if(n === 0) return 0

      // The strategy is put all num in nums into a set so we can easily query their existence in constant time
      // Then for each num, we check if it is possibly a start of a consecutive sequence. A num is a possible consecutive sequence if num - 1 is not in the set(that means it is not an inner part of an existing consecutive sequence)
      // When we find a possible start of a consecutive sequence, we increment it by one and keep track of the length it gets to while its increments are present in the set
      // At the end we return the max length

      // create and populate set
      const seen = new Set(nums)
       
      // initialize maxLength variable
      let maxLen = 0
      
      // traverse nums array
      for(let i=0;i<nums.length;i++){
        // check if num is a possible start of a consecutive sequence
        if(!seen.has(nums[i]-1)){
           // find out how long its consecutive sequence is
        let len = 1
        while(seen.has(nums[i]+len)){
            // increment len
            len++
        }

        // update maxLen
        maxLen = Math.max(len,maxLen)
        }
      }
     
     return maxLen
    }
}
