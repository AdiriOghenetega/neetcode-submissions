class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // The startegy is to first compute the product from the left to the right and store in a new array, then on that new array compute product from right to left, whislt tracking the product to the right in a variable
        // at the end we return the new array

        // assign length variable
        const n = nums.length

        // create new array
        const res = new Array(n).fill(1)

        // traverse nums starting from index 1(since the product to the left for the first index is 1 by default)
        for(let i=1;i<n;i++){
            res[i] = res[i-1] * nums[i-1]
        }

        // now lets initialize a product to the right, and compute product from right to left
        let rightProduct = 1

        for(let i=n-1;i>=0;i--){
            res[i] *= rightProduct

            // update rightProduct
            rightProduct *= nums[i]
        }

        return res
    }
}
