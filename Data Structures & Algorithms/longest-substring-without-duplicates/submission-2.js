class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Lets solve this using a sliding window whilst tracking the longest substring encountered so far, and the chars in the current window
        // we can use a hashmap to track the chars in the window

        // initialize hashmap
        const map = new Map()

        // assign pointers
        let slow = 0
        let fast = 0

        // initialize tracker
        let maxLen = 0
        let length = 0

        // traverse string
        while(fast < s.length){
            // increment length
            length++

            // check if char exists in window
            while((slow <= fast) && map.has(s[fast]) && (map.get(s[fast]) > 0)){
                
                // decrement char at slow in map
                map.set(s[slow],map.get(s[slow])-1)

                // shrink window
                slow++

                // decrement length
                length--
            }

            // add char at fast to map
            map.set(s[fast],(map.get(s[fast]) || 0) + 1)

            // update maxLength
            maxLen = Math.max(length,maxLen)
            
            // expand window
            fast++
        }

        return maxLen
    }
}
