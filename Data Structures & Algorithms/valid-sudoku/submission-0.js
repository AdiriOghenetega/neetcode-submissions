class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // The strategy is to traverse the board, record details of every seen position and check if an identitical position has been seen before. If yes, then the sudoku is not valid
        // If we are able to traverse the board without returning false, it means the sudoku is valid, hence we return true

        // assign length variables
        let rowLen = board.length
        let colLen = board[0].length

        // initialize set to store position details
        const seen = new Set()

        // traverse board
        for(let row=0;row<rowLen;row++){
            for(let col=0;col<colLen;col++){
                let val = board[row][col]
                
                // skip empty cells
                if(val === ".") continue

                // compile keys/info for position
                let rowKey = `row-${row}-${val}`
                let colKey = `col-${col}-${val}`
                let boxKey = `box-${Math.floor(row/3)}-${Math.floor(col/3)}-${val}`
                
                // check if the keys are already seen
                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) return false

                // record keys
                seen.add(rowKey)
                seen.add(colKey)
                seen.add(boxKey)
            }
        }

        return true
    }
}
