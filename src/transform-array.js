module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw new Error();
    }

    let resultArray = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == '--discard-next'){
            if(i + 1 < arr.length){
                i++;
            }
            continue;
        }
        
        if(arr[i] == '--discard-prev'){
            if(i  > 0){
               resultArray.pop(); 
            }
            continue;
        }
        if(arr[i] == '--double-next'){
            if(i + 1 < arr.length){
                resultArray.push(arr[i+1]);  
            }
            continue;
        }
        if(arr[i] == '--double-prev'){
            if(i - 1 > 0){
                resultArray.push(arr[i-1])
            }
            continue;
        }
        resultArray.push(arr[i]);
    }
    return resultArray;
};
