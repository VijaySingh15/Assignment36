let array = [25,"Vijay",69,"Mango",40,30,"Banana"]
function modifyArray(arr){
    for(i=0;i<array.length;i++){
        if(array.length<5){
            return "Item not found";
        }else{
            array[5]="Grapes"
        }
    }
    return array;
}
console.log(modifyArray(array));