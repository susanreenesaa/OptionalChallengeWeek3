const findTheMissing = (target) => {
    // final result list
    arraySort(target);
    let newArray=[...new Set(target)];
    let missingValues = [];
    
    // array will go from min to max value present in the array
    const min = newArray[0];
    const max = newArray[newArray.length - 1];
    
    // will maintain the track of index of newArray array
    // will start from 2nd element of array because we need a no. to subtract from
    let pivotIndex = 1;
    
    for (let i = min; i < max; i++) {
    
        let pivotValue = newArray[pivotIndex];
    
        let diff = pivotValue - i;
    
        if (diff > 0) {
            if (i === newArray[pivotIndex - 1])
                i++;
    
             missingValues.push(i);
        }
        else {
            pivotIndex++;
        }
    }
    return missingValues; 
}
function arraySort(m){
    for (i=0; i<m.length; i++){
    for(var j=i+1; j < m.length; j++){
        if( m[j]< m[i]){
            
            [m[j], m[i]] = [parseInt(m[i]), parseInt(m[j])];

        }
         }
}
return m
}
var x =[0,4,6,8];
var y=[-2,0,6,-4,3,3,3,1];
console.log( "The array is  " + x + " missing numbers are:  " + findTheMissing(x));
console.log("The array is  " + arraySort(y) + " missing numbers are:  " + findTheMissing(y));
