let name1="omshankar"
let name2="shankarom"
 let a=name1.toLocaleLowerCase().split("").sort().join("")
 let b=name2.toLocaleLowerCase().split("").sort().join("")
 if(a==b){
    console.log("its a anagram")
}else{
    console.log("not a anagram")
}