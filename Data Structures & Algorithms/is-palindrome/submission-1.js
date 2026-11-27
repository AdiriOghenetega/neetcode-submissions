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
        // derive charCode boundaries
        const a = 'a'.charCodeAt(0)
        const z = 'z'.charCodeAt(0)
        const A = 'A'.charCodeAt(0)
        const Z = 'Z'.charCodeAt(0)
        const zero = '0'.charCodeAt(0)
        const nine = '9'.charCodeAt(0)

        // derive charCode of char
        let charCode = char.charCodeAt(0)
        
        return (charCode >= a && charCode <= z) || (charCode >= A && charCode <= Z) || (charCode >= zero && charCode <= nine)
    }
}
