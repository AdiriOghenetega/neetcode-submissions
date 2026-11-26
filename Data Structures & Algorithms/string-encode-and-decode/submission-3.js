class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Since we can't just use a random character as a delimiter/separator because of the possibility of that character being in a string hence making decoding impossible, we have to find a way to be able to know the length of every string upfront, so at the start of a string we can just slice out the string of the length. But then what if the string has a number at the front that can corrupt our length count. For that we can add a delimiter after the length, so we know that for every separate string, the first characters before the chosen delimiter is the length, then we splice the string of length after the delimiter
        let res = ""

        for(let str of strs){
            res += str.length.toString() + "#" + str
        }
       
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []

        // lets use 2 pointers(fast and slow) to track positions in the encoded string while 
        let slow = 0

        while(slow < str.length){
            // initialize fast pointer
            let fast = slow

            // progress fast pointer to discover length of string in view
            while(str[fast] !== '#') fast++

            let length = parseInt(str.slice(slow,fast))
            
            // derive string of length and push to result array
            res.push(str.slice(fast+1,length+fast+1))

            // progress pointers
            slow = fast+1+length
        }

        return res
    }
}
