// my challenge is that the code prints only one missing number. 
// if two numbers are missing cocurrently, it prints only one
var number=['1','3','5','8','10'];
var num1=[];
var missingNum;
function findMissingNumbers(numArray){
    if(numArray[0]>1 || numArray[numArray-1]<1){
        missingNum=1;
    }
    else{
        for(var i=0; i < numArray.length; i++){
        
            if((numArray[i]- numArray[i-1]) >  1){
                missingNum = parseInt(number[i-1])+ 1;
                num1.push(missingNum);
           
               
            }
            
           
        }
     }
    return ("missing numbers are  " + num1)
   
}
console.log(findMissingNumbers(number))
console.log(findMissingNumbers([1,5,7,9,12,14]));