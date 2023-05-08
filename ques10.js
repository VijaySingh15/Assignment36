let validVariable = 'my-Var';
function isValidVariable(validVariable){
    if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(validVariable)){
        return "It is Valid Variable";
    }else{
        return "It is not Valid Variable";
    }
}
console.log(isValidVariable(validVariable));