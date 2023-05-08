let even_arr=[];
let odd_arr=[];
let e=0;
let o=0;
let evenSum=0;
let oddSum=0;
for (let i=0;i<=100;i=i+1){
    if(i%2===0){
        evenSum=evenSum+i;
        even_arr[e]=i;
        e=e+1;
    }
    else{
        oddSum=oddSum+i;
        odd_arr[o]=i;
        o=o+1;
    }
}
console.log(`Sum of all even numbers 0 to 100 is ${evenSum}`);
console.log(`Sum of all odd numebrs 0 to 100 is ${oddSum}`);
console.log(even_arr);
console.log(odd_arr);
