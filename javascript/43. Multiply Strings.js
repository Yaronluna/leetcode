/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === null || num2 === null){
    return null;
  }
  if(num1 == "0" || num2 == "0"){
    return "0";
  }
  
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");
  let prod = [];
  let carry = 0;
  for(let i = 0; i < (num1.length+num2.length+1); i++){
    prod[i] = 0;
  }

  for (let i = 0; i < num2.length; i++){
    let a = parseInt(num2.charAt(i)) || 0;
    for (let j = 0; j < num1.length; j++){
      let b = parseInt(num1.charAt(j)) || 0;
      let temp = prod[i+j] + a*b%10;
        
      prod[i+j] = temp % 10;
      carry = Math.floor( temp/10) || 0;
        
      temp = prod[i+j+1] + Math.floor( a*b/10 ) + carry
     
      prod[i+j+1] = temp % 10;
      carry = Math.floor( temp/10) || 0;
        
      prod[i+j+2] += carry;
    }
    
  }
  for(let i = (num1.length+num2.length); i >= 0; i--){
    if( prod[i] == 0){
       prod[i] = "";
    }else{
       break;
    }
   
  }  
    
  return prod.reverse().join("");

};