let arr="ABDEF"
let a=arr.charCodeAt(0)
let b=arr.charCodeAt(1)
let c=arr.charCodeAt(2)
let d=arr.charCodeAt(3)
let e=arr.charCodeAt(4)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log("logic adding +1")
let char=[65,66,68,69,70]
 char.forEach(x=>
    console.log(x+1)
)
console.log("converting to  characters and reversing")
let text = String.fromCharCode(66, 67, 69, 70, 71);
let original=text.split("").reverse().join("")
console.log(original)
