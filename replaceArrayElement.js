// time complexity Big-o(n)


function replaceArrayElement(inputArray,elementToReplace,substrationElem){

  inputArray.forEach((item,index)=>{
  if(item===elementToReplace){
    inputArray[index]=substrationElem
  }
  });

  return inputArray

}


console.log(replaceArrayElement([1,2,1],1,3))