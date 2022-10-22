var string="I love my india,country"
var output=""
function reversestr(str){
    
for( var i=str.length-1;i>=0;i--){
 output=output+str[i]
}
return output
} console.log(reversestr(string))