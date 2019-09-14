const findTheMissing = (target) => {
    // final result list
    arraySort(target);
    newArray=[...new Set(target)];
    let result = [];
    
    // array will go from min to max value present in the array
    const min = newArray[0];
    const max = newArray[newArray.length - 1];
    
    // will maintain the track of index of newArray array
    // will start from 2nd element of array because we need a no. to subsctract from
    let pivotIndex = 1;
    
    for (let index = min; index < max; index++) {
    
        // value to the index
        let pivotValue = newArray[pivotIndex];
    
        // dif of the value
        let diff = pivotValue - index;
    
        // diff means its time to move the pivot to next :P
        if (diff > 0) {
            // not going to current index at exists in the newArray array
            if (index === newArray[pivotIndex - 1])
                index++;
    
            // YO!! WE FOUND HE MISSING
            result.push(index);
        }
        else {
            pivotIndex++;
        }
    }
    return result; 
}
function arraySort(m){
    for (i=0; i<m.length; i++){
    for(var j=i+1; j < m.length; j++){
        if( m[j]< m[i]){
            temp=parseInt(m[j]);
            m[j]=parseInt(m[i]);
            m[i]=temp;
        }
         }
}
return m
}
var x =[0,4,6,8];
var y=[-2,0,6,-4,3,3,3,1];
console.log( "The array is  " + x + " missing numbers are:  " + findTheMissing(x));
console.log("The array is  " + arraySort(y) + " missing numbers are:  " + findTheMissing(y));
