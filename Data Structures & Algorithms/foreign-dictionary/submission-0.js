class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        // The problem statement in simpler words: There is an alien language, we are given some words from the alien language's dictionary of words, these words are ordered lexicographically(similar to how words a ordered in the english dictionary but this time it is according to the alien languages alphabet order, not the english language's alphabet order)
        // Since the words given are claimed to be in order of their appearance in the dictionary, we will use the words order to deduce the alien languages alphabetical order
        // The strategy is to first compare adjacent words in the words list, deduce which first position/letter (from the left) in both strings they start to differ and, group those letters together in a directed graph(letter from first word from the left will be the prerequisite/will be visited first in he dictionary before the letter on the second word)
        // If we find a situation where we find no letter where both char differ and then the first word is longer than the second word, we can conclude that it is not a valid dictionary(the shorter word should come before the longer one if they both contain no differences for the lenth of the shorter word), then return ""
        // When we have a graph of all the letters and their prerequisites, we use Kahn's algorithm(bfs with in-degree counter) to find the order with which all the letters in the graph are visited, whilst looking out for a cycle
        // If there is a cycle in the graph, we return "", it means the words list is not not sorted lexicographically as claimed

        // Since we are not given the number of total letters present in the list of words, lets loop through the letters in the words list and create a bucket for each letter where their dependents will be recorded, and then map each letter to their in-degree count(the amount of letters they depend on)

        const graph = new Map()
        const inDegree = new Map()

        for(let word of words){
            for(let letter of word){
                // map letter to dependents(letters that depend on it)
                if(!graph.has(letter)) graph.set(letter,new Set())
                // map letter to number of letters they depend on. We will initialize as zero first
                if(!inDegree.has(letter)) inDegree.set(letter,0)
            }
        }

        // now lets compare adjacent words in the wordlist and populate the graph and indegree maps according
        for(let i=0;i<words.length-1;i++){
            let word1 = words[i]
            let word2 = words[i+1]

            // lets derive minLength(we need to check for difference while both lengths are valid)
            let minLength = Math.min(word1.length,word2.length)

            // Lets track if a difference is found, so we can know if the words list is sorted lexicographically as claimed
            let diffFound = false

            // now lets compare chars in word1 and word2
            for(let j=0;j<minLength;j++){
                let c1 = word1[j]
                let c2 = word2[j]
                
                if(c1 !== c2){

                    // difference has been found
                    diffFound = true

                    // add c2 to c1's dependents set and increment c2 prerequisite count by 1 if c1's dependents list does not already have c2
                    if(!graph.get(c1).has(c2)){
                     graph.get(c1).add(c2)
                     inDegree.set(c2,inDegree.get(c2) + 1)
                    }

                    break // we only need the first difference in char
                }
            }

            // if diff is not found after comparing word1 and word2, and word1 is longer than word2 return ""
            if(!diffFound && (word1.length > word2.length)){
                return ""
            }
        }

        // At this point we already have our graph and inDegree maps populated, now lets use Kahn's Algorithm(bfs + in-degree counter) to find the order of the chars
        const queue = []

        // Lets iterate through the indegree map and enqueue all letters with no prerequisite, depends on 0 chars
        for(let [key,val] of inDegree){
            if(val === 0) queue.push(key)
        }

        // now lets initialize our queueIndex
        let index = 0

        // use while loop to iterate through queue
        while(index < queue.length){
            // record current char and progress index
            let currChar = queue[index++]

            // lets iterate through dependents of char, decrement their indegree count and enqueue chars whose indegree count equates to zero after the decrement
            for(let dep of graph.get(currChar)){
                inDegree.set(dep,inDegree.get(dep) - 1)
                if(inDegree.get(dep) === 0) queue.push(dep)
            }
        }

        // To check if there was a cycle or if there are unreachable chars in the graph, lets compare the number of chars in the queue to the number of chars in the graph(keys)
        return queue.length === graph.size ? queue.join(""):""
    }
}
