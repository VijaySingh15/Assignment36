let array = [25,35,40,65,80];
function sumOfArrayItems(arr){
    let sum =0.
    for (i=0;i<array.length;i++){
        if(typeof array[i]!="number"){
            return "All Elements of the array not a Number";
        }else{
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumOfArrayItems(array));