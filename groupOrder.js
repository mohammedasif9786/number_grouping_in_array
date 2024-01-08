let numberGrouping = (input,gap) => {
  
    let [finalArr,inArr1,inArr2] =[[],[],[]]

    for(let i =0 ;i<input.length ; i++ ){
        
        if(input[i]%2 === 0){ 
            inArr1.push(input[i])
            if(inArr1.length === gap){
                finalArr.push(inArr1)
                inArr1 =[]
            }
        }
        else{
              inArr2.push(input[i])
              if(inArr2.length === gap){
                finalArr.push(inArr2)
                inArr2 =[]
              }
        }
    }
    console.log(finalArr)

}
numberGrouping([1,2,3,4,5,6],2)