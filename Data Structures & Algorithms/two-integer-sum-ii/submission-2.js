class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // lets solve this with 2 pointers

        // assign pointers
        let start =0
        let end = numbers.length-1

        // traverse numbers array
        while(start < end){
            // calc sum
            let sum = numbers[start] + numbers[end]
            
            // check if sum is equal to target, if not progress pointers according
            if(sum === target){
                return [start+1,end+1]
            }else if(sum < target){
                 start++
            }else{
                end--
            }
        }
    }
}
