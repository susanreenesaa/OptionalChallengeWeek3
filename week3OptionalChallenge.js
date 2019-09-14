function missing(arr) {
    arraySort(arr);
    const result = [];
    if (arr.length <= 1) {
         return result 
    }
    var i = 1, val = arr[0] + 1;
    //not sure whatthis does.
    const count = ((arr[arr.length - 1]) - val) - (arr.length - 2);
    while (result.length < count) {
        while (arr[i] !== val) { result.push(val++) }
        i++;
        val++;
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

console.log(missing([0,4,6,8]));
console.log(missing([-2,0,6,-4,3,1]));
console.log(arraySort([-2,0,6,-4,3,1]));