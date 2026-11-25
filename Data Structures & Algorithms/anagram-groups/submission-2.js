class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // The optimal solution is to derive a cannonical signature for each str in strs and use the signature as key to group then in a hashmap, then finally return the values of the map as an array
        // We can derive the cannonical signature using sort(sort the str.e.g from 'tan' to 'ant') or use a counter(26 length 0-indexed array) for each string

        // lets initialize map
        const groups = new Map()

        // traverse strs, create cannonical sig/key, group in hashmap
        for(let i=0;i<strs.length;i++){
            // create cannonical sig/key using sort
            // let key = strs[i].split("").sort().join("")

            // create cannonical sig/key using char counter
            const counter = new Array(26).fill(0)
            // initialize base charCode
            const a = 'a'.charCodeAt(0)
            // populate counter for current str
            for(let j=0;j<strs[i].length;j++){
                let currCharCode = strs[i].charCodeAt(j)
                counter[currCharCode-a]++
            }
            // derive key
            let key = counter.join('#')
            
            // check if key already exists in map
            if(!groups.has(key)) groups.set(key,[])
            // app key to group
            groups.get(key).push(strs[i])
        }

        //return groups.values
        return Array.from(groups.values())
    }

}
