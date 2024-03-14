function sumOfTwoInput(...input){
    let result=0

   input.forEach((item,index)=>{
   console.log(item)
   result +=item
   })
return result
   
}

console.log(sumOfTwoInput(1,2,3))
