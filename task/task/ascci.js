var str="XTD"
var arr=[];
var arr1=[]
for(i=0;i<str.length;i++){
    arr.push(str.charAt(i).charCodeAt(0))
}

// incrementing current +1 using forEach()
arr.forEach((x)=>{
 arr1.push(x+1)
 })
 console.log(arr1)
//  converting numbers to characters
let text=String.fromCharCode(89, 85, 69);
output=text.split("").reverse().join("")
console.log(output)