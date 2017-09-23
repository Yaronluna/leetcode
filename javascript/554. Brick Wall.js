/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    if(wall === null || wall.length < 1){
        return 0;
    }
    let bricks = {}, max = 0;
    for (let i = 0; i < wall.length; i++) {
        let curr = 0;
        for (let j = 0; j < wall[i].length-1; j++) {
            curr += wall[i][j];
            if(bricks[curr] === undefined){
                bricks[curr] = 1;
            }else{
                bricks[curr]++;                
            }
            max = Math.max(max,bricks[curr]);

        }    
    }
    return wall.length-max;
    
};