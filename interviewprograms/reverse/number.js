let number=123456
let num=number.toString()
reversenum=""
for(var i=num.length-1;i>=0;i--){
    reversenum=reversenum+num[i]
}
console.log(reversenum)