/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    if(n = 0 || logs === null){
        return [];
    }
    let res = new Array(n);
    let stack = [];
    let prevTime = 0;
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i];
        let command = log.split(":");
        if(stack.length > 0){
            if(res[stack[stack.length-1]] === undefined){
               res[stack[stack.length-1]] = 0;
            }
            res[stack[stack.length-1]] += parseInt(command[2]) - prevTime; 
        }
        prevTime = parseInt(command[2]);
        if (command[1] == "start"){
            stack.push(parseInt(command[0]));
        } else {
            res[stack.pop()]++;
            prevTime++;
        }
        
    }
    return res;
};
