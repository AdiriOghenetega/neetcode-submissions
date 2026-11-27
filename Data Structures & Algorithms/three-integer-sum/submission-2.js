class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // The strategy is to traverse the nums array, keep one num constant at every point and use 2 pointers to traverse the rest of the array
        // first lets sort nums so we easily work with 2 pointers
        nums.sort((a,b)=>a-b)

        // assign length variable
        const n = nums.length

        // initialize result array to hold all triplets
        const res = []

        // traverse nums
        for(let i=0;i<n-2;i++){
            // avoid duplicates
            if(i > 0 && nums[i] === nums[i-1]) continue

            // prune
            // if the smallest possible sum at this point is greater than 0, there is no need to continue traversing
            if((nums[i]+nums[i+1]+nums[i+2]) > 0) break
            // if the largest possible sum at this point is lesser than 0, move on to a height startpoint
            if((nums[i]+nums[n-1]+nums[n-2]) < 0) continue

            // now lets pick a constant
            let constant = nums[i]
            // assign 2 pointers
            let start = i+1
            let end = n-1
            // traverse rest of nums
            while(start < end){
                // calc sum
                let sum = constant + nums[start] + nums[end]

                if(sum === 0){
                    // push triplet to res
                    res.push([constant,nums[start],nums[end]])
                    // progress pointers
                    start++
                    end--
                    // check for duplicates
                    while(start < end && nums[start] === nums[start-1])start++
                    while(start < end && nums[end] === nums[end+1])end--
                }else if(sum < 0){
                    start++
                }else{
                    end--
                }
            }
        }

        return res
    }
}
