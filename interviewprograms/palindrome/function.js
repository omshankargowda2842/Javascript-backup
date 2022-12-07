function checkPalindrome(){
    const string = "madam "
    let len = string.length;
    for (i=0; i<len/2;i++){
      if (string[i]!==string[len-1-i]){
          console.log("Not Palindrome")
      }
      else{
          console.log(" Palindrome")
     }
    }
 }
 checkPalindrome()