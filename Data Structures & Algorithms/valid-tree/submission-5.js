class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // A valid tree in this context is a tree that has no cycle, and every leaf is connected(no unreachable node)
        // Lets use a Union-Find(Disjointed Set Union)
        // The logic behind a union find is that we use 2 helper functions(a find function and a union function).
        // The find function is a recursive function that finds the main root parent of a node
        // The union function compares the finded root for 2 nodes, checks for a cycle and merges them(making root of one node the parent of the other)

        // check if we can exit early
        if(edges.length !== n-1) return false

        // we need a parent where each index represents a node and the value represents it's parent
        const parent = Array.from({length:n},(_,i)=>i)

        // Create Find function
        function find(node){
            // base case when we are at the root
            if(parent[node] === node) return node

            // Else traverse downwards and compress the parent as we proceed. Compressing the parent means each processed node now points directly to its main root, making subsequent finding faster
            // At the begining, all nodes are roots of themselves, but at the end of finding and union(merging) the edges iteratively, all nodes will have the same parent root
            return parent[node] = find(parent[node])
        }

        // Create Union function
        function union(a,b){
            // find root of a and b
            let rootA = find(a)
            let rootB = find(b)

            // compare roots
            // for a valid tree, nodes in each edge being processed should not already be connected to the same root. If thats the case, it means there is a cycle
            if(rootA === rootB){
                return false
            }

            // merge nodes, then return true
            parent[rootA] = rootB

            return true
        }

        // Now iterate through the edges and for each edge, check if union is possible
        for(let [a,b] of edges){
            if(!union(a,b)) return false
        }

        // this is the end of the iteration.If we get here without finding a cycle, return true
        return true
    }
}
