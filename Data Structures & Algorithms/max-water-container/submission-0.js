class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // lets use a greedy approach
        // We will use 2 pointers to track positions on opposite end of the container, and for every position we calc the maximum amount of water, update a globally tracked max volume, and progress the pointers using a greedy approach(the smaller height is considered the bottleneck, so we progress it)

        // initialize tracker
        let maxVol = -Infinity

        // assign pointers
        let start = 0
        let end = heights.length-1

        // traverse heights
        while(start < end){
            // calc volume
            let vol = (end - start) * Math.min(heights[start],heights[end])

            // update max volume
            maxVol = Math.max(maxVol,vol)

            // progress pointers
            if(heights[start] < heights[end]){
                start++
            }else{
                end--
            }
        }

        return maxVol
    }
}
