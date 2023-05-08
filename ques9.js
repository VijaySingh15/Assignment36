let array = [25,36,10,53,"Vijay",89]
function check_array(arr){
    let dataType=typeof array[0];
    for(i=1;i<=array.length;i++){
        if(typeof array[i]!= dataType){
            return "Items are not same data type";
        }
    }
    return "Yes! Items are same data type";
}
console.log(check_array(array));