/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if(s === null || s.length == 0){
    return false;
  }
  let arr = s.split(""); 
  let start = 0, end = arr.length - 1;
  let del = false;
  let front = "";
  let back = ""
  while(start <= end){
    if (arr[start] == arr[end]){
      front += arr[start];
      back =  arr[end]+back;
      start++;
      end--;
      continue;
    }
    if(del == true){
      return false;
    }
    if(arr[start+1] == arr[end] && (start+1 == end || arr[start+2] == arr[end-1])){
      del=true;
      start++;
      continue;
    }
    if(arr[start] == arr[end-1] && ( start == end-1 || arr[start+1] == arr[end-2])){
      del=true;
      end--;
      continue;
    }
    return false;
  }


  return true;  
};