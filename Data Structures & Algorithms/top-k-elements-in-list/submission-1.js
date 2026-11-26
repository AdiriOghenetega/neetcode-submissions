class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Lets use a hash map to collect the frequenxy of each num
        // then build an array bucket where the index reflects the frequency and the value is the corresponding num
        // next we traverse through the bucket from right to left k times, and store the values in a result array
        // Lastly return the result array
        // Pay attention to 2 possible edge cases. 
        // case 1, when all positions of nums carries the same number, its frequency will be nums.length exactly. So when creating the bucket, if you create a bucket of exactly nums.length and try to store the frequency in a 0-indexed scenario, it will be referencing a non-existing bucket, so use n + 1 buckets
        // case 2, when 2 nums have the same frequency, they may cancel each other out unless the bucket is an array where we append the nums

        // assign length variable
        const n = nums.length
        
        // create map
        let freqMap = new Map()

        // traverse nums and populate map
        for(let i=0;i<n;i++){
            freqMap.set(nums[i],(freqMap.get(nums[i]) || 0 ) + 1)
        }
       
        // create bucket
        const bucket =  Array.from({length:n+1},()=> new Array())
        
        // populate bucket
        for(let [key,value] of freqMap){
            bucket[value].push(key)
        }
        
        // initialize result array
        const result = []

        // traverse bucket
        for(let i=bucket.length-1;i>=0 && result.length < k ; i--){
            if(bucket[i].length > 0) result.push(...bucket[i])
        }
        
        return result
    }
}
