let number=10
function factorial(num){
    let fact=1
    for(i=1;i<=number;i++){
      fact=fact*i
    }
    return fact
}
 console.log(factorial(number))