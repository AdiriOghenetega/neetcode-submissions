class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       // The strategy is to track the max height from the left and from the right, then use a left and right pointer to traverse the heights.
       // At each point, the least max between the left and right max is considered the bottleneck and the corresponding pointer is prioritised
       // We track a global sum that we update by comparing the left height with the leftMax and the right height with the rightMax, depending on who is being prioritised at a certain point

       // assign pointers and trackers
       let left = 0
       let right = height.length-1
       let maxLeft = 0
       let maxRight = 0
       let sum = 0 

       // traverse height
       while(left < right){
        // update max trackers
        maxLeft = Math.max(height[left],maxLeft)
        maxRight = Math.max(height[right],maxRight)

        // check for bottleneck and progress pointers accordingly
        if(maxLeft <= maxRight){
            // that means left is the bottleneck
            // calc sum at current left then progress left
            sum += maxLeft - height[left]
            left++
        }else{
            sum += maxRight - height[right]
            right--
        }
       }

       return sum
    }
}