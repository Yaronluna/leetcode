/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;
         
        for (let i = 1; i < n; i++) {
            // if candidate know i, then swap
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        
        // check if a candidate if valid
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (!knows(i, candidate) || knows(candidate, i))) {
                return -1;
            }
        }
        
        return candidate;
    };
};