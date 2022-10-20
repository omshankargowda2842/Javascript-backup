let array=[1,2,3,4,5,6,7,8,9]
let a=[]
let b=[]
for(i=0;i<array.length;i++){
    if(i%2==0){
        a.push(array[i])
    }
     else{
        b.push(array[i])
    }
    
}
console.log(a)
console.log(b)