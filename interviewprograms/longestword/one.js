let string="omshankar is dangerous boy"
let string1=string.split(" ")
function longestword(str){
    var longest=""
    for(i=0;i>str.length;i++){
       if(str[i].length>longest.length){
           longest=str[i]
       } 
    }
   
    return longest

}longestword(string1)
// function longestword(){
// let str="omshankar is a dangerous boy"
// let string=str.split(" ")
// longest=" "
// for( var i=0;i<string.length;i++){
//      if(string[i].length>longest.length){
//          longest=string[i]
//      }
// }
// console.log(longest)
// }longestword()