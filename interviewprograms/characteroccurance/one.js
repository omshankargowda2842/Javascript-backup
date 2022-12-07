function charoccurance(str1,letter){
var str=str1.toLowerCase() 
var count= 0;

for( var i=0;i<str.length;i++){
if(str[i]===letter){
   
   count=count+1
}
}
console.log(count)
return count
}charoccurance("Omshnkrmnjskgjscbksdbjka","a")
// function characterOccurance(str1,letter){
//    var  str=str1.toLowerCase()
//     let count =0;
//    for(var i=0; i<str.length-1; i++){
//      if(str.charAt(i)===letter)
//        {
//          count++
//        }
//    }
//    console.log(count)
//    return count
//  }
//  characterOccurance("PPriyapri", "p")