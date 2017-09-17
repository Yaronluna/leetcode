/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length == 0 ){
        return 0;
    }
    let m = matrix.length, n = matrix[0].length, result = 0;
    let b = [];
    for(let i = 0; i <= m; i++ ){
        let bt = [];
        for(let j = 0; j <= n; j++){
            bt[j] = 0;
        }
        b[i] = bt;
    }
    for(let i = 1; i <= m; i++ ){
        for(let j = 1; j <= n; j++){
            if(matrix[i-1][j-1] == '1') {
                b[i][j] = Math.min(Math.min(b[i][j-1] , b[i-1][j-1]), b[i-1][j]) + 1;
                result = Math.max(b[i][j], result);
            }
        }
    }
    return result*result;
    
};