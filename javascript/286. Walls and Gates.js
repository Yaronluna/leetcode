/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let dfs = function(rooms, i, j, d){
    if(i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < d){
      return;
    }
    rooms[i][j] = d;
    dfs(rooms, i - 1, j, d + 1);
    dfs(rooms, i + 1, j, d + 1);
    dfs(rooms, i, j - 1, d + 1);
    dfs(rooms, i, j + 1, d + 1);
  }
  for (let i = 0; i < rooms.length; i++){
    for (let j = 0; j < rooms[0].length; j++){
      if(rooms[i][j] == 0){
        dfs(rooms, i, j, 0)
      }
    }
  }
    
};