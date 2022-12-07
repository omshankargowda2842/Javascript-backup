let name="madam"
 let len=name.length
 
 for(i=0;i<len/2;i++){
if(name[i]==name[len-1-i]){
    console.log("palindrome")
}else{
    console.log("not a palindrome")
}
 }