class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // A valid tree in this context is a tree that has no cycle, and every leaf is connected(no unreachable node)
        // The recommended way to solve this is to use a union Find(Disjoint Set), but lets use bfs method first for the sake of practice

        // first check if number of edges is not equal to n-1, because for a valid tree of size n, the number of edges should be equal to n-1
        if(edges.length !== n-1) return false
         
         // Lets create a undirected graph array(each index represent a node) with array buckets containing nodes it connects to
         const graph = Array.from({length: n},()=>[])

         // Lets loop through edges and populate graph
        for(let [a,b] of edges){
            // since the nodes connect to each other both ways we have to add both nodes to each of their buckets
            graph[a].push(b)
            graph[b].push(a)
        }

        // Now lets initialize the queue
        const queue = [[0,-1]] // starting from node 0, parent is -1 at the start

        // lets create a set to track visited nodes. We use a set instead of a normal variable because it is a non directed graph, so it is possible for a node to be recorded more than once
        const visited = new Set()

        // add the first node (0) to the set
        visited.add(0)

       // initialize queue index so we don't need to pop nodes from queue
       let index = 0

       //use a while loop to iterate through queue
       while(index < queue.length){
        // record current node and progress index
        let [curr,parent] = queue[index++]
        
        // Now lets iterate through the neigbors of the current node
        // for each node(curr), it's neighbors should be it's parent and an unvisited node. If we find a visited node, it means there is a cycle
        for(let neighbor of graph[curr]){
             // check if neighbor is parent
             if(neighbor === parent) continue

             //check if neighbor has already been previously visited
             if(visited.has(neighbor)) return false  // it means there is a cycle

             // If get to this point, it means this neighbor is unvisited
             // Enqueue the neighbor to bfs queue(the current node will be it's parent)
             queue.push([neighbor,curr])
             // Mark the neighbor as visited
             visited.add(neighbor)
        }
       }
        
       // If we get to this point, it means there is o cycle
       // now to confirm if there is no unreachable node as well, we compare visited count to n
      return visited.size === n
    }
}
