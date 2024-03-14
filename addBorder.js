function addBorder(arr=[]){
    let wall='*'.repeat(arr[0].length+2)
    console.log(wall ,'this is the wall')
    arr.unshift(wall)
    arr.push(wall)
    arr.forEach((item,index)=>{
        if(index>0&&index<arr.length-1){
          arr[index]= '*'.concat(item,'*')
        }
    })



    console.log(arr)
}

addBorder(['abc','ded'])