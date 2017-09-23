/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rLen = board.length,
        cLen = board[0].length;

    let charBeg = word.charAt(0);
        
    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            if (board[i][j] === charBeg) {
                board[i][j] = '*';
                if (bfs(1, word, i, j, board, rLen, cLen)) {
                    return true;
                }
                board[i][j] = charBeg;
            }
        }
    }
    
    return false;
};


function bfs(index, word, i, j, board, rLen, cLen) {
    if (index === word.length) {
        return true;
    }
    
    var ch = word.charAt(index);
    
    if (i - 1 >= 0 && board[i - 1][j] === ch) {
        board[i - 1][j] = '*';
        
        if (bfs(index + 1, word, i - 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i - 1][j] = ch;
    }
    
    if (j - 1 >= 0 && board[i][j - 1] === ch) {
        board[i][j - 1] = '*';
        
        if (bfs(index + 1, word, i, j - 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j - 1] = ch;
    } 
    
    if (i + 1 < rLen && board[i + 1][j] === ch) {
        board[i + 1][j] = '*';
        
        if (bfs(index + 1, word, i + 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i + 1][j] = ch;
    }
    
    if (j + 1 < cLen && board[i][j + 1] === ch) {
        board[i][j + 1] = '*';
        
        if (bfs(index + 1, word, i, j + 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j + 1] = ch;
    }
    
}