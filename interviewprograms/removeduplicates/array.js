var array=["John","Merry","Ada","Merry","Michael","om","om"];  
function duplicates(array){
    let collect=[]
    array.forEach(value=>{
        if(!collect.includes(value)){
            collect.push(value)
        }
    })
    return collect
}console.log(duplicates(array));  