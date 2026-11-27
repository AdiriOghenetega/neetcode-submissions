class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // lets use a 2 pointer to solve this problem

        // assign pointers
        let start = 0
        let end = s.length-1

        // traverse string
        while(start < end){
            // check if either pointers are pointing to a non alphanumeric char
            if(!this.isAlphanumeric(s[start])){
                start++
                continue
            }
            if(!this.isAlphanumeric(s[end])){
                end--
                continue
            }
           
            // now compare chars at both points
            if(s[start].toLowerCase() !== s[end].toLowerCase()) return false
            // progress pointers
            start++
            end--
        }

        return true
    }

    isAlphanumeric(char){
        // derive charCode of char
        let charCode = char.charCodeAt(0)
        
        return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) || (charCode >= 48 && charCode <= 57)
    }
}
